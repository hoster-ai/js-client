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
exports.TabDto = void 0;
class TabDto {
    static getAttributeTypeMap() {
        return TabDto.attributeTypeMap;
    }
}
exports.TabDto = TabDto;
TabDto.discriminator = undefined;
TabDto.attributeTypeMap = [
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
