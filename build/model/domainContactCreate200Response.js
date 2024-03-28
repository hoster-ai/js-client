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
exports.DomainContactCreate200Response = void 0;
class DomainContactCreate200Response {
    static getAttributeTypeMap() {
        return DomainContactCreate200Response.attributeTypeMap;
    }
}
exports.DomainContactCreate200Response = DomainContactCreate200Response;
DomainContactCreate200Response.discriminator = undefined;
DomainContactCreate200Response.attributeTypeMap = [
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
        "type": "DomainContactDto"
    }
];