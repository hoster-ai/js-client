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
import { PaymentRedirectUrlResponseDto } from './paymentRedirectUrlResponseDto';

export class MakePayment200Response {
    'code'?: number;
    'message'?: string;
    'data'?: PaymentRedirectUrlResponseDto;

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
            "type": "PaymentRedirectUrlResponseDto"
        }    ];

    static getAttributeTypeMap() {
        return MakePayment200Response.attributeTypeMap;
    }
}

