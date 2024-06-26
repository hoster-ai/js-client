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

export class CatParameterDataDto {
    /**
    * A string containing maintainer information. Maximum length 128 characters.
    */
    'maintainer': string;
    /**
    * A string describing the intended use for the domain. Maximum length 250 characters.
    */
    'intendedUse': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maintainer",
            "baseName": "maintainer",
            "type": "string"
        },
        {
            "name": "intendedUse",
            "baseName": "intendedUse",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CatParameterDataDto.attributeTypeMap;
    }
}

