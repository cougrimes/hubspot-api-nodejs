/**
 * Blog Post endpoints
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* A color defined by RGB values.
*/
export class RGBAColor {
    /**
    * Red.
    */
    'r': number;
    /**
    * Green.
    */
    'g': number;
    /**
    * Blue.
    */
    'b': number;
    /**
    * Alpha.
    */
    'a': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "r",
            "baseName": "r",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "g",
            "baseName": "g",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "b",
            "baseName": "b",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "a",
            "baseName": "a",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RGBAColor.attributeTypeMap;
    }

    public constructor() {
    }
}

