import localVarRequest from 'request';

export * from './acceptedNotificationMethods';
export * from './acceptedNotificationMethodsDto';
export * from './actionFieldDto';
export * from './addonDto';
export * from './addonOptionsDto';
export * from './affiliateData';
export * from './affiliateDto';
export * from './afnicAdditionalDataDto';
export * from './attachment';
export * from './calculatedPriceDto';
export * from './catAdditionalDataDto';
export * from './catParameterDataDto';
export * from './challengeParametersDataDto';
export * from './challengeQuestionAnswerDto';
export * from './checkAvailability200Response';
export * from './checkAvailabilitySockets200Response';
export * from './claimsTokenDataDto';
export * from './companyDto';
export * from './companyFindResponseDto';
export * from './companyRolesDto';
export * from './contactAdditionalDto';
export * from './couponDto';
export * from './couponProductsDto';
export * from './couponTypeDto';
export * from './create200Response';
export * from './create200Response1';
export * from './create200Response2';
export * from './create200Response3';
export * from './create200Response4';
export * from './create200Response5';
export * from './create200Response6';
export * from './create200Response7';
export * from './create201Response';
export * from './create201Response1';
export * from './create201Response2';
export * from './create201Response3';
export * from './create201Response4';
export * from './create201Response5';
export * from './create201Response6';
export * from './create201Response7';
export * from './currency';
export * from './currencyDto';
export * from './customAddonPricePolicies';
export * from './customAffiliates';
export * from './customPricePolicies';
export * from './deAdditionalDataDto';
export * from './defaultInvoiceContact';
export * from './domainAdditionalDto';
export * from './domainAvailabilityDto';
export * from './domainAvailabilityWebsocketsDto';
export * from './domainBundleDto';
export * from './domainCategoryDto';
export * from './domainCheckAvailabilityRequestDto';
export * from './domainContactDto';
export * from './domainNameDto';
export * from './domainPricesDto';
export * from './donutsPriceCategoryDataDto';
export * from './dynamicPriceDto';
export * from './dynamicPriceInfoDto';
export * from './emailPayloadDto';
export * from './errorResponse';
export * from './esAdditionalDataDto';
export * from './euBeAdditionalDataDto';
export * from './find200Response';
export * from './find200Response1';
export * from './find200Response10';
export * from './find200Response11';
export * from './find200Response12';
export * from './find200Response13';
export * from './find200Response14';
export * from './find200Response15';
export * from './find200Response16';
export * from './find200Response17';
export * from './find200Response18';
export * from './find200Response19';
export * from './find200Response2';
export * from './find200Response20';
export * from './find200Response21';
export * from './find200Response22';
export * from './find200Response3';
export * from './find200Response4';
export * from './find200Response5';
export * from './find200Response6';
export * from './find200Response7';
export * from './find200Response8';
export * from './find200Response9';
export * from './freeTldDto';
export * from './get200Response';
export * from './get200Response1';
export * from './get200Response2';
export * from './get200Response3';
export * from './getSettings200Response';
export * from './integration';
export * from './integrationDto';
export * from './integrationInfoResponseDto';
export * from './intendedUseParamsDataDto';
export * from './invoiceContactDto';
export * from './invoiceGet200Response';
export * from './ipDto';
export * from './ipGroupDto';
export * from './ipSettingsDto';
export * from './issueDto';
export * from './itAdditionalDataDto';
export * from './itemAddonDto';
export * from './itemAffiliateDto';
export * from './itemCurrency';
export * from './itemDto';
export * from './itemUpdateDto';
export * from './listActionDto';
export * from './loginResponseDto';
export * from './lvAdditionalDataDto';
export * from './menuItemDto';
export * from './multilangTextDto';
export * from './nameServerDto';
export * from './nlAdditionalDataDto';
export * from './orderDto';
export * from './paginatedResponse';
export * from './paymentDto';
export * from './paymentRedirectUrlResponseDto';
export * from './paymentSubscriptionDto';
export * from './persistentCart';
export * from './policy';
export * from './policyData';
export * from './policyDto';
export * from './premiumPriceCategoryDataDto';
export * from './priceDto';
export * from './pricePolicyDto';
export * from './pricesDto';
export * from './proAdditionalDataDto';
export * from './productAffiliateDto';
export * from './productCategoryDetails';
export * from './productCategoryDetailsDto';
export * from './productCategoryDto';
export * from './productCategoryTitle';
export * from './productDetails';
export * from './productDetailsDto';
export * from './productDto';
export * from './productInformationDto';
export * from './productTemplateDto';
export * from './proxyServiceDataDto';
export * from './pushPayloadDto';
export * from './registryContactsDto';
export * from './settingOptionsDto';
export * from './settings';
export * from './settingsDto';
export * from './smsPayloadDto';
export * from './sunriseDataDto';
export * from './tabDto';
export * from './taskDto';
export * from './templateData';
export * from './templateDto';
export * from './tldDto';
export * from './tldPolicyDto';
export * from './uKDirectDataDto';
export * from './ukAdditionalDataDto';
export * from './updateProductDto';
export * from './usAdditionalDataDto';
export * from './userAddonPricePolicyDto';
export * from './userBasketDto';
export * from './userDto';
export * from './userPricePolicyDto';
export * from './value';
export * from './xXXMemberDataDto';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AcceptedNotificationMethods } from './acceptedNotificationMethods';
import { AcceptedNotificationMethodsDto } from './acceptedNotificationMethodsDto';
import { ActionFieldDto } from './actionFieldDto';
import { AddonDto } from './addonDto';
import { AddonOptionsDto } from './addonOptionsDto';
import { AffiliateData } from './affiliateData';
import { AffiliateDto } from './affiliateDto';
import { AfnicAdditionalDataDto } from './afnicAdditionalDataDto';
import { Attachment } from './attachment';
import { CalculatedPriceDto } from './calculatedPriceDto';
import { CatAdditionalDataDto } from './catAdditionalDataDto';
import { CatParameterDataDto } from './catParameterDataDto';
import { ChallengeParametersDataDto } from './challengeParametersDataDto';
import { ChallengeQuestionAnswerDto } from './challengeQuestionAnswerDto';
import { CheckAvailability200Response } from './checkAvailability200Response';
import { CheckAvailabilitySockets200Response } from './checkAvailabilitySockets200Response';
import { ClaimsTokenDataDto } from './claimsTokenDataDto';
import { CompanyDto } from './companyDto';
import { CompanyFindResponseDto } from './companyFindResponseDto';
import { CompanyRolesDto } from './companyRolesDto';
import { ContactAdditionalDto } from './contactAdditionalDto';
import { CouponDto } from './couponDto';
import { CouponProductsDto } from './couponProductsDto';
import { CouponTypeDto } from './couponTypeDto';
import { Create200Response } from './create200Response';
import { Create200Response1 } from './create200Response1';
import { Create200Response2 } from './create200Response2';
import { Create200Response3 } from './create200Response3';
import { Create200Response4 } from './create200Response4';
import { Create200Response5 } from './create200Response5';
import { Create200Response6 } from './create200Response6';
import { Create200Response7 } from './create200Response7';
import { Create201Response } from './create201Response';
import { Create201Response1 } from './create201Response1';
import { Create201Response2 } from './create201Response2';
import { Create201Response3 } from './create201Response3';
import { Create201Response4 } from './create201Response4';
import { Create201Response5 } from './create201Response5';
import { Create201Response6 } from './create201Response6';
import { Create201Response7 } from './create201Response7';
import { Currency } from './currency';
import { CurrencyDto } from './currencyDto';
import { CustomAddonPricePolicies } from './customAddonPricePolicies';
import { CustomAffiliates } from './customAffiliates';
import { CustomPricePolicies } from './customPricePolicies';
import { DeAdditionalDataDto } from './deAdditionalDataDto';
import { DefaultInvoiceContact } from './defaultInvoiceContact';
import { DomainAdditionalDto } from './domainAdditionalDto';
import { DomainAvailabilityDto } from './domainAvailabilityDto';
import { DomainAvailabilityWebsocketsDto } from './domainAvailabilityWebsocketsDto';
import { DomainBundleDto } from './domainBundleDto';
import { DomainCategoryDto } from './domainCategoryDto';
import { DomainCheckAvailabilityRequestDto } from './domainCheckAvailabilityRequestDto';
import { DomainContactDto } from './domainContactDto';
import { DomainNameDto } from './domainNameDto';
import { DomainPricesDto } from './domainPricesDto';
import { DonutsPriceCategoryDataDto } from './donutsPriceCategoryDataDto';
import { DynamicPriceDto } from './dynamicPriceDto';
import { DynamicPriceInfoDto } from './dynamicPriceInfoDto';
import { EmailPayloadDto } from './emailPayloadDto';
import { ErrorResponse } from './errorResponse';
import { EsAdditionalDataDto } from './esAdditionalDataDto';
import { EuBeAdditionalDataDto } from './euBeAdditionalDataDto';
import { Find200Response } from './find200Response';
import { Find200Response1 } from './find200Response1';
import { Find200Response10 } from './find200Response10';
import { Find200Response11 } from './find200Response11';
import { Find200Response12 } from './find200Response12';
import { Find200Response13 } from './find200Response13';
import { Find200Response14 } from './find200Response14';
import { Find200Response15 } from './find200Response15';
import { Find200Response16 } from './find200Response16';
import { Find200Response17 } from './find200Response17';
import { Find200Response18 } from './find200Response18';
import { Find200Response19 } from './find200Response19';
import { Find200Response2 } from './find200Response2';
import { Find200Response20 } from './find200Response20';
import { Find200Response21 } from './find200Response21';
import { Find200Response22 } from './find200Response22';
import { Find200Response3 } from './find200Response3';
import { Find200Response4 } from './find200Response4';
import { Find200Response5 } from './find200Response5';
import { Find200Response6 } from './find200Response6';
import { Find200Response7 } from './find200Response7';
import { Find200Response8 } from './find200Response8';
import { Find200Response9 } from './find200Response9';
import { FreeTldDto } from './freeTldDto';
import { Get200Response } from './get200Response';
import { Get200Response1 } from './get200Response1';
import { Get200Response2 } from './get200Response2';
import { Get200Response3 } from './get200Response3';
import { GetSettings200Response } from './getSettings200Response';
import { Integration } from './integration';
import { IntegrationDto } from './integrationDto';
import { IntegrationInfoResponseDto } from './integrationInfoResponseDto';
import { IntendedUseParamsDataDto } from './intendedUseParamsDataDto';
import { InvoiceContactDto } from './invoiceContactDto';
import { InvoiceGet200Response } from './invoiceGet200Response';
import { IpDto } from './ipDto';
import { IpGroupDto } from './ipGroupDto';
import { IpSettingsDto } from './ipSettingsDto';
import { IssueDto } from './issueDto';
import { ItAdditionalDataDto } from './itAdditionalDataDto';
import { ItemAddonDto } from './itemAddonDto';
import { ItemAffiliateDto } from './itemAffiliateDto';
import { ItemCurrency } from './itemCurrency';
import { ItemDto } from './itemDto';
import { ItemUpdateDto } from './itemUpdateDto';
import { ListActionDto } from './listActionDto';
import { LoginResponseDto } from './loginResponseDto';
import { LvAdditionalDataDto } from './lvAdditionalDataDto';
import { MenuItemDto } from './menuItemDto';
import { MultilangTextDto } from './multilangTextDto';
import { NameServerDto } from './nameServerDto';
import { NlAdditionalDataDto } from './nlAdditionalDataDto';
import { OrderDto } from './orderDto';
import { PaginatedResponse } from './paginatedResponse';
import { PaymentDto } from './paymentDto';
import { PaymentRedirectUrlResponseDto } from './paymentRedirectUrlResponseDto';
import { PaymentSubscriptionDto } from './paymentSubscriptionDto';
import { PersistentCart } from './persistentCart';
import { Policy } from './policy';
import { PolicyData } from './policyData';
import { PolicyDto } from './policyDto';
import { PremiumPriceCategoryDataDto } from './premiumPriceCategoryDataDto';
import { PriceDto } from './priceDto';
import { PricePolicyDto } from './pricePolicyDto';
import { PricesDto } from './pricesDto';
import { ProAdditionalDataDto } from './proAdditionalDataDto';
import { ProductAffiliateDto } from './productAffiliateDto';
import { ProductCategoryDetails } from './productCategoryDetails';
import { ProductCategoryDetailsDto } from './productCategoryDetailsDto';
import { ProductCategoryDto } from './productCategoryDto';
import { ProductCategoryTitle } from './productCategoryTitle';
import { ProductDetails } from './productDetails';
import { ProductDetailsDto } from './productDetailsDto';
import { ProductDto } from './productDto';
import { ProductInformationDto } from './productInformationDto';
import { ProductTemplateDto } from './productTemplateDto';
import { ProxyServiceDataDto } from './proxyServiceDataDto';
import { PushPayloadDto } from './pushPayloadDto';
import { RegistryContactsDto } from './registryContactsDto';
import { SettingOptionsDto } from './settingOptionsDto';
import { Settings } from './settings';
import { SettingsDto } from './settingsDto';
import { SmsPayloadDto } from './smsPayloadDto';
import { SunriseDataDto } from './sunriseDataDto';
import { TabDto } from './tabDto';
import { TaskDto } from './taskDto';
import { TemplateData } from './templateData';
import { TemplateDto } from './templateDto';
import { TldDto } from './tldDto';
import { TldPolicyDto } from './tldPolicyDto';
import { UKDirectDataDto } from './uKDirectDataDto';
import { UkAdditionalDataDto } from './ukAdditionalDataDto';
import { UpdateProductDto } from './updateProductDto';
import { UsAdditionalDataDto } from './usAdditionalDataDto';
import { UserAddonPricePolicyDto } from './userAddonPricePolicyDto';
import { UserBasketDto } from './userBasketDto';
import { UserDto } from './userDto';
import { UserPricePolicyDto } from './userPricePolicyDto';
import { Value } from './value';
import { XXXMemberDataDto } from './xXXMemberDataDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ActionFieldDto.TypeEnum": ActionFieldDto.TypeEnum,
        "AddonDto.TypeEnum": AddonDto.TypeEnum,
        "AffiliateData.AffiliateTypeEnum": AffiliateData.AffiliateTypeEnum,
        "AffiliateData.StatusEnum": AffiliateData.StatusEnum,
        "AfnicAdditionalDataDto.BirthCcEnum": AfnicAdditionalDataDto.BirthCcEnum,
        "CatAdditionalDataDto.LanguageEnum": CatAdditionalDataDto.LanguageEnum,
        "CompanyDto.DefaultLanguageEnum": CompanyDto.DefaultLanguageEnum,
        "CompanyDto.ProductLanguagesEnum": CompanyDto.ProductLanguagesEnum,
        "CompanyRolesDto.RolesEnum": CompanyRolesDto.RolesEnum,
        "CouponProductsDto.AppliedOnDurationsEnum": CouponProductsDto.AppliedOnDurationsEnum,
        "CouponProductsDto.AppliedOnActionsEnum": CouponProductsDto.AppliedOnActionsEnum,
        "CouponTypeDto.TypeEnum": CouponTypeDto.TypeEnum,
        "CouponTypeDto.WhichToApplyEnum": CouponTypeDto.WhichToApplyEnum,
        "DeAdditionalDataDto.ContactTypeEnum": DeAdditionalDataDto.ContactTypeEnum,
        "DefaultInvoiceContact.CountryEnum": DefaultInvoiceContact.CountryEnum,
        "DomainBundleDto.RecordTypeEnum": DomainBundleDto.RecordTypeEnum,
        "DomainContactDto.CountryCodeEnum": DomainContactDto.CountryCodeEnum,
        "DomainContactDto.ContactTypeEnum": DomainContactDto.ContactTypeEnum,
        "DomainNameDto.DurationEnum": DomainNameDto.DurationEnum,
        "DonutsPriceCategoryDataDto.PriceCategoryEnum": DonutsPriceCategoryDataDto.PriceCategoryEnum,
        "EsAdditionalDataDto.IdentificationNumberEnum": EsAdditionalDataDto.IdentificationNumberEnum,
        "EsAdditionalDataDto.ContactTypeEnum": EsAdditionalDataDto.ContactTypeEnum,
        "EuBeAdditionalDataDto.LanguageEnum": EuBeAdditionalDataDto.LanguageEnum,
        "EuBeAdditionalDataDto.CountryOfCitizenshipEnum": EuBeAdditionalDataDto.CountryOfCitizenshipEnum,
        "FreeTldDto.DurationsEnum": FreeTldDto.DurationsEnum,
        "Integration.TypeEnum": Integration.TypeEnum,
        "Integration.ListenEventsEnum": Integration.ListenEventsEnum,
        "Integration.ProductCategoryEnum": Integration.ProductCategoryEnum,
        "IntegrationDto.TypeEnum": IntegrationDto.TypeEnum,
        "IntegrationDto.ListenEventsEnum": IntegrationDto.ListenEventsEnum,
        "IntegrationDto.ProductCategoryEnum": IntegrationDto.ProductCategoryEnum,
        "InvoiceContactDto.CountryEnum": InvoiceContactDto.CountryEnum,
        "IpDto.TypeEnum": IpDto.TypeEnum,
        "IssueDto.CategoryEnum": IssueDto.CategoryEnum,
        "IssueDto.PriorityEnum": IssueDto.PriorityEnum,
        "ItAdditionalDataDto.EntityTypeEnum": ItAdditionalDataDto.EntityTypeEnum,
        "ItemAffiliateDto.AffiliateTypeEnum": ItemAffiliateDto.AffiliateTypeEnum,
        "ItemAffiliateDto.StatusEnum": ItemAffiliateDto.StatusEnum,
        "ItemDto.TypeEnum": ItemDto.TypeEnum,
        "ItemDto.ActionEnum": ItemDto.ActionEnum,
        "ItemDto.StatusEnum": ItemDto.StatusEnum,
        "ItemDto.DurationEnum": ItemDto.DurationEnum,
        "MultilangTextDto.LanguageEnum": MultilangTextDto.LanguageEnum,
        "NlAdditionalDataDto.LegalTypeEnum": NlAdditionalDataDto.LegalTypeEnum,
        "OrderDto.OrderStatusEnum": OrderDto.OrderStatusEnum,
        "OrderDto.OrderInvoiceStatusEnum": OrderDto.OrderInvoiceStatusEnum,
        "PaymentDto.PaymentTypeEnum": PaymentDto.PaymentTypeEnum,
        "PaymentDto.TransactionTypeEnum": PaymentDto.TransactionTypeEnum,
        "PaymentDto.StatusEnum": PaymentDto.StatusEnum,
        "PremiumPriceCategoryDataDto.PriceCategoryEnum": PremiumPriceCategoryDataDto.PriceCategoryEnum,
        "PriceDto.DurationEnum": PriceDto.DurationEnum,
        "ProductAffiliateDto.DurationsEnum": ProductAffiliateDto.DurationsEnum,
        "ProductAffiliateDto.TypeEnum": ProductAffiliateDto.TypeEnum,
        "ProductAffiliateDto.ActionEnum": ProductAffiliateDto.ActionEnum,
        "ProductCategoryTitle.LanguageEnum": ProductCategoryTitle.LanguageEnum,
        "ProductDto.InvoiceTypeEnum": ProductDto.InvoiceTypeEnum,
        "ProductTemplateDto.ActionEnum": ProductTemplateDto.ActionEnum,
        "TaskDto.ActionEnum": TaskDto.ActionEnum,
        "TaskDto.StatusEnum": TaskDto.StatusEnum,
        "TaskDto.IntegrationHandlerEnum": TaskDto.IntegrationHandlerEnum,
        "TemplateDto.NotificationTypeEnum": TemplateDto.NotificationTypeEnum,
        "TemplateDto.EventEnum": TemplateDto.EventEnum,
        "TldDto.RegistrantContactCountryPresenceEnum": TldDto.RegistrantContactCountryPresenceEnum,
        "TldDto.AdminContactCountryPresenceEnum": TldDto.AdminContactCountryPresenceEnum,
        "TldDto.TechContactCountryPresenceEnum": TldDto.TechContactCountryPresenceEnum,
        "TldDto.BillingContactCountryPresenceEnum": TldDto.BillingContactCountryPresenceEnum,
        "TldDto.RegistrationPeriodAfterTransferEnum": TldDto.RegistrationPeriodAfterTransferEnum,
        "TldDto.SupportedDurationsEnum": TldDto.SupportedDurationsEnum,
        "TldDto.DomainAdditionalDataEnum": TldDto.DomainAdditionalDataEnum,
        "TldDto.ContactAdditionalDataEnum": TldDto.ContactAdditionalDataEnum,
        "UkAdditionalDataDto.RegistrantTypeEnum": UkAdditionalDataDto.RegistrantTypeEnum,
        "UpdateProductDto.InvoiceTypeEnum": UpdateProductDto.InvoiceTypeEnum,
        "UsAdditionalDataDto.AppPurposeEnum": UsAdditionalDataDto.AppPurposeEnum,
        "UsAdditionalDataDto.CategoryEnum": UsAdditionalDataDto.CategoryEnum,
        "UserDto.DefaultLanguageEnum": UserDto.DefaultLanguageEnum,
        "UserDto.InvoiceIntervalEnum": UserDto.InvoiceIntervalEnum,
}

