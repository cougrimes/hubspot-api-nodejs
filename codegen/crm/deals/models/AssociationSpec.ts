/**
 * Deals
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class AssociationSpec {
    'associationCategory': AssociationSpecAssociationCategoryEnum;
    'associationTypeId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associationCategory",
            "baseName": "associationCategory",
            "type": "AssociationSpecAssociationCategoryEnum",
            "format": ""
        },
        {
            "name": "associationTypeId",
            "baseName": "associationTypeId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return AssociationSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AssociationSpecAssociationCategoryEnum = "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED" ;

