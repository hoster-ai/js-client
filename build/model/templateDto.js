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
exports.TemplateDto = void 0;
class TemplateDto {
    static getAttributeTypeMap() {
        return TemplateDto.attributeTypeMap;
    }
}
exports.TemplateDto = TemplateDto;
TemplateDto.discriminator = undefined;
TemplateDto.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "companyId",
        "baseName": "companyId",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "notificationType",
        "baseName": "notificationType",
        "type": "TemplateDto.NotificationTypeEnum"
    },
    {
        "name": "integrationId",
        "baseName": "integrationId",
        "type": "string"
    },
    {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "TemplateData"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "TemplateDto.EventEnum"
    },
    {
        "name": "deletable",
        "baseName": "deletable",
        "type": "boolean"
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
    }
];
(function (TemplateDto) {
    let NotificationTypeEnum;
    (function (NotificationTypeEnum) {
        NotificationTypeEnum[NotificationTypeEnum["Email"] = 'email'] = "Email";
        NotificationTypeEnum[NotificationTypeEnum["Chat"] = 'chat'] = "Chat";
        NotificationTypeEnum[NotificationTypeEnum["Push"] = 'push'] = "Push";
        NotificationTypeEnum[NotificationTypeEnum["Sms"] = 'sms'] = "Sms";
    })(NotificationTypeEnum = TemplateDto.NotificationTypeEnum || (TemplateDto.NotificationTypeEnum = {}));
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["UserCreated"] = 'user/created'] = "UserCreated";
        EventEnum[EventEnum["UserUpdated"] = 'user/updated'] = "UserUpdated";
        EventEnum[EventEnum["UserDeleted"] = 'user/deleted'] = "UserDeleted";
        EventEnum[EventEnum["UserBanned"] = 'user/banned'] = "UserBanned";
        EventEnum[EventEnum["UserUnbanned"] = 'user/unbanned'] = "UserUnbanned";
        EventEnum[EventEnum["UserCompanyAccessAdded"] = 'user/company/access/added'] = "UserCompanyAccessAdded";
        EventEnum[EventEnum["UserCompanyAccessRemoved"] = 'user/company/access/removed'] = "UserCompanyAccessRemoved";
        EventEnum[EventEnum["UserLocked"] = 'user/locked'] = "UserLocked";
        EventEnum[EventEnum["UserCreditBalanceUpdated"] = 'user/credit-balance/updated'] = "UserCreditBalanceUpdated";
        EventEnum[EventEnum["UserUnlocked"] = 'user/unlocked'] = "UserUnlocked";
        EventEnum[EventEnum["UserPasswordUpdated"] = 'user/password/updated'] = "UserPasswordUpdated";
        EventEnum[EventEnum["UserEmailUpdated"] = 'user/email/updated'] = "UserEmailUpdated";
        EventEnum[EventEnum["UserCurrencyUpdated"] = 'user/currency/updated'] = "UserCurrencyUpdated";
        EventEnum[EventEnum["UserInvoiceContactUpdated"] = 'user/invoice-contact/updated'] = "UserInvoiceContactUpdated";
        EventEnum[EventEnum["UserPolicyUpdated"] = 'user/policy/updated'] = "UserPolicyUpdated";
        EventEnum[EventEnum["UserLanguagesUpdated"] = 'user/languages/updated'] = "UserLanguagesUpdated";
        EventEnum[EventEnum["UserCustomPricePoliciesUpdated"] = 'user/custom-price-policies/updated'] = "UserCustomPricePoliciesUpdated";
        EventEnum[EventEnum["UserCustomAddonPricePoliciesUpdated"] = 'user/custom-addon-price-policies/updated'] = "UserCustomAddonPricePoliciesUpdated";
        EventEnum[EventEnum["UserCustomAffiliateAdded"] = 'user/custom-affiliate/added'] = "UserCustomAffiliateAdded";
        EventEnum[EventEnum["UserCustomAffiliateRemoved"] = 'user/custom-affiliate/removed'] = "UserCustomAffiliateRemoved";
        EventEnum[EventEnum["UserInvoiceIntervalUpdated"] = 'user/invoice-interval/updated'] = "UserInvoiceIntervalUpdated";
        EventEnum[EventEnum["UserAdditionalNotificationEmailRemoved"] = 'user/additional-notification-email/removed'] = "UserAdditionalNotificationEmailRemoved";
        EventEnum[EventEnum["UserAdditionalNotificationEmailAdded"] = 'user/additional-notification-email/added'] = "UserAdditionalNotificationEmailAdded";
        EventEnum[EventEnum["UserCommentAdded"] = 'user/comment/added'] = "UserCommentAdded";
        EventEnum[EventEnum["UserCommentRemoved"] = 'user/comment/removed'] = "UserCommentRemoved";
        EventEnum[EventEnum["UserCommentUpdated"] = 'user/comment/updated'] = "UserCommentUpdated";
        EventEnum[EventEnum["UserTagsUpdated"] = 'user/tags/updated'] = "UserTagsUpdated";
        EventEnum[EventEnum["UserSettingAdded"] = 'user/setting/added'] = "UserSettingAdded";
        EventEnum[EventEnum["UserSettingRemoved"] = 'user/setting/removed'] = "UserSettingRemoved";
        EventEnum[EventEnum["UserSettingUpdated"] = 'user/setting/updated'] = "UserSettingUpdated";
        EventEnum[EventEnum["UserStartSelling"] = 'user/start-selling'] = "UserStartSelling";
        EventEnum[EventEnum["UserRolesUpdated"] = 'user/roles/updated'] = "UserRolesUpdated";
        EventEnum[EventEnum["MessageCreated"] = 'message/created'] = "MessageCreated";
        EventEnum[EventEnum["MessageUpdated"] = 'message/updated'] = "MessageUpdated";
        EventEnum[EventEnum["MessageDeleted"] = 'message/deleted'] = "MessageDeleted";
        EventEnum[EventEnum["NotificationSent"] = 'notification/sent'] = "NotificationSent";
        EventEnum[EventEnum["PolicyCreated"] = 'policy/created'] = "PolicyCreated";
        EventEnum[EventEnum["PolicyUpdated"] = 'policy/updated'] = "PolicyUpdated";
        EventEnum[EventEnum["PolicyDeleted"] = 'policy/deleted'] = "PolicyDeleted";
        EventEnum[EventEnum["ProductCategoryCreated"] = 'product-category/created'] = "ProductCategoryCreated";
        EventEnum[EventEnum["ProductCategoryUpdated"] = 'product-category/updated'] = "ProductCategoryUpdated";
        EventEnum[EventEnum["ProductCategoryDeleted"] = 'product-category/deleted'] = "ProductCategoryDeleted";
        EventEnum[EventEnum["InvoiceContactCreated"] = 'invoice-contact/created'] = "InvoiceContactCreated";
        EventEnum[EventEnum["InvoiceContactUpdated"] = 'invoice-contact/updated'] = "InvoiceContactUpdated";
        EventEnum[EventEnum["InvoiceContactDeleted"] = 'invoice-contact/deleted'] = "InvoiceContactDeleted";
        EventEnum[EventEnum["InvoiceCreated"] = 'invoice/created'] = "InvoiceCreated";
        EventEnum[EventEnum["InvoiceUpdated"] = 'invoice/updated'] = "InvoiceUpdated";
        EventEnum[EventEnum["InvoiceDeleted"] = 'invoice/deleted'] = "InvoiceDeleted";
        EventEnum[EventEnum["CurrencyCreated"] = 'currency/created'] = "CurrencyCreated";
        EventEnum[EventEnum["CurrencyUpdated"] = 'currency/updated'] = "CurrencyUpdated";
        EventEnum[EventEnum["CurrencyDeleted"] = 'currency/deleted'] = "CurrencyDeleted";
        EventEnum[EventEnum["AffiliateCreated"] = 'affiliate/created'] = "AffiliateCreated";
        EventEnum[EventEnum["AffiliateUpdated"] = 'affiliate/updated'] = "AffiliateUpdated";
        EventEnum[EventEnum["AffiliateDeleted"] = 'affiliate/deleted'] = "AffiliateDeleted";
        EventEnum[EventEnum["CompanyCreated"] = 'company/created'] = "CompanyCreated";
        EventEnum[EventEnum["CompanyUpdated"] = 'company/updated'] = "CompanyUpdated";
        EventEnum[EventEnum["CompanyDeleted"] = 'company/deleted'] = "CompanyDeleted";
        EventEnum[EventEnum["OrganizationIntegrationAttached"] = 'organization/integration/attached'] = "OrganizationIntegrationAttached";
        EventEnum[EventEnum["OrganizationIntegrationDetached"] = 'organization/integration/detached'] = "OrganizationIntegrationDetached";
        EventEnum[EventEnum["TldCreated"] = 'tld/created'] = "TldCreated";
        EventEnum[EventEnum["TldUpdated"] = 'tld/updated'] = "TldUpdated";
        EventEnum[EventEnum["TldDeleted"] = 'tld/deleted'] = "TldDeleted";
        EventEnum[EventEnum["IntegrationCreated"] = 'integration/created'] = "IntegrationCreated";
        EventEnum[EventEnum["IntegrationUpdated"] = 'integration/updated'] = "IntegrationUpdated";
        EventEnum[EventEnum["IntegrationDeleted"] = 'integration/deleted'] = "IntegrationDeleted";
        EventEnum[EventEnum["IntegrationInstalled"] = 'integration/installed'] = "IntegrationInstalled";
        EventEnum[EventEnum["IntegrationUninstalled"] = 'integration/uninstalled'] = "IntegrationUninstalled";
        EventEnum[EventEnum["DomainContactCreated"] = 'domain-contact/created'] = "DomainContactCreated";
        EventEnum[EventEnum["DomainContactUpdated"] = 'domain-contact/updated'] = "DomainContactUpdated";
        EventEnum[EventEnum["DomainContactDeleted"] = 'domain-contact/deleted'] = "DomainContactDeleted";
        EventEnum[EventEnum["DomainCategoryCreated"] = 'domain-category/created'] = "DomainCategoryCreated";
        EventEnum[EventEnum["DomainCategoryUpdated"] = 'domain-category/updated'] = "DomainCategoryUpdated";
        EventEnum[EventEnum["DomainCategoryDeleted"] = 'domain-category/deleted'] = "DomainCategoryDeleted";
        EventEnum[EventEnum["AddonCreated"] = 'addon/created'] = "AddonCreated";
        EventEnum[EventEnum["AddonUpdated"] = 'addon/updated'] = "AddonUpdated";
        EventEnum[EventEnum["AddonDeleted"] = 'addon/deleted'] = "AddonDeleted";
        EventEnum[EventEnum["PaymentCreated"] = 'payment/created'] = "PaymentCreated";
        EventEnum[EventEnum["PaymentCanceled"] = 'payment/canceled'] = "PaymentCanceled";
        EventEnum[EventEnum["PaymentFailed"] = 'payment/failed'] = "PaymentFailed";
        EventEnum[EventEnum["PaymentSubscribed"] = 'payment/subscribed'] = "PaymentSubscribed";
        EventEnum[EventEnum["PaymentUnsubscribed"] = 'payment/unsubscribed'] = "PaymentUnsubscribed";
        EventEnum[EventEnum["PaymentUpdated"] = 'payment/updated'] = "PaymentUpdated";
        EventEnum[EventEnum["PaymentDeleted"] = 'payment/deleted'] = "PaymentDeleted";
        EventEnum[EventEnum["PaymentCompleted"] = 'payment/completed'] = "PaymentCompleted";
        EventEnum[EventEnum["TemplateCreated"] = 'template/created'] = "TemplateCreated";
        EventEnum[EventEnum["TemplateUpdated"] = 'template/updated'] = "TemplateUpdated";
        EventEnum[EventEnum["TemplateDeleted"] = 'template/deleted'] = "TemplateDeleted";
        EventEnum[EventEnum["CouponCreated"] = 'coupon/created'] = "CouponCreated";
        EventEnum[EventEnum["CouponUpdated"] = 'coupon/updated'] = "CouponUpdated";
        EventEnum[EventEnum["CouponDeleted"] = 'coupon/deleted'] = "CouponDeleted";
        EventEnum[EventEnum["TemplateIntegrationCreated"] = 'template-integration/created'] = "TemplateIntegrationCreated";
        EventEnum[EventEnum["TemplateIntegrationUpdated"] = 'template-integration/updated'] = "TemplateIntegrationUpdated";
        EventEnum[EventEnum["TemplateIntegrationDeleted"] = 'template-integration/deleted'] = "TemplateIntegrationDeleted";
        EventEnum[EventEnum["OrderCreated"] = 'order/created'] = "OrderCreated";
        EventEnum[EventEnum["OrderStatusInProgress"] = 'order/status/in-progress'] = "OrderStatusInProgress";
        EventEnum[EventEnum["OrderStatusCompleted"] = 'order/status/completed'] = "OrderStatusCompleted";
        EventEnum[EventEnum["OrderStatusCanceled"] = 'order/status/canceled'] = "OrderStatusCanceled";
        EventEnum[EventEnum["OrderStatusRefunded"] = 'order/status/refunded'] = "OrderStatusRefunded";
        EventEnum[EventEnum["OrderInsufficientBalance"] = 'order/insufficient-balance'] = "OrderInsufficientBalance";
        EventEnum[EventEnum["OrderUpdated"] = 'order/updated'] = "OrderUpdated";
        EventEnum[EventEnum["OrderDeleted"] = 'order/deleted'] = "OrderDeleted";
        EventEnum[EventEnum["SettingCreated"] = 'setting/created'] = "SettingCreated";
        EventEnum[EventEnum["SettingUpdated"] = 'setting/updated'] = "SettingUpdated";
        EventEnum[EventEnum["SettingDeleted"] = 'setting/deleted'] = "SettingDeleted";
        EventEnum[EventEnum["IssueCreated"] = 'issue/created'] = "IssueCreated";
        EventEnum[EventEnum["IssueUpdated"] = 'issue/updated'] = "IssueUpdated";
        EventEnum[EventEnum["IssueDeleted"] = 'issue/deleted'] = "IssueDeleted";
        EventEnum[EventEnum["TaskCreated"] = 'task/created'] = "TaskCreated";
        EventEnum[EventEnum["TaskUpdated"] = 'task/updated'] = "TaskUpdated";
        EventEnum[EventEnum["TaskDeleted"] = 'task/deleted'] = "TaskDeleted";
        EventEnum[EventEnum["TaskCanceled"] = 'task/canceled'] = "TaskCanceled";
        EventEnum[EventEnum["TaskInProgress"] = 'task/in-progress'] = "TaskInProgress";
        EventEnum[EventEnum["TaskCompleted"] = 'task/completed'] = "TaskCompleted";
        EventEnum[EventEnum["TaskPercentageUpdated"] = 'task/percentage/updated'] = "TaskPercentageUpdated";
        EventEnum[EventEnum["ProductCreated"] = 'product/created'] = "ProductCreated";
        EventEnum[EventEnum["ProductUpdated"] = 'product/updated'] = "ProductUpdated";
        EventEnum[EventEnum["ProductDeleted"] = 'product/deleted'] = "ProductDeleted";
        EventEnum[EventEnum["ProductAutoRenewUpdated"] = 'product/auto-renew/updated'] = "ProductAutoRenewUpdated";
        EventEnum[EventEnum["ProductEnabled"] = 'product/enabled'] = "ProductEnabled";
        EventEnum[EventEnum["ProductDisabled"] = 'product/disabled'] = "ProductDisabled";
        EventEnum[EventEnum["ProductVersionCreated"] = 'product/version-created'] = "ProductVersionCreated";
        EventEnum[EventEnum["IpGroupCreated"] = 'ip-group/created'] = "IpGroupCreated";
        EventEnum[EventEnum["IpGroupUpdated"] = 'ip-group/updated'] = "IpGroupUpdated";
        EventEnum[EventEnum["IpGroupDeleted"] = 'ip-group/deleted'] = "IpGroupDeleted";
        EventEnum[EventEnum["IpCreated"] = 'ip/created'] = "IpCreated";
        EventEnum[EventEnum["IpUpdated"] = 'ip/updated'] = "IpUpdated";
        EventEnum[EventEnum["IpDeleted"] = 'ip/deleted'] = "IpDeleted";
        EventEnum[EventEnum["DomainNameCreated"] = 'domain-name/created'] = "DomainNameCreated";
        EventEnum[EventEnum["DomainNameUpdated"] = 'domain-name/updated'] = "DomainNameUpdated";
        EventEnum[EventEnum["DomainNameDeleted"] = 'domain-name/deleted'] = "DomainNameDeleted";
        EventEnum[EventEnum["DomainNameLocked"] = 'domain-name/locked'] = "DomainNameLocked";
        EventEnum[EventEnum["DomainNameUnlocked"] = 'domain-name/unlocked'] = "DomainNameUnlocked";
        EventEnum[EventEnum["DomainNameIdshieldActivated"] = 'domain-name/idshield-activated'] = "DomainNameIdshieldActivated";
        EventEnum[EventEnum["DomainNameIdshieldDeactivated"] = 'domain-name/idshield-deactivated'] = "DomainNameIdshieldDeactivated";
        EventEnum[EventEnum["DomainNameBundleAdded"] = 'domain-name/bundle-added'] = "DomainNameBundleAdded";
        EventEnum[EventEnum["DomainNameBundleRemoved"] = 'domain-name/bundle-removed'] = "DomainNameBundleRemoved";
        EventEnum[EventEnum["DomainNameRegistrantUpdated"] = 'domain-name/registrant-updated'] = "DomainNameRegistrantUpdated";
        EventEnum[EventEnum["DomainNameAdminUpdated"] = 'domain-name/admin-updated'] = "DomainNameAdminUpdated";
        EventEnum[EventEnum["DomainNameTechUpdated"] = 'domain-name/tech-updated'] = "DomainNameTechUpdated";
        EventEnum[EventEnum["DomainNameBillingUpdated"] = 'domain-name/billing-updated'] = "DomainNameBillingUpdated";
        EventEnum[EventEnum["DomainNameAdditionalUpdated"] = 'domain-name/additional-updated'] = "DomainNameAdditionalUpdated";
        EventEnum[EventEnum["ItemCreated"] = 'item/created'] = "ItemCreated";
        EventEnum[EventEnum["ItemUpdated"] = 'item/updated'] = "ItemUpdated";
        EventEnum[EventEnum["ItemDeleted"] = 'item/deleted'] = "ItemDeleted";
        EventEnum[EventEnum["ItemRenewed"] = 'item/renewed'] = "ItemRenewed";
        EventEnum[EventEnum["ItemUpgraded"] = 'item/upgraded'] = "ItemUpgraded";
        EventEnum[EventEnum["ItemDowngraded"] = 'item/downgraded'] = "ItemDowngraded";
        EventEnum[EventEnum["ItemIpAttached"] = 'item/ip-attached'] = "ItemIpAttached";
        EventEnum[EventEnum["ItemIpDetached"] = 'item/ip-detached'] = "ItemIpDetached";
        EventEnum[EventEnum["ItemDetachedFromOrder"] = 'item/detached-from-order'] = "ItemDetachedFromOrder";
        EventEnum[EventEnum["ItemPostponed"] = 'item/postponed'] = "ItemPostponed";
        EventEnum[EventEnum["ItemTransferredIn"] = 'item/transferred-in'] = "ItemTransferredIn";
        EventEnum[EventEnum["ItemCanceled"] = 'item/canceled'] = "ItemCanceled";
        EventEnum[EventEnum["ItemSuspended"] = 'item/suspended'] = "ItemSuspended";
        EventEnum[EventEnum["ItemUnsuspended"] = 'item/unsuspended'] = "ItemUnsuspended";
        EventEnum[EventEnum["ItemAffiliateAdded"] = 'item/affiliate/added'] = "ItemAffiliateAdded";
        EventEnum[EventEnum["ItemBundleAttached"] = 'item/bundle/attached'] = "ItemBundleAttached";
        EventEnum[EventEnum["ItemBundleDetached"] = 'item/bundle/detached'] = "ItemBundleDetached";
        EventEnum[EventEnum["ItemActivated"] = 'item/activated'] = "ItemActivated";
        EventEnum[EventEnum["ItemSetInactive"] = 'item/set-inactive'] = "ItemSetInactive";
        EventEnum[EventEnum["ItemProcessed"] = 'item/processed'] = "ItemProcessed";
        EventEnum[EventEnum["OrderPaid"] = 'order/paid'] = "OrderPaid";
        EventEnum[EventEnum["Test"] = 'test'] = "Test";
    })(EventEnum = TemplateDto.EventEnum || (TemplateDto.EventEnum = {}));
})(TemplateDto || (exports.TemplateDto = TemplateDto = {}));
