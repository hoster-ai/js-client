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

export class NameServerDto {
    /**
    * The fully qualified domain name (FQDN) of the name server.
    */
    'hostName': string;
    /**
    * An array of IPv4 addresses associated with the name server.
    */
    'ipV4Addresses'?: Array<string>;
    /**
    * An array of IPv6 addresses associated with the name server.
    */
    'ipV6Addresses'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostName",
            "baseName": "hostName",
            "type": "string"
        },
        {
            "name": "ipV4Addresses",
            "baseName": "ipV4Addresses",
            "type": "Array<string>"
        },
        {
            "name": "ipV6Addresses",
            "baseName": "ipV6Addresses",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return NameServerDto.attributeTypeMap;
    }
}

