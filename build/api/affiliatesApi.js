"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatesApi = exports.AffiliatesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'http://localhost:3000';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AffiliatesApiApiKeys;
(function (AffiliatesApiApiKeys) {
})(AffiliatesApiApiKeys || (exports.AffiliatesApiApiKeys = AffiliatesApiApiKeys = {}));
class AffiliatesApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'jwt': new models_2.HttpBearerAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[AffiliatesApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.jwt.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Creates a new affiliate. Return a AffiliateDto.
     * @summary Creates a new affiliate
     * @param companyId companyId
     * @param affiliateDto
     */
    affiliateCreate(companyId_1, affiliateDto_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, affiliateDto, options = { headers: {} }) {
            const localVarPath = this.basePath + '/affiliates';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling affiliateCreate.');
            }
            // verify required parameter 'affiliateDto' is not null or undefined
            if (affiliateDto === null || affiliateDto === undefined) {
                throw new Error('Required parameter affiliateDto was null or undefined when calling affiliateCreate.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(affiliateDto, "AffiliateDto")
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "AffiliateCreate200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Deletes a certain affiliate. Returns vull.
     * @summary Delete a affiliate
     * @param companyId companyId
     * @param id Affiliate ID
     */
    affiliateDelete(companyId_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, id, options = { headers: {} }) {
            const localVarPath = this.basePath + '/affiliates/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling affiliateDelete.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling affiliateDelete.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "InvoiceGet200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Retrieves a list of all affiliates. Returns an array of AffiliateDto.
     * @summary Get list of all affiliates
     * @param companyId companyId
     * @param productId product id
     * @param currentPage current page
     * @param perPage per Page
     */
    affiliateFind(companyId_1, productId_1, currentPage_1, perPage_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, productId, currentPage, perPage, options = { headers: {} }) {
            const localVarPath = this.basePath + '/affiliates';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling affiliateFind.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            if (productId !== undefined) {
                localVarQueryParameters['productId'] = models_1.ObjectSerializer.serialize(productId, "string");
            }
            if (currentPage !== undefined) {
                localVarQueryParameters['currentPage'] = models_1.ObjectSerializer.serialize(currentPage, "number");
            }
            if (perPage !== undefined) {
                localVarQueryParameters['perPage'] = models_1.ObjectSerializer.serialize(perPage, "number");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "AffiliateFind200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Retrieves a certain affiliate. Returns a AffiliateDto.
     * @summary Get a affiliate
     * @param companyId companyId
     * @param id ID
     */
    affiliateGet(companyId_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, id, options = { headers: {} }) {
            const localVarPath = this.basePath + '/affiliates/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling affiliateGet.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling affiliateGet.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "AffiliateCreate200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Updates a certain affiliate. Returns a AffiliateDto.
     * @summary Update a affiliate
     * @param companyId companyId
     * @param id Affiliate ID
     * @param affiliateDto
     */
    affiliateUpdate(companyId_1, id_1, affiliateDto_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, id, affiliateDto, options = { headers: {} }) {
            const localVarPath = this.basePath + '/affiliates/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling affiliateUpdate.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling affiliateUpdate.');
            }
            // verify required parameter 'affiliateDto' is not null or undefined
            if (affiliateDto === null || affiliateDto === undefined) {
                throw new Error('Required parameter affiliateDto was null or undefined when calling affiliateUpdate.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(affiliateDto, "AffiliateDto")
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "AffiliateCreate200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.AffiliatesApi = AffiliatesApi;