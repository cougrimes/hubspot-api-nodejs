/**
 * HubSpot Events API
 * API for accessing CRM object events.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class NextPage {
    'after': string;
    'link'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "after",
            "baseName": "after",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NextPage.attributeTypeMap;
    }

    public constructor() {
    }
}

