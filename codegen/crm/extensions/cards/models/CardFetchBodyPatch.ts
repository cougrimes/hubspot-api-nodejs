/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CardObjectTypeBody } from '../models/CardObjectTypeBody';

/**
* Variant of CardFetchBody with fields as optional for patches
*/
export class CardFetchBodyPatch {
    /**
    * URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.
    */
    'targetUrl'?: string;
    /**
    * An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.
    */
    'objectTypes': Array<CardObjectTypeBody>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "targetUrl",
            "baseName": "targetUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectTypes",
            "baseName": "objectTypes",
            "type": "Array<CardObjectTypeBody>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardFetchBodyPatch.attributeTypeMap;
    }

    public constructor() {
    }
}

