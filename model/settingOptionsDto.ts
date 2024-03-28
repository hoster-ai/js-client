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

export class SettingOptionsDto {
    /**
    * Settings option name.
    */
    'key': string;
    /**
    * Value associated with the setting option.
    */
    'value': string;
    /**
    * Indicates if this setting can be deleted or not.
    */
    'canBeDeleted'?: boolean = true;
    /**
    * Indicates if this setting can be edited or not.
    */
    'canBeEdited'?: boolean = true;
    /**
    * Indicates if this setting can be viewed or not.
    */
    'canBeViewed'?: boolean = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "canBeDeleted",
            "baseName": "canBeDeleted",
            "type": "boolean"
        },
        {
            "name": "canBeEdited",
            "baseName": "canBeEdited",
            "type": "boolean"
        },
        {
            "name": "canBeViewed",
            "baseName": "canBeViewed",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SettingOptionsDto.attributeTypeMap;
    }
}
