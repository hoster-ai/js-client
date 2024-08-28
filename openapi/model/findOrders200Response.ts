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
import { OrderDto } from './orderDto';

export class FindOrders200Response {
    'code': number;
    'message': string;
    'data': Array<OrderDto>;
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
            "type": "Array<OrderDto>"
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
        return FindOrders200Response.attributeTypeMap;
    }
}

