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
exports.LoginResponseDto = void 0;
class LoginResponseDto {
    static getAttributeTypeMap() {
        return LoginResponseDto.attributeTypeMap;
    }
}
exports.LoginResponseDto = LoginResponseDto;
LoginResponseDto.discriminator = undefined;
LoginResponseDto.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
