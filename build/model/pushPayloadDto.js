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
exports.PushPayloadDto = void 0;
class PushPayloadDto {
    static getAttributeTypeMap() {
        return PushPayloadDto.attributeTypeMap;
    }
}
exports.PushPayloadDto = PushPayloadDto;
PushPayloadDto.discriminator = undefined;
PushPayloadDto.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "subtitle",
        "baseName": "subtitle",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];