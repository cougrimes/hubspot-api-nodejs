/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SimplePublicObjectInput {
    'properties': { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectInput.attributeTypeMap;
    }
}

