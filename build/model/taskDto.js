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
exports.TaskDto = void 0;
class TaskDto {
    static getAttributeTypeMap() {
        return TaskDto.attributeTypeMap;
    }
}
exports.TaskDto = TaskDto;
TaskDto.discriminator = undefined;
TaskDto.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "createdFromIntegrationId",
        "baseName": "createdFromIntegrationId",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "TaskDto.ActionEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "TaskDto.StatusEnum"
    },
    {
        "name": "integrationHandler",
        "baseName": "integrationHandler",
        "type": "TaskDto.IntegrationHandlerEnum"
    },
    {
        "name": "startedDate",
        "baseName": "startedDate",
        "type": "Date"
    },
    {
        "name": "completedDate",
        "baseName": "completedDate",
        "type": "Date"
    },
    {
        "name": "completePercentage",
        "baseName": "completePercentage",
        "type": "number"
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "object"
    }
];
(function (TaskDto) {
    let ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["ItemCreate"] = 'item/create'] = "ItemCreate";
        ActionEnum[ActionEnum["ItemSuspend"] = 'item/suspend'] = "ItemSuspend";
        ActionEnum[ActionEnum["ItemUnsuspend"] = 'item/unsuspend'] = "ItemUnsuspend";
        ActionEnum[ActionEnum["ItemRenew"] = 'item/renew'] = "ItemRenew";
        ActionEnum[ActionEnum["ItemCancel"] = 'item/cancel'] = "ItemCancel";
        ActionEnum[ActionEnum["ItemDelete"] = 'item/delete'] = "ItemDelete";
        ActionEnum[ActionEnum["ItemUpgrade"] = 'item/upgrade'] = "ItemUpgrade";
        ActionEnum[ActionEnum["ItemUpdate"] = 'item/update'] = "ItemUpdate";
        ActionEnum[ActionEnum["ItemDowngrade"] = 'item/downgrade'] = "ItemDowngrade";
        ActionEnum[ActionEnum["DomainCreate"] = 'domain/create'] = "DomainCreate";
        ActionEnum[ActionEnum["DomainLock"] = 'domain/lock'] = "DomainLock";
        ActionEnum[ActionEnum["DomainUnlock"] = 'domain/unlock'] = "DomainUnlock";
        ActionEnum[ActionEnum["DomainRenew"] = 'domain/renew'] = "DomainRenew";
        ActionEnum[ActionEnum["DomainBundleAdd"] = 'domain/bundle/add'] = "DomainBundleAdd";
        ActionEnum[ActionEnum["DomainBundleRemove"] = 'domain/bundle/remove'] = "DomainBundleRemove";
        ActionEnum[ActionEnum["DomainInfo"] = 'domain/info'] = "DomainInfo";
        ActionEnum[ActionEnum["DomainRecall"] = 'domain/recall'] = "DomainRecall";
        ActionEnum[ActionEnum["DomainTransferCheck"] = 'domain/transfer/check'] = "DomainTransferCheck";
        ActionEnum[ActionEnum["DomainTransferCancel"] = 'domain/transfer/cancel'] = "DomainTransferCancel";
        ActionEnum[ActionEnum["DomainTransferAccept"] = 'domain/transfer/accept'] = "DomainTransferAccept";
        ActionEnum[ActionEnum["DomainSendAuthCode"] = 'domain/send-auth-code'] = "DomainSendAuthCode";
        ActionEnum[ActionEnum["DomainCheckAvailability"] = 'domain/check-availability'] = "DomainCheckAvailability";
        ActionEnum[ActionEnum["DomainShieldActivate"] = 'domain/shield/activate'] = "DomainShieldActivate";
        ActionEnum[ActionEnum["DomainShieldDeactivate"] = 'domain/shield/deactivate'] = "DomainShieldDeactivate";
        ActionEnum[ActionEnum["DomainDelete"] = 'domain/delete'] = "DomainDelete";
        ActionEnum[ActionEnum["DomainContactsInfo"] = 'domain/contacts/info'] = "DomainContactsInfo";
        ActionEnum[ActionEnum["DomainContactsCreate"] = 'domain/contacts/create'] = "DomainContactsCreate";
        ActionEnum[ActionEnum["DomainContactsUpdate"] = 'domain/contacts/update'] = "DomainContactsUpdate";
        ActionEnum[ActionEnum["DomainContactsDelete"] = 'domain/contacts/delete'] = "DomainContactsDelete";
        ActionEnum[ActionEnum["DomainContactsRegistrant"] = 'domain/contacts/registrant'] = "DomainContactsRegistrant";
        ActionEnum[ActionEnum["DomainContactsAdmin"] = 'domain/contacts/admin'] = "DomainContactsAdmin";
        ActionEnum[ActionEnum["DomainContactsTech"] = 'domain/contacts/tech'] = "DomainContactsTech";
        ActionEnum[ActionEnum["DomainContactsBilling"] = 'domain/contacts/billing'] = "DomainContactsBilling";
        ActionEnum[ActionEnum["DomainResendVerificationEmail"] = 'domain/resend-verification-email'] = "DomainResendVerificationEmail";
        ActionEnum[ActionEnum["DomainCheckClaims"] = 'domain/check-claims'] = "DomainCheckClaims";
        ActionEnum[ActionEnum["DomainModifyHosts"] = 'domain/modify-hosts'] = "DomainModifyHosts";
        ActionEnum[ActionEnum["DomainModifyAuthcode"] = 'domain/modify-authcode'] = "DomainModifyAuthcode";
        ActionEnum[ActionEnum["DomainGetTransferStatus"] = 'domain/get-transfer-status'] = "DomainGetTransferStatus";
        ActionEnum[ActionEnum["DomainCancelTransfer"] = 'domain/cancel-transfer'] = "DomainCancelTransfer";
        ActionEnum[ActionEnum["DomainRequestTransferAway"] = 'domain/request-transfer-away'] = "DomainRequestTransferAway";
        ActionEnum[ActionEnum["DomainRequestTransfer"] = 'domain/request-transfer'] = "DomainRequestTransfer";
        ActionEnum[ActionEnum["DomainCompleteTransferAway"] = 'domain/complete-transfer-away'] = "DomainCompleteTransferAway";
        ActionEnum[ActionEnum["DomainRejectTransferAway"] = 'domain/reject-transfer-away'] = "DomainRejectTransferAway";
        ActionEnum[ActionEnum["DomainRejectTransferExpired"] = 'domain/reject-transfer-expired'] = "DomainRejectTransferExpired";
    })(ActionEnum = TaskDto.ActionEnum || (TaskDto.ActionEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
        StatusEnum[StatusEnum["InProgress"] = 'IN_PROGRESS'] = "InProgress";
        StatusEnum[StatusEnum["Completed"] = 'COMPLETED'] = "Completed";
        StatusEnum[StatusEnum["Canceled"] = 'CANCELED'] = "Canceled";
    })(StatusEnum = TaskDto.StatusEnum || (TaskDto.StatusEnum = {}));
    let IntegrationHandlerEnum;
    (function (IntegrationHandlerEnum) {
        IntegrationHandlerEnum[IntegrationHandlerEnum["InvoiceSuccess"] = 'INVOICE.SUCCESS'] = "InvoiceSuccess";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemCreate"] = 'ITEM.CREATE'] = "ItemCreate";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemUpgrade"] = 'ITEM.UPGRADE'] = "ItemUpgrade";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemDowngrade"] = 'ITEM.DOWNGRADE'] = "ItemDowngrade";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemRenew"] = 'ITEM.RENEW'] = "ItemRenew";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemSuspend"] = 'ITEM.SUSPEND'] = "ItemSuspend";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemUnsuspend"] = 'ITEM.UNSUSPEND'] = "ItemUnsuspend";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemInstall"] = 'ITEM.INSTALL'] = "ItemInstall";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ItemUninstall"] = 'ITEM.UNINSTALL'] = "ItemUninstall";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductCreate"] = 'PRODUCT.CREATE'] = "ProductCreate";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductUpdate"] = 'PRODUCT.UPDATE'] = "ProductUpdate";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductDelete"] = 'PRODUCT.DELETE'] = "ProductDelete";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductSuspend"] = 'PRODUCT.SUSPEND'] = "ProductSuspend";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductUnsuspend"] = 'PRODUCT.UNSUSPEND'] = "ProductUnsuspend";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductRenew"] = 'PRODUCT.RENEW'] = "ProductRenew";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductUpgrade"] = 'PRODUCT.UPGRADE'] = "ProductUpgrade";
        IntegrationHandlerEnum[IntegrationHandlerEnum["ProductDowngrade"] = 'PRODUCT.DOWNGRADE'] = "ProductDowngrade";
    })(IntegrationHandlerEnum = TaskDto.IntegrationHandlerEnum || (TaskDto.IntegrationHandlerEnum = {}));
})(TaskDto || (exports.TaskDto = TaskDto = {}));
