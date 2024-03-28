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
exports.RegistryContactsDto = void 0;
class RegistryContactsDto {
    static getAttributeTypeMap() {
        return RegistryContactsDto.attributeTypeMap;
    }
}
exports.RegistryContactsDto = RegistryContactsDto;
RegistryContactsDto.discriminator = undefined;
RegistryContactsDto.attributeTypeMap = [
    {
        "name": "registrantCode",
        "baseName": "registrantCode",
        "type": "string"
    },
    {
        "name": "adminCode",
        "baseName": "adminCode",
        "type": "string"
    },
    {
        "name": "techCode",
        "baseName": "techCode",
        "type": "string"
    },
    {
        "name": "billingCode",
        "baseName": "billingCode",
        "type": "string"
    }
];