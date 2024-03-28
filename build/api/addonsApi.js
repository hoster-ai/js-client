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
exports.AddonsApi = exports.AddonsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'http://localhost:3000';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AddonsApiApiKeys;
(function (AddonsApiApiKeys) {
})(AddonsApiApiKeys || (exports.AddonsApiApiKeys = AddonsApiApiKeys = {}));
class AddonsApi {
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
        this.authentications[AddonsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.jwt.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Creates a new addon. Returns an AddonDto.
     * @summary Creates a addon
     * @param companyId companyId
     * @param addonDto
     */
    addonCreate(companyId_1, addonDto_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, addonDto, options = { headers: {} }) {
            const localVarPath = this.basePath + '/addons';
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
                throw new Error('Required parameter companyId was null or undefined when calling addonCreate.');
            }
            // verify required parameter 'addonDto' is not null or undefined
            if (addonDto === null || addonDto === undefined) {
                throw new Error('Required parameter addonDto was null or undefined when calling addonCreate.');
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
                body: models_1.ObjectSerializer.serialize(addonDto, "AddonDto")
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
                                body = models_1.ObjectSerializer.deserialize(body, "AddonFind200Response");
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
     * Deletes a certain addon. Returns null.
     * @summary Delete a addon
     * @param companyId companyId
     * @param id addon id
     */
    addonDelete(companyId_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, id, options = { headers: {} }) {
            const localVarPath = this.basePath + '/addons/{id}'
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
                throw new Error('Required parameter companyId was null or undefined when calling addonDelete.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addonDelete.');
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
     * Retrieves a list of all the addons. Returns an array of AddonDto.
     * @summary Get list of all addons
     * @param companyId companyId
     * @param query searches in title and description
     * @param currentPage current page
     * @param perPage users to show per Page
     */
    addonFind(companyId_1, query_1, currentPage_1, perPage_1) {
        return __awaiter(this, arguments, void 0, function* (companyId, query, currentPage, perPage, options = { headers: {} }) {
            const localVarPath = this.basePath + '/addons';
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
                throw new Error('Required parameter companyId was null or undefined when calling addonFind.');
            }
            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling addonFind.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['companyId'] = models_1.ObjectSerializer.serialize(companyId, "string");
            }
            if (query !== undefined) {
                localVarQueryParameters['query'] = models_1.ObjectSerializer.serialize(query, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "AddonFind200Response");
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
     * Retrieves a certain addon. Returns an AddonDto.
     * @summary Get a addon
     * @param id ID
     * @param companyId companyId
     */
    addonGet(id_1, companyId_1) {
        return __awaiter(this, arguments, void 0, function* (id, companyId, options = { headers: {} }) {
            const localVarPath = this.basePath + '/addons/{id}'
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
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addonGet.');
            }
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling addonGet.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "AddonFind200Response");
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
     * Updates a certain addon. Returns an AddonDto.
     * @summary Update addon
     * @param id addon id
     * @param companyId companyId
     * @param addonDto
     */
    updateAddon(id_1, companyId_1, addonDto_1) {
        return __awaiter(this, arguments, void 0, function* (id, companyId, addonDto, options = { headers: {} }) {
            const localVarPath = this.basePath + '/addons/{id}'
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
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAddon.');
            }
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new Error('Required parameter companyId was null or undefined when calling updateAddon.');
            }
            // verify required parameter 'addonDto' is not null or undefined
            if (addonDto === null || addonDto === undefined) {
                throw new Error('Required parameter addonDto was null or undefined when calling updateAddon.');
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
                body: models_1.ObjectSerializer.serialize(addonDto, "AddonDto")
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
                                body = models_1.ObjectSerializer.deserialize(body, "AddonFind200Response");
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
exports.AddonsApi = AddonsApi;