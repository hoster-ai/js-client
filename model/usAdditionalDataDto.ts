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

export class UsAdditionalDataDto {
    /**
    * The purpose of the domain application. Possible values include:     - P1 (Business use for profit)     - P2 (Non-profit business, club, association, etc.)     - P3 (Personal use)     - P4 (Education purposes)     - P5 (Government purposes)
    */
    'appPurpose': UsAdditionalDataDto.AppPurposeEnum;
    /**
    * The category of the registrant. Possible values include:     - C11 (A natural person who is a United States citizen)     - C12 (A natural person who is a permanent resident of the United States of America, or     any of its possessions or territories)     - C21 (A US-based organization or company formed within one of the fifty (50) U.S. states,     the District of Columbia, or any of the United States possessions or territories, or organized     or otherwise constituted under the laws of a state of the United States of America, the     District of Columbia, or any of its possessions or territories or a U.S. federal, state, or local     government entity or a political subdivision thereof.)     - C31 (A foreign entity or organization that has a bona fide presence in the United States     of America or any of its possessions or territories who regularly engages in lawful activities     (sales of goods or services or other business, commercial or non-commercial, including     not-for-profit relations in the United States).)     - C32 (A foreign entity or organization that has an office or other facility in the United     States.)
    */
    'category': UsAdditionalDataDto.CategoryEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appPurpose",
            "baseName": "appPurpose",
            "type": "UsAdditionalDataDto.AppPurposeEnum"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "UsAdditionalDataDto.CategoryEnum"
        }    ];

    static getAttributeTypeMap() {
        return UsAdditionalDataDto.attributeTypeMap;
    }
}

export namespace UsAdditionalDataDto {
    export enum AppPurposeEnum {
        P1 = <any> 'P1',
        P2 = <any> 'P2',
        P3 = <any> 'P3',
        P4 = <any> 'P4',
        P5 = <any> 'P5'
    }
    export enum CategoryEnum {
        C11 = <any> 'C11',
        C12 = <any> 'C12',
        C21 = <any> 'C21',
        C31 = <any> 'C31',
        C32 = <any> 'C32'
    }
}
