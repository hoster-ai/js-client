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

export class RegistryContactsDto {
    /**
    * Code provided by the registry for the registrant. Takes the value of ContactCode from domain Contact associated with the domain
    */
    'registrantCode': string;
    /**
    * Admin code provided by hoster.ai
    */
    'adminCode'?: string;
    /**
    * Tech code provided by hoster.ai
    */
    'techCode'?: string;
    /**
    * Billing code provided by hoster.ai
    */
    'billingCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "registrantCode",
            "baseName": "registrantCode",
            "type": "string"
        },
        {
            "name": "adminCode",
            "baseName": "adminCode",
            "type": "string"
        },
        {
            "name": "techCode",
            "baseName": "techCode",
            "type": "string"
        },
        {
            "name": "billingCode",
            "baseName": "billingCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RegistryContactsDto.attributeTypeMap;
    }
}
