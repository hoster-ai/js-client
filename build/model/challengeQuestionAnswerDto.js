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
exports.ChallengeQuestionAnswerDto = void 0;
class ChallengeQuestionAnswerDto {
    static getAttributeTypeMap() {
        return ChallengeQuestionAnswerDto.attributeTypeMap;
    }
}
exports.ChallengeQuestionAnswerDto = ChallengeQuestionAnswerDto;
ChallengeQuestionAnswerDto.discriminator = undefined;
ChallengeQuestionAnswerDto.attributeTypeMap = [
    {
        "name": "question",
        "baseName": "question",
        "type": "string"
    },
    {
        "name": "answer",
        "baseName": "answer",
        "type": "string"
    }
];
