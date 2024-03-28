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
exports.DomainBundleDto = void 0;
class DomainBundleDto {
    static getAttributeTypeMap() {
        return DomainBundleDto.attributeTypeMap;
    }
}
exports.DomainBundleDto = DomainBundleDto;
DomainBundleDto.discriminator = undefined;
DomainBundleDto.attributeTypeMap = [
    {
        "name": "domainBundleName",
        "baseName": "domainBundleName",
        "type": "string"
    },
    {
        "name": "chargeable",
        "baseName": "chargeable",
        "type": "boolean"
    },
    {
        "name": "recordType",
        "baseName": "recordType",
        "type": "DomainBundleDto.RecordTypeEnum"
    }
];
(function (DomainBundleDto) {
    let RecordTypeEnum;
    (function (RecordTypeEnum) {
        RecordTypeEnum[RecordTypeEnum["Domain"] = 'DOMAIN'] = "Domain";
        RecordTypeEnum[RecordTypeEnum["Dname"] = 'DNAME'] = "Dname";
    })(RecordTypeEnum = DomainBundleDto.RecordTypeEnum || (DomainBundleDto.RecordTypeEnum = {}));
})(DomainBundleDto || (exports.DomainBundleDto = DomainBundleDto = {}));
