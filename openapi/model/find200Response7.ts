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
import { ItemDto } from './itemDto';

export class Find200Response7 {
    'code': number;
    'message': string;
    'data': Array<ItemDto>;
    'currentPage': number;
    'totalPages': number;
    'perPage': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ItemDto>"
        },
        {
            "name": "currentPage",
            "baseName": "currentPage",
            "type": "number"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number"
        },
        {
            "name": "perPage",
            "baseName": "perPage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Find200Response7.attributeTypeMap;
    }
}

