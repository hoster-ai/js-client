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
import { DynamicPriceDto } from './dynamicPriceDto';
import { PolicyDto } from './policyDto';
import { PriceDto } from './priceDto';

export class PricePolicyDto {
    /**
    * The unique identifier of the user.
    */
    'userId'?: string;
    /**
    * The policy associated with this price policy.
    */
    'policy': PolicyDto;
    /**
    * An array of calculated prices.
    */
    'calculatedPrices'?: Array<CalculatedPriceDto>;
    /**
    * An array of price objects.
    */
    'prices'?: Array<PriceDto>;
    /**
    * An array of dynamic price objects.
    */
    'dynamicPrices'?: Array<DynamicPriceDto>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "PolicyDto"
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
        },
        {
            "name": "dynamicPrices",
            "baseName": "dynamicPrices",
            "type": "Array<DynamicPriceDto>"
        }    ];

    static getAttributeTypeMap() {
        return PricePolicyDto.attributeTypeMap;
    }
}

