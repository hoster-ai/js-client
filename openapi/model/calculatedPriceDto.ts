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

export class CalculatedPriceDto {
    /**
    * The percentage profit margin applied to the price.
    */
    'percentageProfitMargin'?: number;
    /**
    * The maximum profit margin allowed for the price.
    */
    'maxProfitMargin'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "percentageProfitMargin",
            "baseName": "percentageProfitMargin",
            "type": "number"
        },
        {
            "name": "maxProfitMargin",
            "baseName": "maxProfitMargin",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CalculatedPriceDto.attributeTypeMap;
    }
}

