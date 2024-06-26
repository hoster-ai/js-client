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

export class IpSettingsDto {
    /**
    * Indicates if an ip is required.
    */
    'requireIp': boolean;
    /**
    * The minimum number of ips.
    */
    'minIps': number;
    /**
    * A unique identifier representing an IP group.
    */
    'ipGroupId'?: string;
    /**
    * The maximum number of ips.
    */
    'maxIps': number;
    /**
    * Indicates the number of free ips.
    */
    'freeIps': number;
    /**
    * A custom ip price number per month.
    */
    'customIpPrice'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requireIp",
            "baseName": "requireIp",
            "type": "boolean"
        },
        {
            "name": "minIps",
            "baseName": "minIps",
            "type": "number"
        },
        {
            "name": "ipGroupId",
            "baseName": "ipGroupId",
            "type": "string"
        },
        {
            "name": "maxIps",
            "baseName": "maxIps",
            "type": "number"
        },
        {
            "name": "freeIps",
            "baseName": "freeIps",
            "type": "number"
        },
        {
            "name": "customIpPrice",
            "baseName": "customIpPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IpSettingsDto.attributeTypeMap;
    }
}

