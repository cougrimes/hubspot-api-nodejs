/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Information on the task that has been started, and where to check it's status.
*/
export class FolderUpdateTaskLocator {
    /**
    * The ID of the task
    */
    'id': string;
    /**
    * Links for where to check information related to the task. The `status` link gives the URL for where to check the status of the task.
    */
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FolderUpdateTaskLocator.attributeTypeMap;
    }

    public constructor() {
    }
}

