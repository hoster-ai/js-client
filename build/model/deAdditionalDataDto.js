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
exports.DeAdditionalDataDto = void 0;
class DeAdditionalDataDto {
    static getAttributeTypeMap() {
        return DeAdditionalDataDto.attributeTypeMap;
    }
}
exports.DeAdditionalDataDto = DeAdditionalDataDto;
DeAdditionalDataDto.discriminator = undefined;
DeAdditionalDataDto.attributeTypeMap = [
    {
        "name": "contactType",
        "baseName": "contactType",
        "type": "DeAdditionalDataDto.ContactTypeEnum"
    }
];
(function (DeAdditionalDataDto) {
    let ContactTypeEnum;
    (function (ContactTypeEnum) {
        ContactTypeEnum[ContactTypeEnum["Person"] = 'PERSON'] = "Person";
        ContactTypeEnum[ContactTypeEnum["Role"] = 'ROLE'] = "Role";
        ContactTypeEnum[ContactTypeEnum["Org"] = 'ORG'] = "Org";
    })(ContactTypeEnum = DeAdditionalDataDto.ContactTypeEnum || (DeAdditionalDataDto.ContactTypeEnum = {}));
})(DeAdditionalDataDto || (exports.DeAdditionalDataDto = DeAdditionalDataDto = {}));
