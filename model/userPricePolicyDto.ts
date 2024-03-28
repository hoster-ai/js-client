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

import { RequestFile } from './models';
import { CalculatedPriceDto } from './calculatedPriceDto';
import { Policy } from './policy';
import { PriceDto } from './priceDto';

export class UserPricePolicyDto {
    /**
    * The unique identifier of the policy.
    */
    'policyId': string;
    /**
    * The unique identifier of the product.
    */
    'productId': string;
    'policy': Policy;
    /**
    * An array of calculated prices.
    */
    'calculatedPrices'?: Array<CalculatedPriceDto>;
    /**
    * An array of price objects.
    */
    'prices'?: Array<PriceDto>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return UserPricePolicyDto.attributeTypeMap;
    }
}

