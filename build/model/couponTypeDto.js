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
exports.CouponTypeDto = void 0;
class CouponTypeDto {
    static getAttributeTypeMap() {
        return CouponTypeDto.attributeTypeMap;
    }
}
exports.CouponTypeDto = CouponTypeDto;
CouponTypeDto.discriminator = undefined;
CouponTypeDto.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "CouponTypeDto.TypeEnum"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "otherProductIds",
        "baseName": "otherProductIds",
        "type": "Array<string>"
    },
    {
        "name": "whichToApply",
        "baseName": "whichToApply",
        "type": "CouponTypeDto.WhichToApplyEnum"
    }
];
(function (CouponTypeDto) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Percentage"] = 'PERCENTAGE'] = "Percentage";
        TypeEnum[TypeEnum["Fixed"] = 'FIXED'] = "Fixed";
        TypeEnum[TypeEnum["CustomPrice"] = 'CUSTOM_PRICE'] = "CustomPrice";
        TypeEnum[TypeEnum["ExtraMonths"] = 'EXTRA_MONTHS'] = "ExtraMonths";
        TypeEnum[TypeEnum["OtherItemPercentage"] = 'OTHER_ITEM_PERCENTAGE'] = "OtherItemPercentage";
    })(TypeEnum = CouponTypeDto.TypeEnum || (CouponTypeDto.TypeEnum = {}));
    let WhichToApplyEnum;
    (function (WhichToApplyEnum) {
        WhichToApplyEnum[WhichToApplyEnum["All"] = 'ALL'] = "All";
        WhichToApplyEnum[WhichToApplyEnum["LowestPrice"] = 'LOWEST_PRICE'] = "LowestPrice";
        WhichToApplyEnum[WhichToApplyEnum["HighestPrice"] = 'HIGHEST_PRICE'] = "HighestPrice";
    })(WhichToApplyEnum = CouponTypeDto.WhichToApplyEnum || (CouponTypeDto.WhichToApplyEnum = {}));
})(CouponTypeDto || (exports.CouponTypeDto = CouponTypeDto = {}));
