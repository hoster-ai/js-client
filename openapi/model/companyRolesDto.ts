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

export class CompanyRolesDto {
    /**
    * A unique identifier for user.
    */
    'userId'?: string;
    /**
    * A enum that describes the role and rights a user has to company.
    */
    'roles'?: Array<CompanyRolesDto.RolesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<CompanyRolesDto.RolesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return CompanyRolesDto.attributeTypeMap;
    }
}

export namespace CompanyRolesDto {
    export enum RolesEnum {
        NUMBER_null = <any> null
    }
}
