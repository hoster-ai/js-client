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
import { IntegrationDto } from './integrationDto';

export class PaymentDto {
    /**
    * The unique identifier of the payment.
    */
    'id'?: string;
    /**
    * The type of payment (e.g., ORDER).
    */
    'paymentType': PaymentDto.PaymentTypeEnum;
    /**
    * The type of transaction.
    */
    'transactionType': PaymentDto.TransactionTypeEnum;
    /**
    * The ID of the user associated with the payment.
    */
    'userId'?: string;
    /**
    * The ID of the company associated with the payment.
    */
    'companyId'?: string;
    /**
    * 
    */
    'fullName'?: string;
    /**
    * The unique identifier of the associated order.
    */
    'orderId'?: string;
    /**
    * The service integration associated with the payment.
    */
    'integration': IntegrationDto;
    /**
    * The status of the payment.
    */
    'status': PaymentDto.StatusEnum = PaymentDto.StatusEnum.Pending;
    /**
    * The value of the payment.
    */
    'value': number;
    /**
    * The fee associated with the payment.
    */
    'fee'?: number;
    /**
    * An array of order IDs that have used this payment.
    */
    'usedByOrderIds'?: Array<string>;
    /**
    * The available balance after the payment.
    */
    'remainingBalance'?: number;
    /**
    * Additional metadata for the payment.
    */
    'meta'?: object;
    /**
    * The date of the payment.
    */
    'date': Date;
    /**
    * The date when the payment was created.
    */
    'createdAt'?: Date;
    /**
    * The date when the payment was last updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "PaymentDto.PaymentTypeEnum"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "PaymentDto.TransactionTypeEnum"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "IntegrationDto"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentDto.StatusEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "usedByOrderIds",
            "baseName": "usedByOrderIds",
            "type": "Array<string>"
        },
        {
            "name": "remainingBalance",
            "baseName": "remainingBalance",
            "type": "number"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "object"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PaymentDto.attributeTypeMap;
    }
}

export namespace PaymentDto {
    export enum PaymentTypeEnum {
        Order = <any> 'ORDER',
        Credits = <any> 'CREDITS'
    }
    export enum TransactionTypeEnum {
        Withdraw = <any> 'WITHDRAW',
        Deposit = <any> 'DEPOSIT'
    }
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Processing = <any> 'PROCESSING',
        Completed = <any> 'COMPLETED',
        Cancel = <any> 'CANCEL',
        Error = <any> 'ERROR'
    }
}
