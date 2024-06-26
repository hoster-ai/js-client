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
import { AfnicAdditionalDataDto } from './afnicAdditionalDataDto';
import { CatAdditionalDataDto } from './catAdditionalDataDto';
import { DeAdditionalDataDto } from './deAdditionalDataDto';
import { EsAdditionalDataDto } from './esAdditionalDataDto';
import { EuBeAdditionalDataDto } from './euBeAdditionalDataDto';
import { ItAdditionalDataDto } from './itAdditionalDataDto';
import { LvAdditionalDataDto } from './lvAdditionalDataDto';
import { NlAdditionalDataDto } from './nlAdditionalDataDto';
import { ProAdditionalDataDto } from './proAdditionalDataDto';
import { UkAdditionalDataDto } from './ukAdditionalDataDto';
import { UsAdditionalDataDto } from './usAdditionalDataDto';

export class ContactAdditionalDto {
    /**
    * Additional data for Afnic contact.
    */
    'afnicAdditionalData': AfnicAdditionalDataDto;
    /**
    * Additional data for DE contact.
    */
    'deAdditionalData': DeAdditionalDataDto;
    /**
    * Additional data for Cat contact.
    */
    'catAdditionalData': CatAdditionalDataDto;
    /**
    * Additional data for ES contact.
    */
    'esAdditionalData': EsAdditionalDataDto;
    /**
    * Additional data for EU/BE contact.
    */
    'euAdditionalData': EuBeAdditionalDataDto;
    /**
    * Additional data for IT contact.
    */
    'itAdditionalData': ItAdditionalDataDto;
    /**
    * Additional data for LV contact.
    */
    'lvAdditionalData': LvAdditionalDataDto;
    /**
    * Additional data for NL contact.
    */
    'nlAdditionalData': NlAdditionalDataDto;
    /**
    * Additional data for PRO contact.
    */
    'proAdditionalData': ProAdditionalDataDto;
    /**
    * Additional data for UK contact.
    */
    'ukAdditionalData': UkAdditionalDataDto;
    /**
    * Additional data for US contact.
    */
    'usAdditionalData'?: UsAdditionalDataDto;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "afnicAdditionalData",
            "baseName": "afnicAdditionalData",
            "type": "AfnicAdditionalDataDto"
        },
        {
            "name": "deAdditionalData",
            "baseName": "deAdditionalData",
            "type": "DeAdditionalDataDto"
        },
        {
            "name": "catAdditionalData",
            "baseName": "catAdditionalData",
            "type": "CatAdditionalDataDto"
        },
        {
            "name": "esAdditionalData",
            "baseName": "esAdditionalData",
            "type": "EsAdditionalDataDto"
        },
        {
            "name": "euAdditionalData",
            "baseName": "euAdditionalData",
            "type": "EuBeAdditionalDataDto"
        },
        {
            "name": "itAdditionalData",
            "baseName": "itAdditionalData",
            "type": "ItAdditionalDataDto"
        },
        {
            "name": "lvAdditionalData",
            "baseName": "lvAdditionalData",
            "type": "LvAdditionalDataDto"
        },
        {
            "name": "nlAdditionalData",
            "baseName": "nlAdditionalData",
            "type": "NlAdditionalDataDto"
        },
        {
            "name": "proAdditionalData",
            "baseName": "proAdditionalData",
            "type": "ProAdditionalDataDto"
        },
        {
            "name": "ukAdditionalData",
            "baseName": "ukAdditionalData",
            "type": "UkAdditionalDataDto"
        },
        {
            "name": "usAdditionalData",
            "baseName": "usAdditionalData",
            "type": "UsAdditionalDataDto"
        }    ];

    static getAttributeTypeMap() {
        return ContactAdditionalDto.attributeTypeMap;
    }
}

