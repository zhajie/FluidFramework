## API Report File for "@fluid-private/test-version-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ConsensusQueue } from '@fluidframework/ordered-collection';
import { ConsensusRegisterCollection } from '@fluidframework/register-collection';
import { ContainerRuntime } from '@fluidframework/container-runtime';
import { ContainerRuntimeFactoryWithDefaultDataStore } from '@fluidframework/aqueduct';
import { DataObject } from '@fluidframework/aqueduct';
import { DataObjectFactory } from '@fluidframework/aqueduct';
import { DriverApi } from '@fluid-private/test-drivers';
import { FluidTestDriverConfig } from '@fluid-private/test-drivers';
import { IFluidDataStoreContext } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreFactory } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreRuntime } from '@fluidframework/datastore-definitions';
import { IFluidLoadable } from '@fluidframework/core-interfaces';
import { Ink } from '@fluidframework/ink';
import { ISharedDirectory } from '@fluidframework/map';
import { ITelemetryGenericEvent } from '@fluidframework/core-interfaces';
import { ITestContainerConfig } from '@fluidframework/test-utils';
import { ITestObjectProvider } from '@fluidframework/test-utils';
import { Loader } from '@fluidframework/container-loader';
import { SharedCell } from '@fluidframework/cell';
import { SharedCounter } from '@fluidframework/counter';
import { SharedDirectory } from '@fluidframework/map';
import { SharedMap } from '@fluidframework/map';
import { SharedMatrix } from '@fluidframework/matrix';
import { SharedString } from '@fluidframework/sequence';
import { SparseMatrix } from '@fluid-experimental/sequence-deprecated';
import { TestDriverTypes } from '@fluidframework/test-driver-definitions';
import { TestFluidObjectFactory } from '@fluidframework/test-utils';
import { TestObjectProvider } from '@fluidframework/test-utils';

// @internal (undocumented)
export function assertDocumentTypeInfo(info: DocumentTypeInfo, type: DocumentType_2): asserts info is DocumentMapInfo | DocumentMultipleDataStoresInfo;

// @internal (undocumented)
export type BenchmarkType = "ExecutionTime" | "MemoryUsage";

// @internal (undocumented)
export interface CompatApis {
    // (undocumented)
    containerRuntime: ReturnType<typeof getContainerRuntimeApi>;
    // (undocumented)
    containerRuntimeForLoading?: ReturnType<typeof getContainerRuntimeApi>;
    // (undocumented)
    dataRuntime: ReturnType<typeof getDataRuntimeApi>;
    // (undocumented)
    dataRuntimeForLoading?: ReturnType<typeof getDataRuntimeApi>;
    // (undocumented)
    dds: ReturnType<typeof getDataRuntimeApi>["dds"];
    // (undocumented)
    ddsForLoading?: ReturnType<typeof getDataRuntimeApi>["dds"];
    // (undocumented)
    driver: ReturnType<typeof getDriverApi>;
    // (undocumented)
    driverForLoading?: ReturnType<typeof getDriverApi>;
    // (undocumented)
    loader: ReturnType<typeof getLoaderApi>;
    // (undocumented)
    loaderForLoading?: ReturnType<typeof getLoaderApi>;
}

// @internal (undocumented)
export type CompatVersionKind = "FullCompat" | "NoCompat" | "LoaderCompat";

// @internal (undocumented)
export const ContainerRuntimeApi: {
    version: string;
    ContainerRuntime: typeof ContainerRuntime;
    ContainerRuntimeFactoryWithDefaultDataStore: typeof ContainerRuntimeFactoryWithDefaultDataStore;
};

// @internal (undocumented)
export const DataRuntimeApi: {
    version: string;
    DataObject: typeof DataObject;
    DataObjectFactory: typeof DataObjectFactory;
    TestFluidObjectFactory: typeof TestFluidObjectFactory;
    dds: {
        SharedCell: typeof SharedCell;
        SharedCounter: typeof SharedCounter;
        Ink: typeof Ink;
        SharedDirectory: typeof SharedDirectory;
        SharedMap: typeof SharedMap;
        SharedMatrix: typeof SharedMatrix;
        ConsensusQueue: typeof ConsensusQueue;
        ConsensusRegisterCollection: typeof ConsensusRegisterCollection;
        SharedString: typeof SharedString;
        SparseMatrix: typeof SparseMatrix;
    };
};