let typeMap: {[index: string]: any} = {
    "AcceptedNotificationMethods": AcceptedNotificationMethods,
    "AcceptedNotificationMethodsDto": AcceptedNotificationMethodsDto,
    "ActionFieldDto": ActionFieldDto,
    "AddonDto": AddonDto,
    "AddonOptionsDto": AddonOptionsDto,
    "AffiliateData": AffiliateData,
    "AffiliateDto": AffiliateDto,
    "AfnicAdditionalDataDto": AfnicAdditionalDataDto,
    "Attachment": Attachment,
    "CalculatedPriceDto": CalculatedPriceDto,
    "CatAdditionalDataDto": CatAdditionalDataDto,
    "CatParameterDataDto": CatParameterDataDto,
    "ChallengeParametersDataDto": ChallengeParametersDataDto,
    "ChallengeQuestionAnswerDto": ChallengeQuestionAnswerDto,
    "CheckAvailability200Response": CheckAvailability200Response,
    "CheckAvailabilitySockets200Response": CheckAvailabilitySockets200Response,
    "ClaimsTokenDataDto": ClaimsTokenDataDto,
    "CompanyDto": CompanyDto,
    "CompanyFindResponseDto": CompanyFindResponseDto,
    "CompanyRolesDto": CompanyRolesDto,
    "ContactAdditionalDto": ContactAdditionalDto,
    "CouponDto": CouponDto,
    "CouponProductsDto": CouponProductsDto,
    "CouponTypeDto": CouponTypeDto,
    "Create200Response": Create200Response,
    "Create200Response1": Create200Response1,
    "Create200Response2": Create200Response2,
    "Create200Response3": Create200Response3,
    "Create200Response4": Create200Response4,
    "Create200Response5": Create200Response5,
    "Create200Response6": Create200Response6,
    "Create200Response7": Create200Response7,
    "Create201Response": Create201Response,
    "Create201Response1": Create201Response1,
    "Create201Response2": Create201Response2,
    "Create201Response3": Create201Response3,
    "Create201Response4": Create201Response4,
    "Create201Response5": Create201Response5,
    "Create201Response6": Create201Response6,
    "Create201Response7": Create201Response7,
    "Currency": Currency,
    "CurrencyDto": CurrencyDto,
    "CustomAddonPricePolicies": CustomAddonPricePolicies,
    "CustomAffiliates": CustomAffiliates,
    "CustomPricePolicies": CustomPricePolicies,
    "DeAdditionalDataDto": DeAdditionalDataDto,
    "DefaultInvoiceContact": DefaultInvoiceContact,
    "DomainAdditionalDto": DomainAdditionalDto,
    "DomainAvailabilityDto": DomainAvailabilityDto,
    "DomainAvailabilityWebsocketsDto": DomainAvailabilityWebsocketsDto,
    "DomainBundleDto": DomainBundleDto,
    "DomainCategoryDto": DomainCategoryDto,
    "DomainCheckAvailabilityRequestDto": DomainCheckAvailabilityRequestDto,
    "DomainContactDto": DomainContactDto,
    "DomainNameDto": DomainNameDto,
    "DomainPricesDto": DomainPricesDto,
    "DonutsPriceCategoryDataDto": DonutsPriceCategoryDataDto,
    "DynamicPriceDto": DynamicPriceDto,
    "DynamicPriceInfoDto": DynamicPriceInfoDto,
    "EmailPayloadDto": EmailPayloadDto,
    "ErrorResponse": ErrorResponse,
    "EsAdditionalDataDto": EsAdditionalDataDto,
    "EuBeAdditionalDataDto": EuBeAdditionalDataDto,
    "Find200Response": Find200Response,
    "Find200Response1": Find200Response1,
    "Find200Response10": Find200Response10,
    "Find200Response11": Find200Response11,
    "Find200Response12": Find200Response12,
    "Find200Response13": Find200Response13,
    "Find200Response14": Find200Response14,
    "Find200Response15": Find200Response15,
    "Find200Response16": Find200Response16,
    "Find200Response17": Find200Response17,
    "Find200Response18": Find200Response18,
    "Find200Response19": Find200Response19,
    "Find200Response2": Find200Response2,
    "Find200Response20": Find200Response20,
    "Find200Response21": Find200Response21,
    "Find200Response22": Find200Response22,
    "Find200Response3": Find200Response3,
    "Find200Response4": Find200Response4,
    "Find200Response5": Find200Response5,
    "Find200Response6": Find200Response6,
    "Find200Response7": Find200Response7,
    "Find200Response8": Find200Response8,
    "Find200Response9": Find200Response9,
    "FreeTldDto": FreeTldDto,
    "Get200Response": Get200Response,
    "Get200Response1": Get200Response1,
    "Get200Response2": Get200Response2,
    "Get200Response3": Get200Response3,
    "GetSettings200Response": GetSettings200Response,
    "Integration": Integration,
    "IntegrationDto": IntegrationDto,
    "IntegrationInfoResponseDto": IntegrationInfoResponseDto,
    "IntendedUseParamsDataDto": IntendedUseParamsDataDto,
    "InvoiceContactDto": InvoiceContactDto,
    "InvoiceGet200Response": InvoiceGet200Response,
    "IpDto": IpDto,
    "IpGroupDto": IpGroupDto,
    "IpSettingsDto": IpSettingsDto,
    "IssueDto": IssueDto,
    "ItAdditionalDataDto": ItAdditionalDataDto,
    "ItemAddonDto": ItemAddonDto,
    "ItemAffiliateDto": ItemAffiliateDto,
    "ItemCurrency": ItemCurrency,
    "ItemDto": ItemDto,
    "ItemUpdateDto": ItemUpdateDto,
    "ListActionDto": ListActionDto,
    "LoginResponseDto": LoginResponseDto,
    "LvAdditionalDataDto": LvAdditionalDataDto,
    "MenuItemDto": MenuItemDto,
    "MultilangTextDto": MultilangTextDto,
    "NameServerDto": NameServerDto,
    "NlAdditionalDataDto": NlAdditionalDataDto,
    "OrderDto": OrderDto,
    "PaginatedResponse": PaginatedResponse,
    "PaymentDto": PaymentDto,
    "PaymentRedirectUrlResponseDto": PaymentRedirectUrlResponseDto,
    "PaymentSubscriptionDto": PaymentSubscriptionDto,
    "PersistentCart": PersistentCart,
    "Policy": Policy,
    "PolicyData": PolicyData,
    "PolicyDto": PolicyDto,
    "PremiumPriceCategoryDataDto": PremiumPriceCategoryDataDto,
    "PriceDto": PriceDto,
    "PricePolicyDto": PricePolicyDto,
    "PricesDto": PricesDto,
    "ProAdditionalDataDto": ProAdditionalDataDto,
    "ProductAffiliateDto": ProductAffiliateDto,
    "ProductCategoryDetails": ProductCategoryDetails,
    "ProductCategoryDetailsDto": ProductCategoryDetailsDto,
    "ProductCategoryDto": ProductCategoryDto,
    "ProductCategoryTitle": ProductCategoryTitle,
    "ProductDetails": ProductDetails,
    "ProductDetailsDto": ProductDetailsDto,
    "ProductDto": ProductDto,
    "ProductInformationDto": ProductInformationDto,
    "ProductTemplateDto": ProductTemplateDto,
    "ProxyServiceDataDto": ProxyServiceDataDto,
    "PushPayloadDto": PushPayloadDto,
    "RegistryContactsDto": RegistryContactsDto,
    "SettingOptionsDto": SettingOptionsDto,
    "Settings": Settings,
    "SettingsDto": SettingsDto,
    "SmsPayloadDto": SmsPayloadDto,
    "SunriseDataDto": SunriseDataDto,
    "TabDto": TabDto,
    "TaskDto": TaskDto,
    "TemplateData": TemplateData,
    "TemplateDto": TemplateDto,
    "TldDto": TldDto,
    "TldPolicyDto": TldPolicyDto,
    "UKDirectDataDto": UKDirectDataDto,
    "UkAdditionalDataDto": UkAdditionalDataDto,
    "UpdateProductDto": UpdateProductDto,
    "UsAdditionalDataDto": UsAdditionalDataDto,
    "UserAddonPricePolicyDto": UserAddonPricePolicyDto,
    "UserBasketDto": UserBasketDto,
    "UserDto": UserDto,
    "UserPricePolicyDto": UserPricePolicyDto,
    "Value": Value,
    "XXXMemberDataDto": XXXMemberDataDto,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
