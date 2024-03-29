import localVarRequest from 'request';

export * from './acceptedNotificationMethods';
export * from './acceptedNotificationMethodsDto';
export * from './actionFieldDto';
export * from './addonDto';
export * from './addonFind200Response';
export * from './addonOptionsDto';
export * from './affiliateCreate200Response';
export * from './affiliateData';
export * from './affiliateDto';
export * from './affiliateFind200Response';
export * from './afnicAdditionalDataDto';
export * from './attachment';
export * from './calculatedPriceDto';
export * from './catAdditionalDataDto';
export * from './catParameterDataDto';
export * from './challengeParametersDataDto';
export * from './challengeQuestionAnswerDto';
export * from './claimsTokenDataDto';
export * from './companyCreate200Response';
export * from './companyDto';
export * from './companyFind200Response';
export * from './companyFindResponseDto';
export * from './companyRolesDto';
export * from './contactAdditionalDto';
export * from './couponDto';
export * from './couponFind200Response';
export * from './couponProductsDto';
export * from './couponTypeDto';
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
export * from './domainCategoryCreate201Response';
export * from './domainCategoryDto';
export * from './domainCategoryFind200Response';
export * from './domainCheckAvailabilityRequestDto';
export * from './domainContactCreate200Response';
export * from './domainContactDto';
export * from './domainContactFind200Response';
export * from './domainNameCheckAvailability200Response';
export * from './domainNameCheckAvailabilitySockets200Response';
export * from './domainNameDto';
export * from './domainNameFind200Response';
export * from './domainNameGet200Response';
export * from './domainPricesDto';
export * from './donutsPriceCategoryDataDto';
export * from './dynamicPriceDto';
export * from './dynamicPriceInfoDto';
export * from './emailPayloadDto';
export * from './errorResponse';
export * from './esAdditionalDataDto';
export * from './euBeAdditionalDataDto';
export * from './freeTldDto';
export * from './integration';
export * from './integrationCreate201Response';
export * from './integrationDto';
export * from './integrationFind200Response';
export * from './integrationInfoResponseDto';
export * from './intendedUseParamsDataDto';
export * from './invoiceContactCreate200Response';
export * from './invoiceContactDto';
export * from './invoiceContactFind200Response';
export * from './invoiceGet200Response';
export * from './invoicesFind200Response';
export * from './ipDto';
export * from './ipGroupDto';
export * from './ipGroupsCreate200Response';
export * from './ipGroupsFind200Response';
export * from './ipSettingsDto';
export * from './ipsFind200Response';
export * from './issueCreate201Response';
export * from './issueDto';
export * from './issueFind200Response';
export * from './itAdditionalDataDto';
export * from './itemAddonDto';
export * from './itemAffiliateDto';
export * from './itemCurrency';
export * from './itemDto';
export * from './itemFind200Response';
export * from './itemGet200Response';
export * from './itemUpdateDto';
export * from './listActionDto';
export * from './loginResponseDto';
export * from './lvAdditionalDataDto';
export * from './makePayment200Response';
export * from './makePolicy200Response';
export * from './menuItemDto';
export * from './multilangTextDto';
export * from './nameServerDto';
export * from './nlAdditionalDataDto';
export * from './orderCreate201Response';
export * from './orderDto';
export * from './orderFind200Response';
export * from './paginatedResponse';
export * from './paymentDto';
export * from './paymentFind200Response';
export * from './paymentGet200Response';
export * from './paymentRedirectUrlResponseDto';
export * from './paymentSubscriptionDto';
export * from './persistentCart';
export * from './policy';
export * from './policyData';
export * from './policyDto';
export * from './policyFind200Response';
export * from './premiumPriceCategoryDataDto';
export * from './priceDto';
export * from './pricePolicyDto';
export * from './pricesDto';
export * from './proAdditionalDataDto';
export * from './productAffiliateDto';
export * from './productCategoryCreate201Response';
export * from './productCategoryDetails';
export * from './productCategoryDetailsDto';
export * from './productCategoryDto';
export * from './productCategoryFind200Response';
export * from './productCategoryTitle';
export * from './productCreate201Response';
export * from './productDetails';
export * from './productDetailsDto';
export * from './productDto';
export * from './productFind200Response';
export * from './productInformationDto';
export * from './productTemplateDto';
export * from './proxyServiceDataDto';
export * from './pushPayloadDto';
export * from './registryContactsDto';
export * from './settingOptionsDto';
export * from './settings';
export * from './settingsCreate201Response';
export * from './settingsDto';
export * from './settingsFind200Response';
export * from './smsPayloadDto';
export * from './sunriseDataDto';
export * from './tabDto';
export * from './taskDto';
export * from './templateCreate201Response';
export * from './templateData';
export * from './templateDto';
export * from './templateFind200Response';
export * from './tldCreate200Response';
export * from './tldDto';
export * from './tldFind200Response';
export * from './tldPolicyDto';
export * from './uKDirectDataDto';
export * from './ukAdditionalDataDto';
export * from './updateProductDto';
export * from './usAdditionalDataDto';
export * from './userAddonPricePolicyDto';
export * from './userBasketDto';
export * from './userDto';
export * from './userFind200Response';
export * from './userGet200Response';
export * from './userGetSettings200Response';
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
import { AddonFind200Response } from './addonFind200Response';
import { AddonOptionsDto } from './addonOptionsDto';
import { AffiliateCreate200Response } from './affiliateCreate200Response';
import { AffiliateData } from './affiliateData';
import { AffiliateDto } from './affiliateDto';
import { AffiliateFind200Response } from './affiliateFind200Response';
import { AfnicAdditionalDataDto } from './afnicAdditionalDataDto';
import { Attachment } from './attachment';
import { CalculatedPriceDto } from './calculatedPriceDto';
import { CatAdditionalDataDto } from './catAdditionalDataDto';
import { CatParameterDataDto } from './catParameterDataDto';
import { ChallengeParametersDataDto } from './challengeParametersDataDto';
import { ChallengeQuestionAnswerDto } from './challengeQuestionAnswerDto';
import { ClaimsTokenDataDto } from './claimsTokenDataDto';
import { CompanyCreate200Response } from './companyCreate200Response';
import { CompanyDto } from './companyDto';
import { CompanyFind200Response } from './companyFind200Response';
import { CompanyFindResponseDto } from './companyFindResponseDto';
import { CompanyRolesDto } from './companyRolesDto';
import { ContactAdditionalDto } from './contactAdditionalDto';
import { CouponDto } from './couponDto';
import { CouponFind200Response } from './couponFind200Response';
import { CouponProductsDto } from './couponProductsDto';
import { CouponTypeDto } from './couponTypeDto';
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
import { DomainCategoryCreate201Response } from './domainCategoryCreate201Response';
import { DomainCategoryDto } from './domainCategoryDto';
import { DomainCategoryFind200Response } from './domainCategoryFind200Response';
import { DomainCheckAvailabilityRequestDto } from './domainCheckAvailabilityRequestDto';
import { DomainContactCreate200Response } from './domainContactCreate200Response';
import { DomainContactDto } from './domainContactDto';
import { DomainContactFind200Response } from './domainContactFind200Response';
import { DomainNameCheckAvailability200Response } from './domainNameCheckAvailability200Response';
import { DomainNameCheckAvailabilitySockets200Response } from './domainNameCheckAvailabilitySockets200Response';
import { DomainNameDto } from './domainNameDto';
import { DomainNameFind200Response } from './domainNameFind200Response';
import { DomainNameGet200Response } from './domainNameGet200Response';
import { DomainPricesDto } from './domainPricesDto';
import { DonutsPriceCategoryDataDto } from './donutsPriceCategoryDataDto';
import { DynamicPriceDto } from './dynamicPriceDto';
import { DynamicPriceInfoDto } from './dynamicPriceInfoDto';
import { EmailPayloadDto } from './emailPayloadDto';
import { ErrorResponse } from './errorResponse';
import { EsAdditionalDataDto } from './esAdditionalDataDto';
import { EuBeAdditionalDataDto } from './euBeAdditionalDataDto';
import { FreeTldDto } from './freeTldDto';
import { Integration } from './integration';
import { IntegrationCreate201Response } from './integrationCreate201Response';
import { IntegrationDto } from './integrationDto';
import { IntegrationFind200Response } from './integrationFind200Response';
import { IntegrationInfoResponseDto } from './integrationInfoResponseDto';
import { IntendedUseParamsDataDto } from './intendedUseParamsDataDto';
import { InvoiceContactCreate200Response } from './invoiceContactCreate200Response';
import { InvoiceContactDto } from './invoiceContactDto';
import { InvoiceContactFind200Response } from './invoiceContactFind200Response';
import { InvoiceGet200Response } from './invoiceGet200Response';
import { InvoicesFind200Response } from './invoicesFind200Response';
import { IpDto } from './ipDto';
import { IpGroupDto } from './ipGroupDto';
import { IpGroupsCreate200Response } from './ipGroupsCreate200Response';
import { IpGroupsFind200Response } from './ipGroupsFind200Response';
import { IpSettingsDto } from './ipSettingsDto';
import { IpsFind200Response } from './ipsFind200Response';
import { IssueCreate201Response } from './issueCreate201Response';
import { IssueDto } from './issueDto';
import { IssueFind200Response } from './issueFind200Response';
import { ItAdditionalDataDto } from './itAdditionalDataDto';
import { ItemAddonDto } from './itemAddonDto';
import { ItemAffiliateDto } from './itemAffiliateDto';
import { ItemCurrency } from './itemCurrency';
import { ItemDto } from './itemDto';
import { ItemFind200Response } from './itemFind200Response';
import { ItemGet200Response } from './itemGet200Response';
import { ItemUpdateDto } from './itemUpdateDto';
import { ListActionDto } from './listActionDto';
import { LoginResponseDto } from './loginResponseDto';
import { LvAdditionalDataDto } from './lvAdditionalDataDto';
import { MakePayment200Response } from './makePayment200Response';
import { MakePolicy200Response } from './makePolicy200Response';
import { MenuItemDto } from './menuItemDto';
import { MultilangTextDto } from './multilangTextDto';
import { NameServerDto } from './nameServerDto';
import { NlAdditionalDataDto } from './nlAdditionalDataDto';
import { OrderCreate201Response } from './orderCreate201Response';
import { OrderDto } from './orderDto';
import { OrderFind200Response } from './orderFind200Response';
import { PaginatedResponse } from './paginatedResponse';
import { PaymentDto } from './paymentDto';
import { PaymentFind200Response } from './paymentFind200Response';
import { PaymentGet200Response } from './paymentGet200Response';
import { PaymentRedirectUrlResponseDto } from './paymentRedirectUrlResponseDto';
import { PaymentSubscriptionDto } from './paymentSubscriptionDto';
import { PersistentCart } from './persistentCart';
import { Policy } from './policy';
import { PolicyData } from './policyData';
import { PolicyDto } from './policyDto';
import { PolicyFind200Response } from './policyFind200Response';
import { PremiumPriceCategoryDataDto } from './premiumPriceCategoryDataDto';
import { PriceDto } from './priceDto';
import { PricePolicyDto } from './pricePolicyDto';
import { PricesDto } from './pricesDto';
import { ProAdditionalDataDto } from './proAdditionalDataDto';
import { ProductAffiliateDto } from './productAffiliateDto';
import { ProductCategoryCreate201Response } from './productCategoryCreate201Response';
import { ProductCategoryDetails } from './productCategoryDetails';
import { ProductCategoryDetailsDto } from './productCategoryDetailsDto';
import { ProductCategoryDto } from './productCategoryDto';
import { ProductCategoryFind200Response } from './productCategoryFind200Response';
import { ProductCategoryTitle } from './productCategoryTitle';
import { ProductCreate201Response } from './productCreate201Response';
import { ProductDetails } from './productDetails';
import { ProductDetailsDto } from './productDetailsDto';
import { ProductDto } from './productDto';
import { ProductFind200Response } from './productFind200Response';
import { ProductInformationDto } from './productInformationDto';
import { ProductTemplateDto } from './productTemplateDto';
import { ProxyServiceDataDto } from './proxyServiceDataDto';
import { PushPayloadDto } from './pushPayloadDto';
import { RegistryContactsDto } from './registryContactsDto';
import { SettingOptionsDto } from './settingOptionsDto';
import { Settings } from './settings';
import { SettingsCreate201Response } from './settingsCreate201Response';
import { SettingsDto } from './settingsDto';
import { SettingsFind200Response } from './settingsFind200Response';
import { SmsPayloadDto } from './smsPayloadDto';
import { SunriseDataDto } from './sunriseDataDto';
import { TabDto } from './tabDto';
import { TaskDto } from './taskDto';
import { TemplateCreate201Response } from './templateCreate201Response';
import { TemplateData } from './templateData';
import { TemplateDto } from './templateDto';
import { TemplateFind200Response } from './templateFind200Response';
import { TldCreate200Response } from './tldCreate200Response';
import { TldDto } from './tldDto';
import { TldFind200Response } from './tldFind200Response';
import { TldPolicyDto } from './tldPolicyDto';
import { UKDirectDataDto } from './uKDirectDataDto';
import { UkAdditionalDataDto } from './ukAdditionalDataDto';
import { UpdateProductDto } from './updateProductDto';
import { UsAdditionalDataDto } from './usAdditionalDataDto';
import { UserAddonPricePolicyDto } from './userAddonPricePolicyDto';
import { UserBasketDto } from './userBasketDto';
import { UserDto } from './userDto';
import { UserFind200Response } from './userFind200Response';
import { UserGet200Response } from './userGet200Response';
import { UserGetSettings200Response } from './userGetSettings200Response';
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
    "AddonFind200Response": AddonFind200Response,
    "AddonOptionsDto": AddonOptionsDto,
    "AffiliateCreate200Response": AffiliateCreate200Response,
    "AffiliateData": AffiliateData,
    "AffiliateDto": AffiliateDto,
    "AffiliateFind200Response": AffiliateFind200Response,
    "AfnicAdditionalDataDto": AfnicAdditionalDataDto,
    "Attachment": Attachment,
    "CalculatedPriceDto": CalculatedPriceDto,
    "CatAdditionalDataDto": CatAdditionalDataDto,
    "CatParameterDataDto": CatParameterDataDto,
    "ChallengeParametersDataDto": ChallengeParametersDataDto,
    "ChallengeQuestionAnswerDto": ChallengeQuestionAnswerDto,
    "ClaimsTokenDataDto": ClaimsTokenDataDto,
    "CompanyCreate200Response": CompanyCreate200Response,
    "CompanyDto": CompanyDto,
    "CompanyFind200Response": CompanyFind200Response,
    "CompanyFindResponseDto": CompanyFindResponseDto,
    "CompanyRolesDto": CompanyRolesDto,
    "ContactAdditionalDto": ContactAdditionalDto,
    "CouponDto": CouponDto,
    "CouponFind200Response": CouponFind200Response,
    "CouponProductsDto": CouponProductsDto,
    "CouponTypeDto": CouponTypeDto,
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
    "DomainCategoryCreate201Response": DomainCategoryCreate201Response,
    "DomainCategoryDto": DomainCategoryDto,
    "DomainCategoryFind200Response": DomainCategoryFind200Response,
    "DomainCheckAvailabilityRequestDto": DomainCheckAvailabilityRequestDto,
    "DomainContactCreate200Response": DomainContactCreate200Response,
    "DomainContactDto": DomainContactDto,
    "DomainContactFind200Response": DomainContactFind200Response,
    "DomainNameCheckAvailability200Response": DomainNameCheckAvailability200Response,
    "DomainNameCheckAvailabilitySockets200Response": DomainNameCheckAvailabilitySockets200Response,
    "DomainNameDto": DomainNameDto,
    "DomainNameFind200Response": DomainNameFind200Response,
    "DomainNameGet200Response": DomainNameGet200Response,
    "DomainPricesDto": DomainPricesDto,
    "DonutsPriceCategoryDataDto": DonutsPriceCategoryDataDto,
    "DynamicPriceDto": DynamicPriceDto,
    "DynamicPriceInfoDto": DynamicPriceInfoDto,
    "EmailPayloadDto": EmailPayloadDto,
    "ErrorResponse": ErrorResponse,
    "EsAdditionalDataDto": EsAdditionalDataDto,
    "EuBeAdditionalDataDto": EuBeAdditionalDataDto,
    "FreeTldDto": FreeTldDto,
    "Integration": Integration,
    "IntegrationCreate201Response": IntegrationCreate201Response,
    "IntegrationDto": IntegrationDto,
    "IntegrationFind200Response": IntegrationFind200Response,
    "IntegrationInfoResponseDto": IntegrationInfoResponseDto,
    "IntendedUseParamsDataDto": IntendedUseParamsDataDto,
    "InvoiceContactCreate200Response": InvoiceContactCreate200Response,
    "InvoiceContactDto": InvoiceContactDto,
    "InvoiceContactFind200Response": InvoiceContactFind200Response,
    "InvoiceGet200Response": InvoiceGet200Response,
    "InvoicesFind200Response": InvoicesFind200Response,
    "IpDto": IpDto,
    "IpGroupDto": IpGroupDto,
    "IpGroupsCreate200Response": IpGroupsCreate200Response,
    "IpGroupsFind200Response": IpGroupsFind200Response,
    "IpSettingsDto": IpSettingsDto,
    "IpsFind200Response": IpsFind200Response,
    "IssueCreate201Response": IssueCreate201Response,
    "IssueDto": IssueDto,
    "IssueFind200Response": IssueFind200Response,
    "ItAdditionalDataDto": ItAdditionalDataDto,
    "ItemAddonDto": ItemAddonDto,
    "ItemAffiliateDto": ItemAffiliateDto,
    "ItemCurrency": ItemCurrency,
    "ItemDto": ItemDto,
    "ItemFind200Response": ItemFind200Response,
    "ItemGet200Response": ItemGet200Response,
    "ItemUpdateDto": ItemUpdateDto,
    "ListActionDto": ListActionDto,
    "LoginResponseDto": LoginResponseDto,
    "LvAdditionalDataDto": LvAdditionalDataDto,
    "MakePayment200Response": MakePayment200Response,
    "MakePolicy200Response": MakePolicy200Response,
    "MenuItemDto": MenuItemDto,
    "MultilangTextDto": MultilangTextDto,
    "NameServerDto": NameServerDto,
    "NlAdditionalDataDto": NlAdditionalDataDto,
    "OrderCreate201Response": OrderCreate201Response,
    "OrderDto": OrderDto,
    "OrderFind200Response": OrderFind200Response,
    "PaginatedResponse": PaginatedResponse,
    "PaymentDto": PaymentDto,
    "PaymentFind200Response": PaymentFind200Response,
    "PaymentGet200Response": PaymentGet200Response,
    "PaymentRedirectUrlResponseDto": PaymentRedirectUrlResponseDto,
    "PaymentSubscriptionDto": PaymentSubscriptionDto,
    "PersistentCart": PersistentCart,
    "Policy": Policy,
    "PolicyData": PolicyData,
    "PolicyDto": PolicyDto,
    "PolicyFind200Response": PolicyFind200Response,
    "PremiumPriceCategoryDataDto": PremiumPriceCategoryDataDto,
    "PriceDto": PriceDto,
    "PricePolicyDto": PricePolicyDto,
    "PricesDto": PricesDto,
    "ProAdditionalDataDto": ProAdditionalDataDto,
    "ProductAffiliateDto": ProductAffiliateDto,
    "ProductCategoryCreate201Response": ProductCategoryCreate201Response,
    "ProductCategoryDetails": ProductCategoryDetails,
    "ProductCategoryDetailsDto": ProductCategoryDetailsDto,
    "ProductCategoryDto": ProductCategoryDto,
    "ProductCategoryFind200Response": ProductCategoryFind200Response,
    "ProductCategoryTitle": ProductCategoryTitle,
    "ProductCreate201Response": ProductCreate201Response,
    "ProductDetails": ProductDetails,
    "ProductDetailsDto": ProductDetailsDto,
    "ProductDto": ProductDto,
    "ProductFind200Response": ProductFind200Response,
    "ProductInformationDto": ProductInformationDto,
    "ProductTemplateDto": ProductTemplateDto,
    "ProxyServiceDataDto": ProxyServiceDataDto,
    "PushPayloadDto": PushPayloadDto,
    "RegistryContactsDto": RegistryContactsDto,
    "SettingOptionsDto": SettingOptionsDto,
    "Settings": Settings,
    "SettingsCreate201Response": SettingsCreate201Response,
    "SettingsDto": SettingsDto,
    "SettingsFind200Response": SettingsFind200Response,
    "SmsPayloadDto": SmsPayloadDto,
    "SunriseDataDto": SunriseDataDto,
    "TabDto": TabDto,
    "TaskDto": TaskDto,
    "TemplateCreate201Response": TemplateCreate201Response,
    "TemplateData": TemplateData,
    "TemplateDto": TemplateDto,
    "TemplateFind200Response": TemplateFind200Response,
    "TldCreate200Response": TldCreate200Response,
    "TldDto": TldDto,
    "TldFind200Response": TldFind200Response,
    "TldPolicyDto": TldPolicyDto,
    "UKDirectDataDto": UKDirectDataDto,
    "UkAdditionalDataDto": UkAdditionalDataDto,
    "UpdateProductDto": UpdateProductDto,
    "UsAdditionalDataDto": UsAdditionalDataDto,
    "UserAddonPricePolicyDto": UserAddonPricePolicyDto,
    "UserBasketDto": UserBasketDto,
    "UserDto": UserDto,
    "UserFind200Response": UserFind200Response,
    "UserGet200Response": UserGet200Response,
    "UserGetSettings200Response": UserGetSettings200Response,
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
