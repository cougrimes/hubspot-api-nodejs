/**
 * Webhooks API
 * Provides a way for apps to subscribe to certain change events in HubSpot. Once configured, apps will receive event payloads containing details about the changes at a specified target URL. There can only be one target URL for receiving event notifications per app.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Complete details for an event subscription.
*/
export class SubscriptionResponse {
    /**
    * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
    */
    'eventType': SubscriptionResponseEventTypeEnum;
    /**
    * The internal name of the property being monitored for changes. Only applies when `eventType` is `propertyChange`.
    */
    'propertyName'?: string;
    /**
    * Determines if the subscription is active or paused.
    */
    'active': boolean;
    /**
    * The unique ID of the subscription.
    */
    'id': string;
    /**
    * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
    */
    'createdAt': Date;
    /**
    * When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#).
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "SubscriptionResponseEventTypeEnum",
            "format": ""
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SubscriptionResponseEventTypeEnum = "contact.propertyChange" | "company.propertyChange" | "deal.propertyChange" | "ticket.propertyChange" | "product.propertyChange" | "line_item.propertyChange" | "contact.creation" | "contact.deletion" | "contact.privacyDeletion" | "company.creation" | "company.deletion" | "deal.creation" | "deal.deletion" | "ticket.creation" | "ticket.deletion" | "product.creation" | "product.deletion" | "line_item.creation" | "line_item.deletion" | "conversation.creation" | "conversation.deletion" | "conversation.newMessage" | "conversation.privacyDeletion" | "conversation.propertyChange" ;

