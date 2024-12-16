/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by flub generate:typetests in @fluid-tools/build-cli.
 */

import type { TypeOnly, MinimalType, FullType, requireAssignableTo } from "@fluidframework/build-tools";
import type * as old from "@fluidframework/test-utils-previous/internal";

import type * as current from "../../index.js";

declare type MakeUnusedImportErrorsGoAway<T> = TypeOnly<T> | MinimalType<T> | FullType<T> | typeof old | typeof current | requireAssignableTo<true, true>;

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_LoaderContainerTracker": {"forwardCompat": false}
 */
// @ts-expect-error compatibility expected to be broken
declare type old_as_current_for_Class_LoaderContainerTracker = requireAssignableTo<TypeOnly<old.LoaderContainerTracker>, TypeOnly<current.LoaderContainerTracker>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_LoaderContainerTracker": {"backCompat": false}
 */
declare type current_as_old_for_Class_LoaderContainerTracker = requireAssignableTo<TypeOnly<current.LoaderContainerTracker>, TypeOnly<old.LoaderContainerTracker>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassStatics_LoaderContainerTracker": {"backCompat": false}
 */
declare type current_as_old_for_ClassStatics_LoaderContainerTracker = requireAssignableTo<TypeOnly<typeof current.LoaderContainerTracker>, TypeOnly<typeof old.LoaderContainerTracker>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Function_createAndAttachContainer": {"backCompat": false}
 */
declare type current_as_old_for_Function_createAndAttachContainer = requireAssignableTo<TypeOnly<typeof current.createAndAttachContainer>, TypeOnly<typeof old.createAndAttachContainer>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IOpProcessingController": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_IOpProcessingController = requireAssignableTo<TypeOnly<old.IOpProcessingController>, TypeOnly<current.IOpProcessingController>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IOpProcessingController": {"backCompat": false}
 */
declare type current_as_old_for_Interface_IOpProcessingController = requireAssignableTo<TypeOnly<current.IOpProcessingController>, TypeOnly<old.IOpProcessingController>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IProvideTestFluidObject": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_IProvideTestFluidObject = requireAssignableTo<TypeOnly<old.IProvideTestFluidObject>, TypeOnly<current.IProvideTestFluidObject>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IProvideTestFluidObject": {"backCompat": false}
 */
declare type current_as_old_for_Interface_IProvideTestFluidObject = requireAssignableTo<TypeOnly<current.IProvideTestFluidObject>, TypeOnly<old.IProvideTestFluidObject>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_ITestFluidObject": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_ITestFluidObject = requireAssignableTo<TypeOnly<old.ITestFluidObject>, TypeOnly<current.ITestFluidObject>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_ITestFluidObject": {"backCompat": false}
 */
declare type current_as_old_for_Interface_ITestFluidObject = requireAssignableTo<TypeOnly<current.ITestFluidObject>, TypeOnly<old.ITestFluidObject>>
