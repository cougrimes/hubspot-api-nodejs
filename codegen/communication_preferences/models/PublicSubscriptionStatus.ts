/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The status of a subscription for a contact.
*/
export class PublicSubscriptionStatus {
    /**
    * The ID for the subscription.
    */
    'id': string;
    /**
    * The name of the subscription.
    */
    'name': string;
    /**
    * A description of the subscription.
    */
    'description': string;
    /**
    * Whether the contact is subscribed.
    */
    'status': PublicSubscriptionStatusStatusEnum;
    /**
    * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
    */
    'sourceOfStatus': PublicSubscriptionStatusSourceOfStatusEnum;
    /**
    * The ID of the brand that the subscription is associated with, if there is one.
    */
    'brandId'?: number;
    /**
    * The name of the preferences group that the subscription is associated with.
    */
    'preferenceGroupName'?: string;
    /**
    * The legal reason for the current status of the subscription.
    */
    'legalBasis'?: PublicSubscriptionStatusLegalBasisEnum;
    /**
    * A more detailed explanation to go with the legal basis.
    */
    'legalBasisExplanation'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PublicSubscriptionStatusStatusEnum",
            "format": ""
        },
        {
            "name": "sourceOfStatus",
            "baseName": "sourceOfStatus",
            "type": "PublicSubscriptionStatusSourceOfStatusEnum",
            "format": ""
        },
        {
            "name": "brandId",
            "baseName": "brandId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "preferenceGroupName",
            "baseName": "preferenceGroupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalBasis",
            "baseName": "legalBasis",
            "type": "PublicSubscriptionStatusLegalBasisEnum",
            "format": ""
        },
        {
            "name": "legalBasisExplanation",
            "baseName": "legalBasisExplanation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicSubscriptionStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicSubscriptionStatusStatusEnum = "SUBSCRIBED" | "NOT_SUBSCRIBED" ;
export type PublicSubscriptionStatusSourceOfStatusEnum = "PORTAL_WIDE_STATUS" | "BRAND_WIDE_STATUS" | "SUBSCRIPTION_STATUS" ;
export type PublicSubscriptionStatusLegalBasisEnum = "LEGITIMATE_INTEREST_PQL" | "LEGITIMATE_INTEREST_CLIENT" | "PERFORMANCE_OF_CONTRACT" | "CONSENT_WITH_NOTICE" | "NON_GDPR" | "PROCESS_AND_STORE" | "LEGITIMATE_INTEREST_OTHER" ;

