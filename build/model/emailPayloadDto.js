"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPayloadDto = void 0;
class EmailPayloadDto {
    static getAttributeTypeMap() {
        return EmailPayloadDto.attributeTypeMap;
    }
}
exports.EmailPayloadDto = EmailPayloadDto;
EmailPayloadDto.discriminator = undefined;
EmailPayloadDto.attributeTypeMap = [
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
    }
];
