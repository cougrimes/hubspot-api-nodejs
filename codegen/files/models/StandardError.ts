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

import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';

export class StandardError {
    'status': string;
    'id'?: string;
    'category': ErrorCategory;
    'subCategory'?: any;
    'message': string;
    'errors': Array<ErrorDetail>;
    'context': { [key: string]: Array<string>; };
    'links': { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ErrorCategory",
            "format": ""
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "any",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDetail>",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StandardError.attributeTypeMap;
    }

    public constructor() {
    }
}

