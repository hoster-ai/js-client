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

/**
* The user\'s persistent shopping cart.
*/
export class PersistentCart {
    /**
    * The unique identifier of the user.
    */
    'userId': string;
    /**
    * The user\'s shopping cart data.
    */
    'cart': object;
    /**
    * The date and time when the user\'s basket was last updated.
    */
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "cart",
            "baseName": "cart",
            "type": "object"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PersistentCart.attributeTypeMap;
    }
}