// @internal (undocumented)
export type DescribeCompat = DescribeCompatSuite & Record<"skip" | "only" | "noCompat", DescribeCompatSuite>;

// @internal
export const describeCompat: DescribeCompat;

// @internal (undocumented)
export type DescribeCompatSuite = (name: string, compatVersionKind: CompatVersionKind, tests: (this: Mocha.Suite, provider: (options?: ITestObjectProviderOptions) => ITestObjectProvider, apis: CompatApis) => void) => Mocha.Suite | void;

// @internal (undocumented)
export interface DescribeE2EDocInfo {
    // (undocumented)
    documentType: DocumentType_2;
    // (undocumented)
    documentTypeInfo: DocumentTypeInfo;
    minSampleCount?: number;
    // (undocumented)
    supportedEndpoints?: TestDriverTypes[];
    // (undocumented)
    testTitle: string;
}

// @internal (undocumented)
export const describeE2EDocRun: DescribeE2EDocSuite;

// @internal (undocumented)
export const describeE2EDocs: DescribeE2EDocSuite;

// @internal (undocumented)
export const describeE2EDocsMemory: DescribeE2EDocSuite;

// @internal (undocumented)
export const describeE2EDocsRuntime: DescribeE2EDocSuite;

// @internal (undocumented)
export type DescribeE2EDocSuite = (title: string, tests: (this: Mocha.Suite, provider: (options?: ITestObjectProviderOptions) => ITestObjectProvider, documentType: () => DescribeE2EDocInfo) => void, docTypes?: DescribeE2EDocInfo[], testType?: string) => Mocha.Suite | void;

// @internal
export function describeInstallVersions(requestedVersions?: IRequestedFluidVersions, timeoutMs?: number): DescribeWithVersions;

// @internal (undocumented)
export type DescribeSuiteWithVersions = (name: string, tests: (this: Mocha.Suite, provider: (options?: ITestObjectProviderOptions) => ITestObjectProvider) => void) => Mocha.Suite | void;

// @internal (undocumented)
export type DescribeWithVersions = DescribeSuiteWithVersions & Record<"skip" | "only", DescribeSuiteWithVersions>;

// @internal (undocumented)
export interface DocumentMapInfo {
    // (undocumented)
    itemSizeMb: number;
    // (undocumented)
    numberOfItems: number;
}

// @internal (undocumented)
export interface DocumentMatrixInfo {
    // (undocumented)
    columnSize: number;
    // (undocumented)
    rowSize: number;
    // (undocumented)
    stringSize: number;
}

// @internal (undocumented)
export interface DocumentMatrixPlainInfo {
    // (undocumented)
    beginColumn: number;
    // (undocumented)
    beginRow: number;
    // (undocumented)
    columnSize: number;
    // (undocumented)
    endColumn: number;
    // (undocumented)
    endRow: number;
    // (undocumented)
    rowSize: number;
    // (undocumented)
    stringSize: number;
}

// @internal (undocumented)
export interface DocumentMultipleDataStoresInfo {
    // (undocumented)
    numberDataStores: number;
    // (undocumented)
    numberDataStoresPerIteration: number;
}

// @internal
type DocumentType_2 =
/** Document with a SharedMap */
"DocumentMap"
/** Document with Multiple DataStores */
| "DocumentMultipleDataStores"
/** Document with a SharedMatrix */
| "DocumentMatrix"
/** Document with a SharedMatrix and plain objects */
| "DocumentMatrixPlain";
export { DocumentType_2 as DocumentType }

// @internal (undocumented)
export type DocumentTypeInfo = DocumentMapInfo | DocumentMultipleDataStoresInfo | DocumentMatrixInfo | DocumentMatrixPlainInfo;

// @internal (undocumented)
export const ensurePackageInstalled: (baseVersion: string, version: number | string, force: boolean) => Promise<InstalledPackage | undefined>;

// @internal (undocumented)
export type ExpectedEvents = ITelemetryGenericEvent[] | Partial<Record<TestDriverTypes, ITelemetryGenericEvent[]>>;

