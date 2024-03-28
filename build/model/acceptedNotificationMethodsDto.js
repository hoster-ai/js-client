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
exports.AcceptedNotificationMethodsDto = void 0;
class AcceptedNotificationMethodsDto {
    static getAttributeTypeMap() {
        return AcceptedNotificationMethodsDto.attributeTypeMap;
    }
}
exports.AcceptedNotificationMethodsDto = AcceptedNotificationMethodsDto;
AcceptedNotificationMethodsDto.discriminator = undefined;
AcceptedNotificationMethodsDto.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "boolean"
    },
    {
        "name": "sms",
        "baseName": "sms",
        "type": "boolean"
    },
    {
        "name": "push",
        "baseName": "push",
        "type": "boolean"
    }
];