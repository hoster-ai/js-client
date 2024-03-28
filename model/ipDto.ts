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
import { IpGroupDto } from './ipGroupDto';

export class IpDto {
    /**
    * The unique identifier of the ip.
    */
    'id'?: string;
    /**
    * The actual address of the ip.
    */
    'address': string;
    /**
    * The number of bits in the prefix length in an IP address range.
    */
    'range': number;
    /**
    * The type of the ip.
    */
    'type': IpDto.TypeEnum;
    /**
    * The unique identifier for the item the ip is assigned to.
    */
    'assignedToItemId'?: string;
    /**
    * The goup of the ip.
    */
    'group': IpGroupDto;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IpDto.TypeEnum"
        },
        {
            "name": "assignedToItemId",
            "baseName": "assignedToItemId",
            "type": "string"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "IpGroupDto"
        }    ];

    static getAttributeTypeMap() {
        return IpDto.attributeTypeMap;
    }
}

export namespace IpDto {
    export enum TypeEnum {
        Ipv4 = <any> 'IPv4',
        Ipv6 = <any> 'IPv6'
    }
}
