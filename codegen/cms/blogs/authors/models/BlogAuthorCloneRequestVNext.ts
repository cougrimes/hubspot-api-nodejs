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

import { BlogAuthor } from '../models/BlogAuthor';

/**
* Request body object for cloning blog authors.
*/
export class BlogAuthorCloneRequestVNext {
    /**
    * ID of the object to be cloned.
    */
    'id': string;
    /**
    * Language of newly cloned object.
    */
    'language'?: string;
    /**
    * Primary language in multi-language group.
    */
    'primaryLanguage'?: string;
    'blogAuthor': BlogAuthor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryLanguage",
            "baseName": "primaryLanguage",
            "type": "string",
            "format": ""
        },
        {
            "name": "blogAuthor",
            "baseName": "blogAuthor",
            "type": "BlogAuthor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlogAuthorCloneRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

