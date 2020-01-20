/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicObjectId } from './publicObjectId';

export class BatchInputPublicObjectId {
    'inputs': Array<PublicObjectId>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<PublicObjectId>"
        }    ];

    static getAttributeTypeMap() {
        return BatchInputPublicObjectId.attributeTypeMap;
    }
}

