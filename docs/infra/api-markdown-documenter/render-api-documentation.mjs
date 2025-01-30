/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	ApiItemKind,
	ApiItemUtilities,
	DocumentationNodeType,
	getApiItemTransformationConfigurationWithDefaults,
	HierarchyKind,
	loadModel,
	MarkdownRenderer,
	ReleaseTag,
	transformApiModel,
} from "@fluid-tools/api-markdown-documenter";
import { PackageName } from "@rushstack/node-core-library";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

import { cleanIgnored } from "../clean-ignored.mjs";
import { admonitionNodeType } from "./admonition-node.mjs";
import { layoutContent } from "./api-documentation-layout.mjs";
import {
	renderAdmonitionNode,
	renderBlockQuoteNode,
	renderTableNode,
} from "./custom-renderers.mjs";

const generatedContentNotice =
	"<!-- Do not edit this file. It is automatically generated by @fluidtools/api-markdown-documenter. -->";

/**
 * Generates a documentation suite for the API model saved under `inputDir`, saving the output to `outputDir`.
 * @param {string} inputDir - The directory path containing the API model to be processed.
 * @param {string} outputDir - The directory path under which the generated documentation suite will be saved.
 * @param {string} uriRootDir - The base for all links between API members.
 * @param {string} apiVersion - The "version" of the API model being processed, represented as a string.
 * E.g. "1", "2", "2.1", etc.
 * Used for some policy decisions, and for logging purposes.
 */
