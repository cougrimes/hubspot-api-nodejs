/**
 * Line Items
 * Why don\'t you just tell me the movie you\'ve selected or the description you expect to see here?
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CollectionResponseWithTotalSimplePublicObject } from '../model/collectionResponseWithTotalSimplePublicObject';
import { PublicObjectSearchRequest } from '../model/publicObjectSearchRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.hubapi.com/crm/v3/objects';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SearchApiApiKeys {
    hapikey,
}

export class SearchApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: SearchApiApiKeys, value: string) {
        (this.authentications as any)[SearchApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * # Filter, Sort, and Search CRM Objects  The CRM Search API is a powerful API that allows developers to filter, sort, and search across all line item types, including contacts, deals, companies and tickets. Using this API, developers can more efficiently retrieve a subset of data they are looking for to better suit their business needs.  Common use cases this API allows for include, but are not limited to the following: <ul> <li>Getting a list of contacts for a specific account</li> <li>Retrieving a list of all open deals</li> <li>Searching for contacts by custom properties</li> <li>& more</li> </ul>  Prerequisite for using this API: To use the CRM Search API with an OAuth token, your app must request and be granted access to the contacts scope.  <br /> `engagements` including `tasks`, `calls`, `emails`, and `notes` are not supported.  <br /> ## Filter  Use `filterGroups` in the request body to limit results to specific CRM line items.  *Example*: Find all contacts with a first name of \"Alice\" ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"filterGroups\":[     {       \"filters\":[         {           \"propertyName\": \"firstname\",           \"operator\": \"EQ\",           \"value\": \"Alice\"         }       ]     }]   }\' ```  When multiple `filters` are provided within a `filterGroup`, they will be combined using a logical `AND` operator. When multiple `filterGroup`s are provided, they will be combined using a logical `OR` operator. The system supports a maximum of three `filterGroups` with up to three `filters` per `filterGroup`.  *Example*: Find all contacts with (a first name of \"Alice\" `AND` a last name that is not \"Smith\") OR has the property \"enum1\" ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"filterGroups\":[     {       \"filters\": [         {           \"propertyName\": \"firstname\",           \"operator\": \"EQ\",           \"value\": \"Alice\"         },         {           \"propertyName\": \"lastname\",           \"operator\": \"NEQ\",           \"value\": \"Smith\"         }       ]     },     {       \"filters\": [         {           \"property\": \"enum1\",           \"operator\": \"HAS_PROPERTY\"         }       ]     }]   }\' ```   <br /> ### Operators  Supported operators include: |Operator|Description| |--|--| |`EQ`| equal to | |`NEQ`| not equal to | |`LT`| less than | |`LTE`| less than or equal to | |`GT`| greater than | |`GTE`| greater than or equal to | |`HAS_PROPERTY`| has the property | |`NOT_HAS_PROPERTY`| does not have the property | |`CONTAINS_TOKEN`| contains token, strings only | |`NOT_CONTAINS_TOKEN`| not contains token, strings only |  <br /> ### Associations You can find line items associated with a different object type by ID using the `associations.line items` psuedo-property. Support for this is limited to `deals` and `tickets`.  Supported association filters: |Object Type |Filter `propertyName` | |--|--| | `deals` | `associations.company`, `associations.contact`, `associations.ticket` | | `tickets` | `associations.company`, `associations.contact`, `associations.deal` |  *Example*: Find all tickets associated with the contact using ID \"123\" ``` curl --request POST https://api.hubapi.com/crm/v3/line items/tickets/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"filters\": [       {         \"propertyName\": \"associations.contact\",         \"operator\": \"EQ\",         \"value\": \"123\"       }     ]   }\' ```  <br /> ## Sort  Use `sorts`, which contain a property name and a direction, to sort the returned collection.  *Example*: List all contacts with most recently created first ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"sorts\": [       {         \"propertyName\": \"createdate\",         \"direction\": \"DESCENDING\"       }     ]   }\' ``` The system supports a single sort.   <br /> ## Search  Perform a text search against all property values for a line item type. By default, the results will be returned in order of object creation (oldest first) but this can be overridden using `sorts`.  *Example*: Find all contacts with a property value containing the letter `x` ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"query\": \"x\"   }\' ```  <br /> ## Controlling returned properties  Each object type is returned with a default set of properties. You can override this by providing an array of property names in the `properties` property of the request body.  *Example*: Return all contacts and include their email and mailing address state ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"properties\": [ \"email\", \"state\" ]   }\' ```  <br /> ## Paging through results By default, the Search API returns results containing 10 line items per page. The system supports a maximum of 100 results per page.  *Example*: Get pages of size 20 ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"limit\": 20   } ```  In order to access the next page of results, you must pass the `after` parameter that was provided in the previous response in the `paging.next.after` property. If no `paging.next.after` property is provided, no additional results will be shown. Note that the after parameter is expected to be a string.  *Example*: Get the next page of results ``` curl --request POST https://api.hubapi.com/crm/v3/line items/contacts/search?hapikey=demo \\   --header \"Content-Type: application/json\" \\   --data \'{     \"after\": \"20\"   }\' ```  <br /> ## Sample Response (Success)  ``` {   \"results\": [     {       \"id\": \"174\",       \"properties\": {         \"firstname\": \"Brantley\",         \"lastname\": \"Forrest\",         \"email\": \"bforrest8@acme.com\"       },       \"createdAt\":\"2019-10-30T03:30:17.883Z\",       \"updatedAt\": \"1569516907T16:50:06.678Z\",       \"archived\": false     },     ...   ],   \"paging\": {     \"next\": {       \"after\": \"10\"     }   } } ```  <br /> ## Limitations  1. It can take a few moments between creating or updating a line item in HubSpot and seeing it in CRM Search API results. 2. CRM line items in an archived state will not be available in the Search API. 3. The Search API is rate limited to 1 request per second per authentication token, which is more stringent than our general rate limits. The `X-HubSpot-RateLimit-*` headers will not reflect this during the beta period. Read more about [rate limits](https://developers.hubspot.com/docs/faq/working-within-the-hubspot-api-rate-limits).  <br /> ## Error Handling Read our [error documentation](https://developers.hubspot.com/docs/faq/api-error-responses).
     * @summary Filter, Sort, and Search CRM Objects
     * @param publicObjectSearchRequest 
     */
    public async doSearch (publicObjectSearchRequest?: PublicObjectSearchRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CollectionResponseWithTotalSimplePublicObject;  }> {
        const localVarPath = this.basePath + '/line items/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(publicObjectSearchRequest, "PublicObjectSearchRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CollectionResponseWithTotalSimplePublicObject;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CollectionResponseWithTotalSimplePublicObject");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
