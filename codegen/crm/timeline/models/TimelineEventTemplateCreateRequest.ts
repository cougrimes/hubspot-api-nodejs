/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You'll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';

/**
* State of the template definition being created.
*/
export class TimelineEventTemplateCreateRequest {
    /**
    * The template name.
    */
    'name': string;
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline as a header.
    */
    'headerTemplate'?: string;
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline when you expand the details.
    */
    'detailTemplate'?: string;
    /**
    * A collection of tokens that can be used as custom properties on the event and to create fully fledged CRM objects.
    */
    'tokens': Array<TimelineEventTemplateToken>;
    /**
    * The type of CRM object this template is for. [Contacts, companies, tickets, and deals] are supported.
    */
    'objectType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "headerTemplate",
            "baseName": "headerTemplate",
            "type": "string",
            "format": ""
        },
        {
            "name": "detailTemplate",
            "baseName": "detailTemplate",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<TimelineEventTemplateToken>",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventTemplateCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

