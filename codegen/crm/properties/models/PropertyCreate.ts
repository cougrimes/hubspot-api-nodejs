/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OptionInput } from '../models/OptionInput';

export class PropertyCreate {
    /**
    * The internal property name, which must be used when referencing the property via the API.
    */
    'name': string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The data type of the property.
    */
    'type': PropertyCreateTypeEnum;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': PropertyCreateFieldTypeEnum;
    /**
    * The name of the property group the property belongs to.
    */
    'groupName': string;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * A list of valid options for the property. This field is required for enumerated properties.
    */
    'options'?: Array<OptionInput>;
    /**
    * Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property to be displayed after any positive values.
    */
    'displayOrder'?: number;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    /**
    * If true, the property won't be visible and can't be used in HubSpot.
    */
    'hidden'?: boolean;
    /**
    * Whether or not the property can be used in a HubSpot form.
    */
    'formField'?: boolean;
    /**
    * Applicable only for 'enumeration' type properties.  Should be set to true in conjunction with a 'referencedObjectType' of 'OWNER'.  Otherwise false.
    */
    'externalOptions'?: boolean;
    /**
    * Should be set to 'OWNER' when 'externalOptions' is true, which causes the property to dynamically pull option values from the current HubSpot users.
    */
    'referencedObjectType'?: string;
    /**
    * Represents a formula that is used to compute a calculated property.
    */
    'calculationFormula'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PropertyCreateTypeEnum",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "PropertyCreateFieldTypeEnum",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<OptionInput>",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "formField",
            "baseName": "formField",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "externalOptions",
            "baseName": "externalOptions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "calculationFormula",
            "baseName": "calculationFormula",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertyCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PropertyCreateTypeEnum = "string" | "number" | "date" | "datetime" | "enumeration" | "bool" ;
export type PropertyCreateFieldTypeEnum = "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation" ;

