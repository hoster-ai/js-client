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
import { FreeTldDto } from './freeTldDto';
import { MultilangTextDto } from './multilangTextDto';

export class PriceDto {
    /**
    * Price acoording to duration.
    */
    'duration': PriceDto.DurationEnum;
    /**
    * The created price number.
    */
    'createPrice': number;
    /**
    * Indicates the price number for renew.
    */
    'renewPrice'?: number;
    /**
    * Indicates the price number for one time payment.
    */
    'setupPrice'?: number;
    /**
    * Creates the price number for an offer.
    */
    'offerCreatePrice'?: number;
    /**
    * Creates the price number for a renew offer.
    */
    'offerRenewPrice'?: number;
    /**
    * Creates the price number for a setup offer.
    */
    'offerSetupPrice'?: number;
    /**
    * Text that describes the offer and the languege the text is writen on.
    */
    'offerText'?: Array<MultilangTextDto>;
    /**
    * An object that describes a free tld.
    */
    'freeTld'?: Array<FreeTldDto>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "PriceDto.DurationEnum"
        },
        {
            "name": "createPrice",
            "baseName": "createPrice",
            "type": "number"
        },
        {
            "name": "renewPrice",
            "baseName": "renewPrice",
            "type": "number"
        },
        {
            "name": "setupPrice",
            "baseName": "setupPrice",
            "type": "number"
        },
        {
            "name": "offerCreatePrice",
            "baseName": "offerCreatePrice",
            "type": "number"
        },
        {
            "name": "offerRenewPrice",
            "baseName": "offerRenewPrice",
            "type": "number"
        },
        {
            "name": "offerSetupPrice",
            "baseName": "offerSetupPrice",
            "type": "number"
        },
        {
            "name": "offerText",
            "baseName": "offerText",
            "type": "Array<MultilangTextDto>"
        },
        {
            "name": "freeTld",
            "baseName": "freeTld",
            "type": "Array<FreeTldDto>"
        }    ];

    static getAttributeTypeMap() {
        return PriceDto.attributeTypeMap;
    }
}

export namespace PriceDto {
    export enum DurationEnum {
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _6 = <any> '6',
        _7 = <any> '7',
        _8 = <any> '8',
        _9 = <any> '9',
        _10 = <any> '10',
        _11 = <any> '11',
        _12 = <any> '12',
        _24 = <any> '24',
        _36 = <any> '36',
        _48 = <any> '48',
        _60 = <any> '60',
        _72 = <any> '72',
        _84 = <any> '84',
        _96 = <any> '96',
        _108 = <any> '108',
        _120 = <any> '120'
    }
}