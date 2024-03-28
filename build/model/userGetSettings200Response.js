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
exports.UserGetSettings200Response = void 0;
class UserGetSettings200Response {
    static getAttributeTypeMap() {
        return UserGetSettings200Response.attributeTypeMap;
    }
}
exports.UserGetSettings200Response = UserGetSettings200Response;
UserGetSettings200Response.discriminator = undefined;
UserGetSettings200Response.attributeTypeMap = [
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
        "type": "SettingOptionsDto"
    }
];