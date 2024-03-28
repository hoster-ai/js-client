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
exports.UserAddonPricePolicyDto = void 0;
class UserAddonPricePolicyDto {
    static getAttributeTypeMap() {
        return UserAddonPricePolicyDto.attributeTypeMap;
    }
}
exports.UserAddonPricePolicyDto = UserAddonPricePolicyDto;
UserAddonPricePolicyDto.discriminator = undefined;
UserAddonPricePolicyDto.attributeTypeMap = [
    {
        "name": "policyId",
        "baseName": "policyId",
        "type": "string"
    },
    {
        "name": "addonId",
        "baseName": "addonId",
        "type": "string"
    },
    {
        "name": "policy",
        "baseName": "policy",
        "type": "PolicyData"
    },
    {
        "name": "calculatedPrices",
        "baseName": "calculatedPrices",
        "type": "Array<CalculatedPriceDto>"
    },
    {
        "name": "prices",
        "baseName": "prices",
        "type": "Array<PriceDto>"
    }
];
