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
import { Attachment } from './attachment';

export class EmailPayloadDto {
    /**
    * The subject of the email
    */
    'subject': string;
    /**
    * The email message content
    */
    'body': string;
    /**
    * An array of attachments
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return EmailPayloadDto.attributeTypeMap;
    }
}

