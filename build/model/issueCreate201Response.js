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
exports.IssueCreate201Response = void 0;
class IssueCreate201Response {
    static getAttributeTypeMap() {
        return IssueCreate201Response.attributeTypeMap;
    }
}
exports.IssueCreate201Response = IssueCreate201Response;
IssueCreate201Response.discriminator = undefined;
IssueCreate201Response.attributeTypeMap = [
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
        "type": "IssueDto"
    }
];
