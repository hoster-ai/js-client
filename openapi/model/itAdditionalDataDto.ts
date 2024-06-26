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

export class ItAdditionalDataDto {
    /**
    * The nationality of the contact
    */
    'nationality': string;
    /**
    * - 1. Italian and foreign natural persons     - 2. Companies/one man companies     - 3. Freelance workers/professionals     - 4. Non-profit organisations     - 5. Public organisations     - 6. Other subjects     - 7. Foreigners who match 2-6
    */
    'entityType': ItAdditionalDataDto.EntityTypeEnum;
    /**
    * The registration code (e.g. codice fiscal, document number, VAT number or numeric tax code) of the contact
    */
    'regCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "ItAdditionalDataDto.EntityTypeEnum"
        },
        {
            "name": "regCode",
            "baseName": "regCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ItAdditionalDataDto.attributeTypeMap;
    }
}

export namespace ItAdditionalDataDto {
    export enum EntityTypeEnum {
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2,
        NUMBER_3 = <any> 3,
        NUMBER_4 = <any> 4,
        NUMBER_5 = <any> 5,
        NUMBER_6 = <any> 6,
        NUMBER_7 = <any> 7
    }
}
