/**
 * Hoster API
 * Hosting automation. The easy way
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateInvoiceContact200Response } from '../model/createInvoiceContact200Response';
import { ErrorResponse } from '../model/errorResponse';
import { FindInvoiceContacts200Response } from '../model/findInvoiceContacts200Response';
import { GetInvoice200Response } from '../model/getInvoice200Response';
import { InvoiceContactDto } from '../model/invoiceContactDto';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum InvoiceContactsApiApiKeys {
}

export class InvoiceContactsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'jwt': new HttpBearerAuth(),
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

    public setApiKey(key: InvoiceContactsApiApiKeys, value: string) {
        (this.authentications as any)[InvoiceContactsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.jwt.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This endpoint allows you to create a new invoice contact for a specific company. It returns a response containing the created invoice contact or an error response.
     * @summary Creates a new invoice contact
     * @param companyId companyId
     * @param invoiceContactDto 
     */
    public async createInvoiceContact (companyId: string, invoiceContactDto: InvoiceContactDto, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }> {
        const localVarPath = this.basePath + '/invoice-contacts';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling createInvoiceContact.');
        }

        // verify required parameter 'invoiceContactDto' is not null or undefined
        if (invoiceContactDto === null || invoiceContactDto === undefined) {
            throw new Error('Required parameter invoiceContactDto was null or undefined when calling createInvoiceContact.');
        }

        if (companyId !== undefined) {
            localVarQueryParameters['companyId'] = ObjectSerializer.serialize(companyId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(invoiceContactDto, "InvoiceContactDto")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.jwt.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.jwt.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateInvoiceContact200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint allows you to delete an existing invoice contact for a specific company. It retrieves the invoice contact by ID and deletes it. It returns a response indicating the success of the deletion or an error response if the invoice contact is not found.
     * @summary Delete an invoice contact
     * @param id Invoice contact ID
     * @param companyId companyId
     */
    public async deleteInvoiceContact (id: string, companyId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetInvoice200Response;  }> {
        const localVarPath = this.basePath + '/invoice-contacts/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteInvoiceContact.');
        }

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling deleteInvoiceContact.');
        }

        if (companyId !== undefined) {
            localVarQueryParameters['companyId'] = ObjectSerializer.serialize(companyId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.jwt.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.jwt.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: GetInvoice200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetInvoice200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint retrieves a list of invoice contacts based on the provided parameters. It allows filtering by company ID, query string, country, and pagination parameters.
     * @summary Get list of all invoice contacts
     * @param companyId companyId
     * @param query Query search for Name, Street, Postcode, Org, City, State, telephone, fax, email
     * @param country 
     * @param currentPage current page
     * @param perPage per Page 
     */
    public async findInvoiceContacts (companyId: string, query?: string, country?: 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT', currentPage?: number, perPage?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FindInvoiceContacts200Response;  }> {
        const localVarPath = this.basePath + '/invoice-contacts';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling findInvoiceContacts.');
        }

        if (companyId !== undefined) {
            localVarQueryParameters['companyId'] = ObjectSerializer.serialize(companyId, "string");
        }

        if (query !== undefined) {
            localVarQueryParameters['query'] = ObjectSerializer.serialize(query, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT'");
        }

        if (currentPage !== undefined) {
            localVarQueryParameters['currentPage'] = ObjectSerializer.serialize(currentPage, "number");
        }

        if (perPage !== undefined) {
            localVarQueryParameters['perPage'] = ObjectSerializer.serialize(perPage, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.jwt.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.jwt.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: FindInvoiceContacts200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FindInvoiceContacts200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get an invoice contacts
     * @param id ID
     * @param companyId companyId
     */
    public async getInvoiceContact (id: string, companyId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }> {
        const localVarPath = this.basePath + '/invoice-contacts/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getInvoiceContact.');
        }

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling getInvoiceContact.');
        }

        if (companyId !== undefined) {
            localVarQueryParameters['companyId'] = ObjectSerializer.serialize(companyId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.jwt.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.jwt.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateInvoiceContact200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint allows you to update an existing invoice contact for a specific company. It retrieves the invoice contact by ID and updates its details based on the provided data. It returns a response containing the updated invoice contact or an error response.
     * @summary Update an invoice contact
     * @param id Invoice contact ID
     * @param companyId companyId
     * @param invoiceContactDto 
     */
    public async updateInvoiceContact (id: string, companyId: string, invoiceContactDto: InvoiceContactDto, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }> {
        const localVarPath = this.basePath + '/invoice-contacts/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateInvoiceContact.');
        }

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling updateInvoiceContact.');
        }

        // verify required parameter 'invoiceContactDto' is not null or undefined
        if (invoiceContactDto === null || invoiceContactDto === undefined) {
            throw new Error('Required parameter invoiceContactDto was null or undefined when calling updateInvoiceContact.');
        }

        if (companyId !== undefined) {
            localVarQueryParameters['companyId'] = ObjectSerializer.serialize(companyId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(invoiceContactDto, "InvoiceContactDto")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.jwt.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.jwt.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: CreateInvoiceContact200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateInvoiceContact200Response");
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
