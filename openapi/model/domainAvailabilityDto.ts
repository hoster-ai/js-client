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

export class DomainAvailabilityDto {
    /**
    * The name of the domain.
    */
    'domainName': string;
    /**
    * Indicates whether the domain is available for registration.
    */
    'available': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "available",
            "baseName": "available",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DomainAvailabilityDto.attributeTypeMap;
    }
}