// @internal (undocumented)
export type ExpectsTest = (name: string, orderedExpectedEvents: ExpectedEvents, test: Mocha.AsyncFunc) => Mocha.Test;

// @internal
export function getContainerRuntimeApi(baseVersion: string, requested?: number | string, adjustMajorPublic?: boolean): typeof ContainerRuntimeApi;

// @internal (undocumented)
export const getCurrentBenchmarkType: (currentType: DescribeE2EDocSuite) => BenchmarkType;

// @internal
export function getDataRuntimeApi(baseVersion: string, requested?: number | string, adjustMajorPublic?: boolean): typeof DataRuntimeApi;

// @internal (undocumented)
export const getDataStoreFactory: (containerOptions?: ITestContainerConfig) => IFluidDataStoreFactory;

// @internal
export function getDriverApi(baseVersion: string, requested?: number | string, adjustMajorPublic?: boolean): typeof DriverApi;

// @internal
export function getLoaderApi(baseVersion: string, requested?: number | string, adjustMajorPublic?: boolean): typeof LoaderApi;

// @internal (undocumented)
export function getVersionedTestObjectProvider(baseVersion: string, loaderVersion?: number | string, driverConfig?: {
    type?: TestDriverTypes;
    config?: FluidTestDriverConfig;
    version?: number | string;
}, runtimeVersion?: number | string, dataRuntimeVersion?: number | string): Promise<TestObjectProvider>;

// @internal (undocumented)
export function getVersionedTestObjectProviderFromApis(apis: Omit<CompatApis, "dds">, driverConfig?: {
    type?: TestDriverTypes;
    config?: FluidTestDriverConfig;
}): Promise<TestObjectProvider>;

// @internal (undocumented)
export interface InstalledPackage {
    // (undocumented)
    modulePath: string;
    // (undocumented)
    version: string;
}

// @internal
export interface IRequestedFluidVersions {
    requestAbsoluteVersions?: string[];
    requestRelativeVersions?: number;
}

// @internal (undocumented)
export function isDocumentMapInfo(info: DocumentTypeInfo): info is DocumentMapInfo;

// @internal (undocumented)
export function isDocumentMatrixInfo(info: DocumentTypeInfo): info is DocumentMatrixInfo;

// @internal (undocumented)
export function isDocumentMatrixPlainInfo(info: DocumentTypeInfo): info is DocumentMatrixPlainInfo;

// @internal (undocumented)
export function isDocumentMultipleDataStoresInfo(info: DocumentTypeInfo): info is DocumentMultipleDataStoresInfo;

// @internal (undocumented)
export function isMemoryTest(): boolean;

// @internal (undocumented)
export interface ITestDataObject extends IFluidLoadable {
    // (undocumented)
    _context: IFluidDataStoreContext;
    // (undocumented)
    _root: ISharedDirectory;
    // (undocumented)
    _runtime: IFluidDataStoreRuntime;
}

// @internal (undocumented)
export interface ITestObjectProviderOptions {
    resetAfterEach?: boolean;
    syncSummarizer?: boolean;
}

// @internal
export const itExpects: ExpectsTest & Record<"only" | "skip", ExpectsTest>;

// @internal
export const itExpectsSkipsFailureOnSpecificDrivers: SkippedErrorExpectingTestWithDriverType;

// @internal
export const itSkipsFailureOnSpecificDrivers: SkippedTestWithDriverType;

// @internal (undocumented)
export const LoaderApi: {
    version: string;
    Loader: typeof Loader;
};

// @internal
export function mochaGlobalSetup(): Promise<void>;

// @internal (undocumented)
export type SkippedErrorExpectingTestWithDriverType = (name: string, orderedExpectedEvents: ExpectedEvents, skippedDrivers: TestDriverTypes[], test: Mocha.AsyncFunc) => Mocha.Test;

// @internal (undocumented)
export type SkippedTestWithDriverType = (name: string, skippedDrivers: TestDriverTypes[], test: Mocha.AsyncFunc) => Mocha.Test;

// @internal (undocumented)
export const TestDataObjectType = "@fluid-example/test-dataStore";

// (No @packageDocumentation comment for this package)

```