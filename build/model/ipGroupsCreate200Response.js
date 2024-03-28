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
exports.IpGroupsCreate200Response = void 0;
class IpGroupsCreate200Response {
    static getAttributeTypeMap() {
        return IpGroupsCreate200Response.attributeTypeMap;
    }
}
exports.IpGroupsCreate200Response = IpGroupsCreate200Response;
IpGroupsCreate200Response.discriminator = undefined;
IpGroupsCreate200Response.attributeTypeMap = [
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
        "type": "IpGroupDto"
    }
];