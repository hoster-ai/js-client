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

export class DomainPricesDto {
    /**
    * The price for domain transfer in cents.
    */
    'transferPrice'?: number;
    /**
    * The price for domain lock in cents.
    */
    'lockPrice'?: number;
    /**
    * The price for ID shield in cents.
    */
    'idShieldPrice'?: number;
    /**
    * The price for domain proxy service in cents.
    */
    'proxyPrice'?: number;
    /**
    * The soft quarantine fee for the domain in cents.
    */
    'softQuarantineFee'?: number;
    'hardQuarantineFee'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transferPrice",
            "baseName": "transferPrice",
            "type": "number"
        },
        {
            "name": "lockPrice",
            "baseName": "lockPrice",
            "type": "number"
        },
        {
            "name": "idShieldPrice",
            "baseName": "idShieldPrice",
            "type": "number"
        },
        {
            "name": "proxyPrice",
            "baseName": "proxyPrice",
            "type": "number"
        },
        {
            "name": "softQuarantineFee",
            "baseName": "softQuarantineFee",
            "type": "number"
        },
        {
            "name": "hardQuarantineFee",
            "baseName": "hardQuarantineFee",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DomainPricesDto.attributeTypeMap;
    }
}
