/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by flub generate:typetests in @fluid-tools/build-cli.
 */

import type { TypeOnly, MinimalType, FullType, requireAssignableTo } from "@fluidframework/build-tools";
import type * as old from "@fluidframework/core-utils-previous/internal";

import type * as current from "../../index.js";

declare type MakeUnusedImportErrorsGoAway<T> = TypeOnly<T> | MinimalType<T> | FullType<T> | typeof old | typeof current | requireAssignableTo<true, true>;

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_Deferred": {"forwardCompat": false}
 */
declare type old_as_current_for_Class_Deferred = requireAssignableTo<TypeOnly<old.Deferred<any>>, TypeOnly<current.Deferred<any>>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_Deferred": {"backCompat": false}
 */
declare type current_as_old_for_Class_Deferred = requireAssignableTo<TypeOnly<current.Deferred<any>>, TypeOnly<old.Deferred<any>>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_LazyPromise": {"forwardCompat": false}
 */
declare type old_as_current_for_Class_LazyPromise = requireAssignableTo<TypeOnly<old.LazyPromise<any>>, TypeOnly<current.LazyPromise<any>>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_LazyPromise": {"backCompat": false}
 */
declare type current_as_old_for_Class_LazyPromise = requireAssignableTo<TypeOnly<current.LazyPromise<any>>, TypeOnly<old.LazyPromise<any>>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_PromiseCache": {"forwardCompat": false}
 */
declare type old_as_current_for_Class_PromiseCache = requireAssignableTo<TypeOnly<old.PromiseCache<any,any>>, TypeOnly<current.PromiseCache<any,any>>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Class_PromiseCache": {"backCompat": false}
 */
declare type current_as_old_for_Class_PromiseCache = requireAssignableTo<TypeOnly<current.PromiseCache<any,any>>, TypeOnly<old.PromiseCache<any,any>>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassStatics_Deferred": {"backCompat": false}
 */
declare type current_as_old_for_ClassStatics_Deferred = requireAssignableTo<TypeOnly<typeof current.Deferred>, TypeOnly<typeof old.Deferred>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassStatics_LazyPromise": {"backCompat": false}
 */
declare type current_as_old_for_ClassStatics_LazyPromise = requireAssignableTo<TypeOnly<typeof current.LazyPromise>, TypeOnly<typeof old.LazyPromise>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassStatics_PromiseCache": {"backCompat": false}
 */
declare type current_as_old_for_ClassStatics_PromiseCache = requireAssignableTo<TypeOnly<typeof current.PromiseCache>, TypeOnly<typeof old.PromiseCache>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Function_assert": {"backCompat": false}
 */
declare type current_as_old_for_Function_assert = requireAssignableTo<TypeOnly<typeof current.assert>, TypeOnly<typeof old.assert>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_PromiseCacheOptions": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_PromiseCacheOptions = requireAssignableTo<TypeOnly<old.PromiseCacheOptions>, TypeOnly<current.PromiseCacheOptions>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_PromiseCacheOptions": {"backCompat": false}
 */
declare type current_as_old_for_Interface_PromiseCacheOptions = requireAssignableTo<TypeOnly<current.PromiseCacheOptions>, TypeOnly<old.PromiseCacheOptions>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAlias_PromiseCacheExpiry": {"forwardCompat": false}
 */
declare type old_as_current_for_TypeAlias_PromiseCacheExpiry = requireAssignableTo<TypeOnly<old.PromiseCacheExpiry>, TypeOnly<current.PromiseCacheExpiry>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAlias_PromiseCacheExpiry": {"backCompat": false}
 */
declare type current_as_old_for_TypeAlias_PromiseCacheExpiry = requireAssignableTo<TypeOnly<current.PromiseCacheExpiry>, TypeOnly<old.PromiseCacheExpiry>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Variable_compareArrays": {"backCompat": false}
 */
declare type current_as_old_for_Variable_compareArrays = requireAssignableTo<TypeOnly<typeof current.compareArrays>, TypeOnly<typeof old.compareArrays>>
