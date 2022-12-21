/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot's Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ObjectSyncFeature {
    /**
    * Indicates if syncing the object type from the external accounting system into HubSpot is supported.
    */
    'toHubSpot': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "toHubSpot",
            "baseName": "toHubSpot",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectSyncFeature.attributeTypeMap;
    }

    public constructor() {
    }
}

