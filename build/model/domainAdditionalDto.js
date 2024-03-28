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
exports.DomainAdditionalDto = void 0;
class DomainAdditionalDto {
    static getAttributeTypeMap() {
        return DomainAdditionalDto.attributeTypeMap;
    }
}
exports.DomainAdditionalDto = DomainAdditionalDto;
DomainAdditionalDto.discriminator = undefined;
DomainAdditionalDto.attributeTypeMap = [
    {
        "name": "catParameterData",
        "baseName": "catParameterData",
        "type": "CatParameterDataDto"
    },
    {
        "name": "challengeParametersData",
        "baseName": "challengeParametersData",
        "type": "ChallengeParametersDataDto"
    },
    {
        "name": "claimsTokenData",
        "baseName": "claimsTokenData",
        "type": "ClaimsTokenDataDto"
    },
    {
        "name": "donutsPriceCategoryData",
        "baseName": "donutsPriceCategoryData",
        "type": "DonutsPriceCategoryDataDto"
    },
    {
        "name": "intendedUseParamsData",
        "baseName": "intendedUseParamsData",
        "type": "IntendedUseParamsDataDto"
    },
    {
        "name": "proxyServiceData",
        "baseName": "proxyServiceData",
        "type": "ProxyServiceDataDto"
    },
    {
        "name": "premiumPriceCategory",
        "baseName": "premiumPriceCategory",
        "type": "PremiumPriceCategoryDataDto"
    },
    {
        "name": "sunriseData",
        "baseName": "sunriseData",
        "type": "SunriseDataDto"
    },
    {
        "name": "xxxMemberData",
        "baseName": "xxxMemberData",
        "type": "XXXMemberDataDto"
    },
    {
        "name": "ukDirectData",
        "baseName": "ukDirectData",
        "type": "UKDirectDataDto"
    }
];
