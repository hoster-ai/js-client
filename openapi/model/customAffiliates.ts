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
import { ProductAffiliateDto } from './productAffiliateDto';

/**
* An array containing affiliates related to the user.
*/
export class CustomAffiliates {
    /**
    * The unique identifier of the affiliate
    */
    'id'?: string;
    /**
    * The unique identifier of the product.
    */
    'productId': string;
    /**
    * The unique identifier of the company.
    */
    'companyId': string;
    /**
    * Data about the product.
    */
    'data': ProductAffiliateDto;
    /**
    * The date when the policy was created.
    */
    'createdAt'?: Date;
    /**
    * The date when the policy was updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ProductAffiliateDto"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CustomAffiliates.attributeTypeMap;
    }
}
