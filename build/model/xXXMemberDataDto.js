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
exports.XXXMemberDataDto = void 0;
class XXXMemberDataDto {
    static getAttributeTypeMap() {
        return XXXMemberDataDto.attributeTypeMap;
    }
}
exports.XXXMemberDataDto = XXXMemberDataDto;
XXXMemberDataDto.discriminator = undefined;
XXXMemberDataDto.attributeTypeMap = [
    {
        "name": "memberId",
        "baseName": "memberId",
        "type": "string"
    },
    {
        "name": "memberPassword",
        "baseName": "memberPassword",
        "type": "string"
    },
    {
        "name": "nonResolvin",
        "baseName": "nonResolvin",
        "type": "boolean"
    }
];
