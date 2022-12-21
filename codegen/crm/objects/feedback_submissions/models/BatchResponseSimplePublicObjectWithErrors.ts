/**
 * Feedback Submissions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObject } from '../models/SimplePublicObject';
import { StandardError } from '../models/StandardError';

export class BatchResponseSimplePublicObjectWithErrors {
    'status': BatchResponseSimplePublicObjectWithErrorsStatusEnum;
    'results': Array<SimplePublicObject>;
    'numErrors'?: number;
    'errors'?: Array<StandardError>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSimplePublicObjectWithErrorsStatusEnum",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>",
            "format": ""
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSimplePublicObjectWithErrors.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BatchResponseSimplePublicObjectWithErrorsStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

