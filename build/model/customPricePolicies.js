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
exports.CustomPricePolicies = void 0;
/**
* An array of custom price policies for this user.
*/
class CustomPricePolicies {
    static getAttributeTypeMap() {
        return CustomPricePolicies.attributeTypeMap;
    }
}
exports.CustomPricePolicies = CustomPricePolicies;
CustomPricePolicies.discriminator = undefined;
CustomPricePolicies.attributeTypeMap = [
    {
        "name": "policyId",
        "baseName": "policyId",
        "type": "string"
    },
    {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
    },
    {
        "name": "policy",
        "baseName": "policy",
        "type": "Policy"
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
