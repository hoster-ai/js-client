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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyFind200Response = void 0;
class CompanyFind200Response {
    static getAttributeTypeMap() {
        return CompanyFind200Response.attributeTypeMap;
    }
}
exports.CompanyFind200Response = CompanyFind200Response;
CompanyFind200Response.discriminator = undefined;
CompanyFind200Response.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<CompanyDto>"
    },
    {
        "name": "currentPage",
        "baseName": "currentPage",
        "type": "number"
    },
    {
        "name": "totalPages",
        "baseName": "totalPages",
        "type": "number"
    },
    {
        "name": "perPage",
        "baseName": "perPage",
        "type": "number"
    }
];
