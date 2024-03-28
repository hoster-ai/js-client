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
exports.ItemCurrency = void 0;
/**
* Currency details of the item
*/
class ItemCurrency {
    static getAttributeTypeMap() {
        return ItemCurrency.attributeTypeMap;
    }
}
exports.ItemCurrency = ItemCurrency;
ItemCurrency.discriminator = undefined;
ItemCurrency.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "threeLetterCode",
        "baseName": "threeLetterCode",
        "type": "string"
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string"
    }
];