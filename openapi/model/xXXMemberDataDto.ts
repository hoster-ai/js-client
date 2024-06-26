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

export class XXXMemberDataDto {
    /**
    * Used to associate a member with a domain on registration.
    */
    'memberId': string;
    /**
    * Used to associate a member with a domain on registration.
    */
    'memberPassword'?: string;
    /**
    * Set to `true` if the domain is intended as a Non-Resolving domain. If not set, the .xxx registry will send a Membership email to the registrant contact’s email address if the email address is not already associated with a Member.
    */
    'nonResolvin': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "string"
        },
        {
            "name": "memberPassword",
            "baseName": "memberPassword",
            "type": "string"
        },
        {
            "name": "nonResolvin",
            "baseName": "nonResolvin",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return XXXMemberDataDto.attributeTypeMap;
    }
}

