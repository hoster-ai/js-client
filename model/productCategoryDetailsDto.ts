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
import { ProductCategoryTitle } from './productCategoryTitle';

export class ProductCategoryDetailsDto {
    /**
    *  Unique identifier of the category associated with the product
    */
    'productCategoryId': string;
    'productCategoryTitle'?: ProductCategoryTitle;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productCategoryId",
            "baseName": "productCategoryId",
            "type": "string"
        },
        {
            "name": "productCategoryTitle",
            "baseName": "productCategoryTitle",
            "type": "ProductCategoryTitle"
        }    ];

    static getAttributeTypeMap() {
        return ProductCategoryDetailsDto.attributeTypeMap;
    }
}

