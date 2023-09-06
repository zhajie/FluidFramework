/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/aqueduct-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_BaseContainerRuntimeFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_BaseContainerRuntimeFactory():
    TypeOnly<old.BaseContainerRuntimeFactory>;
declare function use_current_ClassDeclaration_BaseContainerRuntimeFactory(
    use: TypeOnly<current.BaseContainerRuntimeFactory>);
use_current_ClassDeclaration_BaseContainerRuntimeFactory(
    get_old_ClassDeclaration_BaseContainerRuntimeFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_BaseContainerRuntimeFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_BaseContainerRuntimeFactory():
    TypeOnly<current.BaseContainerRuntimeFactory>;
declare function use_old_ClassDeclaration_BaseContainerRuntimeFactory(
    use: TypeOnly<old.BaseContainerRuntimeFactory>);
use_old_ClassDeclaration_BaseContainerRuntimeFactory(
    get_current_ClassDeclaration_BaseContainerRuntimeFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore():
    TypeOnly<old.ContainerRuntimeFactoryWithDefaultDataStore>;
declare function use_current_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore(
    use: TypeOnly<current.ContainerRuntimeFactoryWithDefaultDataStore>);
use_current_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore(
    get_old_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore():
    TypeOnly<current.ContainerRuntimeFactoryWithDefaultDataStore>;
declare function use_old_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore(
    use: TypeOnly<old.ContainerRuntimeFactoryWithDefaultDataStore>);
use_old_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore(
    get_current_ClassDeclaration_ContainerRuntimeFactoryWithDefaultDataStore());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DataObject": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DataObject():
    TypeOnly<old.DataObject>;
declare function use_current_ClassDeclaration_DataObject(
    use: TypeOnly<current.DataObject>);
use_current_ClassDeclaration_DataObject(
    get_old_ClassDeclaration_DataObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DataObject": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DataObject():
    TypeOnly<current.DataObject>;
declare function use_old_ClassDeclaration_DataObject(
    use: TypeOnly<old.DataObject>);
use_old_ClassDeclaration_DataObject(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_DataObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DataObjectFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DataObjectFactory():
    TypeOnly<old.DataObjectFactory<any,any>>;
declare function use_current_ClassDeclaration_DataObjectFactory(
    use: TypeOnly<current.DataObjectFactory<any,any>>);
use_current_ClassDeclaration_DataObjectFactory(
    get_old_ClassDeclaration_DataObjectFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DataObjectFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DataObjectFactory():
    TypeOnly<current.DataObjectFactory<any,any>>;
declare function use_old_ClassDeclaration_DataObjectFactory(
    use: TypeOnly<old.DataObjectFactory<any,any>>);
use_old_ClassDeclaration_DataObjectFactory(
    get_current_ClassDeclaration_DataObjectFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_DataObjectTypes": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_DataObjectTypes():
    TypeOnly<old.DataObjectTypes>;
declare function use_current_InterfaceDeclaration_DataObjectTypes(
    use: TypeOnly<current.DataObjectTypes>);
use_current_InterfaceDeclaration_DataObjectTypes(
    get_old_InterfaceDeclaration_DataObjectTypes());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_DataObjectTypes": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_DataObjectTypes():
    TypeOnly<current.DataObjectTypes>;
declare function use_old_InterfaceDeclaration_DataObjectTypes(
    use: TypeOnly<old.DataObjectTypes>);
use_old_InterfaceDeclaration_DataObjectTypes(
    get_current_InterfaceDeclaration_DataObjectTypes());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDataObjectProps": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDataObjectProps():
    TypeOnly<old.IDataObjectProps>;
declare function use_current_InterfaceDeclaration_IDataObjectProps(
    use: TypeOnly<current.IDataObjectProps>);
use_current_InterfaceDeclaration_IDataObjectProps(
    get_old_InterfaceDeclaration_IDataObjectProps());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDataObjectProps": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDataObjectProps():
    TypeOnly<current.IDataObjectProps>;
declare function use_old_InterfaceDeclaration_IDataObjectProps(
    use: TypeOnly<old.IDataObjectProps>);
use_old_InterfaceDeclaration_IDataObjectProps(
    // @ts-expect-error compatibility expected to be broken
    get_current_InterfaceDeclaration_IDataObjectProps());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRootDataObjectFactory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IRootDataObjectFactory():
    TypeOnly<old.IRootDataObjectFactory>;
declare function use_current_InterfaceDeclaration_IRootDataObjectFactory(
    use: TypeOnly<current.IRootDataObjectFactory>);
use_current_InterfaceDeclaration_IRootDataObjectFactory(
    get_old_InterfaceDeclaration_IRootDataObjectFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRootDataObjectFactory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IRootDataObjectFactory():
    TypeOnly<current.IRootDataObjectFactory>;
declare function use_old_InterfaceDeclaration_IRootDataObjectFactory(
    use: TypeOnly<old.IRootDataObjectFactory>);
use_old_InterfaceDeclaration_IRootDataObjectFactory(
    get_current_InterfaceDeclaration_IRootDataObjectFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PureDataObject": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_PureDataObject():
    TypeOnly<old.PureDataObject>;
declare function use_current_ClassDeclaration_PureDataObject(
    use: TypeOnly<current.PureDataObject>);
use_current_ClassDeclaration_PureDataObject(
    get_old_ClassDeclaration_PureDataObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PureDataObject": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_PureDataObject():
    TypeOnly<current.PureDataObject>;
declare function use_old_ClassDeclaration_PureDataObject(
    use: TypeOnly<old.PureDataObject>);
use_old_ClassDeclaration_PureDataObject(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_PureDataObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PureDataObjectFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_PureDataObjectFactory():
    TypeOnly<old.PureDataObjectFactory<any,any>>;
declare function use_current_ClassDeclaration_PureDataObjectFactory(
    use: TypeOnly<current.PureDataObjectFactory<any,any>>);
use_current_ClassDeclaration_PureDataObjectFactory(
    get_old_ClassDeclaration_PureDataObjectFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PureDataObjectFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_PureDataObjectFactory():
    TypeOnly<current.PureDataObjectFactory<any,any>>;
declare function use_old_ClassDeclaration_PureDataObjectFactory(
    use: TypeOnly<old.PureDataObjectFactory<any,any>>);
use_old_ClassDeclaration_PureDataObjectFactory(
    get_current_ClassDeclaration_PureDataObjectFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_defaultFluidObjectRequestHandler": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_defaultFluidObjectRequestHandler():
    TypeOnly<typeof old.defaultFluidObjectRequestHandler>;
declare function use_current_FunctionDeclaration_defaultFluidObjectRequestHandler(
    use: TypeOnly<typeof current.defaultFluidObjectRequestHandler>);
use_current_FunctionDeclaration_defaultFluidObjectRequestHandler(
    get_old_FunctionDeclaration_defaultFluidObjectRequestHandler());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_defaultFluidObjectRequestHandler": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_defaultFluidObjectRequestHandler():
    TypeOnly<typeof current.defaultFluidObjectRequestHandler>;
declare function use_old_FunctionDeclaration_defaultFluidObjectRequestHandler(
    use: TypeOnly<typeof old.defaultFluidObjectRequestHandler>);
use_old_FunctionDeclaration_defaultFluidObjectRequestHandler(
    get_current_FunctionDeclaration_defaultFluidObjectRequestHandler());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_defaultRouteRequestHandler": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_defaultRouteRequestHandler():
    TypeOnly<typeof old.defaultRouteRequestHandler>;
declare function use_current_VariableDeclaration_defaultRouteRequestHandler(
    use: TypeOnly<typeof current.defaultRouteRequestHandler>);
use_current_VariableDeclaration_defaultRouteRequestHandler(
    get_old_VariableDeclaration_defaultRouteRequestHandler());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_defaultRouteRequestHandler": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_defaultRouteRequestHandler():
    TypeOnly<typeof current.defaultRouteRequestHandler>;
declare function use_old_VariableDeclaration_defaultRouteRequestHandler(
    use: TypeOnly<typeof old.defaultRouteRequestHandler>);
use_old_VariableDeclaration_defaultRouteRequestHandler(
    get_current_VariableDeclaration_defaultRouteRequestHandler());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDefaultObjectFromContainer": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getDefaultObjectFromContainer():
    TypeOnly<typeof old.getDefaultObjectFromContainer>;
declare function use_current_FunctionDeclaration_getDefaultObjectFromContainer(
    use: TypeOnly<typeof current.getDefaultObjectFromContainer>);
use_current_FunctionDeclaration_getDefaultObjectFromContainer(
    get_old_FunctionDeclaration_getDefaultObjectFromContainer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDefaultObjectFromContainer": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getDefaultObjectFromContainer():
    TypeOnly<typeof current.getDefaultObjectFromContainer>;
declare function use_old_FunctionDeclaration_getDefaultObjectFromContainer(
    use: TypeOnly<typeof old.getDefaultObjectFromContainer>);
use_old_FunctionDeclaration_getDefaultObjectFromContainer(
    get_current_FunctionDeclaration_getDefaultObjectFromContainer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getObjectFromContainer": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getObjectFromContainer():
    TypeOnly<typeof old.getObjectFromContainer>;
declare function use_current_FunctionDeclaration_getObjectFromContainer(
    use: TypeOnly<typeof current.getObjectFromContainer>);
use_current_FunctionDeclaration_getObjectFromContainer(
    get_old_FunctionDeclaration_getObjectFromContainer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getObjectFromContainer": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getObjectFromContainer():
    TypeOnly<typeof current.getObjectFromContainer>;
declare function use_old_FunctionDeclaration_getObjectFromContainer(
    use: TypeOnly<typeof old.getObjectFromContainer>);
use_old_FunctionDeclaration_getObjectFromContainer(
    get_current_FunctionDeclaration_getObjectFromContainer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getObjectWithIdFromContainer": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getObjectWithIdFromContainer():
    TypeOnly<typeof old.getObjectWithIdFromContainer>;
declare function use_current_FunctionDeclaration_getObjectWithIdFromContainer(
    use: TypeOnly<typeof current.getObjectWithIdFromContainer>);
use_current_FunctionDeclaration_getObjectWithIdFromContainer(
    get_old_FunctionDeclaration_getObjectWithIdFromContainer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getObjectWithIdFromContainer": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getObjectWithIdFromContainer():
    TypeOnly<typeof current.getObjectWithIdFromContainer>;
declare function use_old_FunctionDeclaration_getObjectWithIdFromContainer(
    use: TypeOnly<typeof old.getObjectWithIdFromContainer>);
use_old_FunctionDeclaration_getObjectWithIdFromContainer(
    get_current_FunctionDeclaration_getObjectWithIdFromContainer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_mountableViewRequestHandler": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_mountableViewRequestHandler():
    TypeOnly<typeof old.mountableViewRequestHandler>;
declare function use_current_VariableDeclaration_mountableViewRequestHandler(
    use: TypeOnly<typeof current.mountableViewRequestHandler>);
use_current_VariableDeclaration_mountableViewRequestHandler(
    get_old_VariableDeclaration_mountableViewRequestHandler());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_mountableViewRequestHandler": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_mountableViewRequestHandler():
    TypeOnly<typeof current.mountableViewRequestHandler>;
declare function use_old_VariableDeclaration_mountableViewRequestHandler(
    use: TypeOnly<typeof old.mountableViewRequestHandler>);
use_old_VariableDeclaration_mountableViewRequestHandler(
    get_current_VariableDeclaration_mountableViewRequestHandler());
