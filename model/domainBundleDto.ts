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

export class DomainBundleDto {
    /**
    * The name of the domain bundle.
    */
    'domainBundleName': string;
    /**
    * Indicates whether the domain bundle is chargeable or not.
    */
    'chargeable': boolean;
    /**
    * The type of record associated with the domain bundle.
    */
    'recordType': DomainBundleDto.RecordTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domainBundleName",
            "baseName": "domainBundleName",
            "type": "string"
        },
        {
            "name": "chargeable",
            "baseName": "chargeable",
            "type": "boolean"
        },
        {
            "name": "recordType",
            "baseName": "recordType",
            "type": "DomainBundleDto.RecordTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DomainBundleDto.attributeTypeMap;
    }
}

export namespace DomainBundleDto {
    export enum RecordTypeEnum {
        Domain = <any> 'DOMAIN',
        Dname = <any> 'DNAME'
    }
}
