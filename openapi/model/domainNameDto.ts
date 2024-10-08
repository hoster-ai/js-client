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
import { DomainAdditionalDto } from './domainAdditionalDto';
import { DomainBundleDto } from './domainBundleDto';
import { NameServerDto } from './nameServerDto';
import { RegistryContactsDto } from './registryContactsDto';

export class DomainNameDto {
    /**
    * Billing code provided by hoster.ai.
    */
    'id'?: string;
    /**
    * The domain name to be registered.
    */
    'domainName': string;
    /**
    * The registration duration for the domain in months.
    */
    'duration': DomainNameDto.DurationEnum;
    /**
    * The ID of the top-level domain associated with the domain name.
    */
    'tldId': string;
    /**
    * Registry contacts associated with the domain.
    */
    'contacts': RegistryContactsDto;
    /**
    * Name servers associated with the domain.
    */
    'nameServers'?: Array<NameServerDto>;
    /**
    * The password associated with the domain (if applicable).
    */
    'password'?: string;
    /**
    * Indicates if the domain is locked.
    */
    'locked'?: boolean;
    /**
    * Indicates if the domain has ID shield enabled.
    */
    'idShield'?: boolean;
    /**
    * Indicates whether owner details should be copied on transfer.
    */
    'copyOwnerOnTransfer'?: boolean;
    /**
    * Bundles associated with the domain.
    */
    'bundles'?: Array<DomainBundleDto>;
    /**
    * Categories associated with the domain.
    */
    'domainCategories'?: Array<string>;
    /**
    * Additional data associated with the domain.
    */
    'additional'?: DomainAdditionalDto;
    /**
    * Addons Associated with the Domain
    */
    'addonIds'?: Array<string>;
    /**
    * Date when the domain record was created.
    */
    'createdAt'?: Date;
    /**
    * Date when the domain record was last updated.
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
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "DomainNameDto.DurationEnum"
        },
        {
            "name": "tldId",
            "baseName": "tldId",
            "type": "string"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "RegistryContactsDto"
        },
        {
            "name": "nameServers",
            "baseName": "nameServers",
            "type": "Array<NameServerDto>"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean"
        },
        {
            "name": "idShield",
            "baseName": "idShield",
            "type": "boolean"
        },
        {
            "name": "copyOwnerOnTransfer",
            "baseName": "copyOwnerOnTransfer",
            "type": "boolean"
        },
        {
            "name": "bundles",
            "baseName": "bundles",
            "type": "Array<DomainBundleDto>"
        },
        {
            "name": "domainCategories",
            "baseName": "domainCategories",
            "type": "Array<string>"
        },
        {
            "name": "additional",
            "baseName": "additional",
            "type": "DomainAdditionalDto"
        },
        {
            "name": "addonIds",
            "baseName": "addonIds",
            "type": "Array<string>"
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
        return DomainNameDto.attributeTypeMap;
    }
}

export namespace DomainNameDto {
    export enum DurationEnum {
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _6 = <any> '6',
        _7 = <any> '7',
        _8 = <any> '8',
        _9 = <any> '9',
        _10 = <any> '10',
        _11 = <any> '11',
        _12 = <any> '12',
        _24 = <any> '24',
        _36 = <any> '36',
        _48 = <any> '48',
        _60 = <any> '60',
        _72 = <any> '72',
        _84 = <any> '84',
        _96 = <any> '96',
        _108 = <any> '108',
        _120 = <any> '120'
    }
}