export async function renderApiDocumentation(inputDir, outputDir, uriRootDir, apiVersion) {
	/**
	 * Logs a progress message, prefaced with the API version number to help differentiate parallel logging output.
	 */
	function logProgress(message) {
		console.log(`(v${apiVersion}) ${message}`);
	}

	/**
	 * Logs the error with the specified message, prefaced with the API version number to help differentiate parallel
	 * logging output, and re-throws the error.
	 */
	function logErrorAndRethrow(message, error) {
		console.error(chalk.red(`(v${apiVersion}) ${message}:`));
		console.error(error);
		throw error;
	}

	// Delete existing documentation output
	logProgress("Removing existing generated API docs...");
	await fs.ensureDir(outputDir);

	// Clean existing generated API documentation files, skipping any manually authored files under the same parent directory.
	await cleanIgnored(outputDir);

	// Process API reports
	logProgress("Loading API model...");

	const apiModel = await loadModel({ modelDirectoryPath: inputDir });

	// Custom renderers that utilize Docusaurus syntax for certain kinds of documentation elements.
	const customRenderers = {
		[DocumentationNodeType.BlockQuote]: renderBlockQuoteNode,
		[DocumentationNodeType.Table]: renderTableNode,
		[admonitionNodeType]: renderAdmonitionNode,
	};

	const config = getApiItemTransformationConfigurationWithDefaults({
		apiModel,
		hierarchy: {
			[ApiItemKind.Model]: HierarchyKind.Document,
			[ApiItemKind.Namespace]: HierarchyKind.Folder,
			[ApiItemKind.Package]: HierarchyKind.Folder,
			getDocumentName: (apiItem, hierarchyConfig) => {
				switch (apiItem.kind) {
					case ApiItemKind.Model:
						// We inject a custom landing page ("index.mdx") for a curated package reference.
						// So we will give the auto-generated / complete model page its own separate document.
						return "package-reference";

					case ApiItemKind.Namespace:
					case ApiItemKind.Package:
						// Namespace and package items generate documents within their own folder.
						return "index";
					default:
						let documentName = ApiItemUtilities.createQualifiedDocumentNameForApiItem(
							apiItem,
							hierarchyConfig,
						);

						// Docusaurus treats any document name starting with "_" as a "partial" document, which
						// will not be included in the site output.
						// See: <https://docusaurus.io/docs/create-doc>
						// To work around this, while (hopefully) preventing name collisions, we will prefix
						// The filename with "u". E.g. `_foo.md` -> `u_foo.md`.
						// This doesn't affect displayed contents, strictly changes the resulting filenames and any
						// links to them.
						if (documentName.startsWith("_")) {
							documentName = `u${documentName}`;
						}

						return documentName;
				}
			},
		},
		newlineKind: "lf",
		uriRoot: uriRootDir,
		includeBreadcrumb: false, // Docusaurus includes this by default based on file hierarchy
		includeTopLevelDocumentHeading: false, // We inject `title` front-matter metadata instead
		createDefaultLayout: layoutContent,
		getAlertsForItem: (apiItem) => {
			const alerts = [];
			if (ApiItemUtilities.hasModifierTag(apiItem, "@system")) {
				alerts.push("System");
			} else {
				if (ApiItemUtilities.isDeprecated(apiItem)) {
					alerts.push("Deprecated");
				}
				if (ApiItemUtilities.hasModifierTag(apiItem, "@legacy")) {
					alerts.push("Legacy");
				}

				const releaseTag = ApiItemUtilities.getEffectiveReleaseLevel(apiItem);
				if (releaseTag === ReleaseTag.Alpha) {
					alerts.push("Alpha");
				} else if (releaseTag === ReleaseTag.Beta) {
					alerts.push("Beta");
				}
			}
			return alerts;
		},
		exclude: (apiItem) => {
			// Exclude packages that aren't intended for public consumption.
			if (apiItem.kind === ApiItemKind.Package) {
				const packageName = apiItem.name;
				const packageScope = PackageName.getScope(packageName);

				// Skip packages that are published, but are not intended for direct public consumption.
				// TODO: Also skip `@fluid-internal` packages once we no longer have public, user-facing APIs that reference their contents.
				if (
					["@fluid-example", "@fluid-experimental", "@fluid-private"].includes(
						packageScope,
					)
				) {
					return true;
				}
			}

			// TODO: exclude alpha+legacy APIs, which are not intended for public consumption.

			return false;
		},
	});

	logProgress("Generating API documentation...");

	let documents;
	try {
		documents = transformApiModel(config);
	} catch (error) {
		logErrorAndRethrow("Encountered error while processing API model", error);
	}

	logProgress("Writing API documents to disk...");

	await Promise.all(
		documents.map(async (document) => {
			const documentApiItem = document.apiItem;

			// #region Filter documents based on site-specific requirements

			if (apiVersion === "1") {
				// Skip `fluid-framework` package landing page for v1.
				// Custom contents for this package's landing page are maintained via a checked-in file:
				// `versioned_docs/version-1/fluid-framework.mdx`.
				if (
					documentApiItem.kind === ApiItemKind.Package &&
					documentApiItem.displayName === "fluid-framework"
				) {
					logProgress("Skipping document generation for `fluid-framework` package.");
					return;
				}
			}

			// #endregion

			let fileContents;
			try {
				const documentBody = MarkdownRenderer.renderDocument(document, {
					startingHeadingLevel: 2,
					customRenderers,
				});

				const frontMatter = createFrontMatter(documentApiItem, config);

				fileContents = [frontMatter, generatedContentNotice, documentBody]
					.join("\n\n")
					.trim();
			} catch (error) {
				logErrorAndRethrow(
					`Encountered error while rendering Markdown contents for "${documentApiItem.displayName}"`,
					error,
				);
			}

			const filePath = path.join(outputDir, `${document.documentPath}.md`);

			try {
				await fs.ensureFile(filePath);
				await fs.writeFile(filePath, fileContents);
			} catch (error) {
				logErrorAndRethrow(
					`Encountered error while writing file output for "${document.apiItem.displayName}"`,
					error,
				);
			}
		}),
	);
}

function createFrontMatter(documentApiItem, config) {
	let title, sidebarLabel;
	if (documentApiItem.kind === ApiItemKind.Model) {
		sidebarLabel = "Package Reference";
		title = sidebarLabel;
	} else {
		sidebarLabel = documentApiItem.displayName.replace(/"/g, "").replace(/!/g, "");
		title = `${sidebarLabel} ${documentApiItem.kind}`;
	}

	const frontMatter = [
		"---",
		`title: "${title}"`,
		`sidebar_label: "${sidebarLabel}"`,
		// Associate the document with the "docs" sidebar to ensure the navigation is displayed when viewing this document.
		// Also ensures that Docusaurus generates a breadcrumb for this document.
		'displayed_sidebar: "docsSidebar"',
		"---",
	];

	return frontMatter.join("\n");
}
