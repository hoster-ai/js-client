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
exports.PremiumPriceCategoryDataDto = void 0;
class PremiumPriceCategoryDataDto {
    static getAttributeTypeMap() {
        return PremiumPriceCategoryDataDto.attributeTypeMap;
    }
}
exports.PremiumPriceCategoryDataDto = PremiumPriceCategoryDataDto;
PremiumPriceCategoryDataDto.discriminator = undefined;
PremiumPriceCategoryDataDto.attributeTypeMap = [
    {
        "name": "priceCategory",
        "baseName": "priceCategory",
        "type": "PremiumPriceCategoryDataDto.PriceCategoryEnum"
    }
];
(function (PremiumPriceCategoryDataDto) {
    let PriceCategoryEnum;
    (function (PriceCategoryEnum) {
        PriceCategoryEnum[PriceCategoryEnum["_2"] = 'pricecategory 2'] = "_2";
        PriceCategoryEnum[PriceCategoryEnum["_3"] = 'pricecategory 3'] = "_3";
        PriceCategoryEnum[PriceCategoryEnum["_4"] = 'pricecategory 4'] = "_4";
        PriceCategoryEnum[PriceCategoryEnum["_5"] = 'pricecategory 5'] = "_5";
        PriceCategoryEnum[PriceCategoryEnum["_6"] = 'pricecategory 6'] = "_6";
        PriceCategoryEnum[PriceCategoryEnum["_7"] = 'pricecategory 7'] = "_7";
        PriceCategoryEnum[PriceCategoryEnum["_8"] = 'pricecategory 8'] = "_8";
        PriceCategoryEnum[PriceCategoryEnum["_9"] = 'pricecategory 9'] = "_9";
        PriceCategoryEnum[PriceCategoryEnum["_10"] = 'pricecategory 10'] = "_10";
        PriceCategoryEnum[PriceCategoryEnum["_11"] = 'pricecategory 11'] = "_11";
        PriceCategoryEnum[PriceCategoryEnum["_12"] = 'pricecategory 12'] = "_12";
        PriceCategoryEnum[PriceCategoryEnum["_13"] = 'pricecategory 13'] = "_13";
        PriceCategoryEnum[PriceCategoryEnum["_14"] = 'pricecategory 14'] = "_14";
        PriceCategoryEnum[PriceCategoryEnum["_15"] = 'pricecategory 15'] = "_15";
        PriceCategoryEnum[PriceCategoryEnum["_16"] = 'pricecategory 16'] = "_16";
    })(PriceCategoryEnum = PremiumPriceCategoryDataDto.PriceCategoryEnum || (PremiumPriceCategoryDataDto.PriceCategoryEnum = {}));
})(PremiumPriceCategoryDataDto || (exports.PremiumPriceCategoryDataDto = PremiumPriceCategoryDataDto = {}));