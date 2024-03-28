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
exports.DynamicPriceDto = void 0;
class DynamicPriceDto {
    constructor() {
        /**
        * Indicates if product has been paid.
        */
        this['paid'] = false;
    }
    static getAttributeTypeMap() {
        return DynamicPriceDto.attributeTypeMap;
    }
}
exports.DynamicPriceDto = DynamicPriceDto;
DynamicPriceDto.discriminator = undefined;
DynamicPriceDto.attributeTypeMap = [
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "number"
    },
    {
        "name": "prices",
        "baseName": "prices",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "paid",
        "baseName": "paid",
        "type": "boolean"
    }
];