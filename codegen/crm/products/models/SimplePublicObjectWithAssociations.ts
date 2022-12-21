/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

export class SimplePublicObjectWithAssociations {
    'id': string;
    'properties': { [key: string]: string; };
    'propertiesWithHistory'?: { [key: string]: Array<ValueWithTimestamp>; };
    'createdAt': Date;
    'updatedAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;
    'associations'?: { [key: string]: CollectionResponseAssociatedId; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "{ [key: string]: Array<ValueWithTimestamp>; }",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "{ [key: string]: CollectionResponseAssociatedId; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectWithAssociations.attributeTypeMap;
    }

    public constructor() {
    }
}

