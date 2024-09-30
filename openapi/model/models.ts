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
export * from './checkDomainNameAvailability200Response';
export * from './checkDomainNameAvailabilitySockets200Response';
export * from './claimsTokenDataDto';
export * from './companyDto';
export * from './companyFindResponseDto';
export * from './companyRolesDto';
export * from './contactAdditionalDto';
export * from './couponDto';
export * from './couponProductsDto';
export * from './couponTypeDto';
export * from './createAffiliate200Response';
export * from './createCompany200Response';
export * from './createDomainCategory201Response';
export * from './createDomainContact200Response';
export * from './createIntegration201Response';
export * from './createInvoiceContact200Response';
export * from './createIpGroup200Response';
export * from './createIssue201Response';
export * from './createOrder201Response';
export * from './createPayment200Response';
export * from './createPolicy200Response';
export * from './createProduct201Response';
export * from './createProductCategory201Response';
export * from './createTemplate201Response';
export * from './createTld200Response';
export * from './currency';
export * from './currencyDto';
export * from './customAddonPricePolicies';
export * from './customAffiliates';
export * from './customPricePolicies';
export * from './customToken200Response';
export * from './customTokenDto';
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
export * from './findAddons200Response';
export * from './findAffiliate200Response';
export * from './findCompanies200Response';
export * from './findCoupons200Response';
export * from './findDomainCategories200Response';
export * from './findDomainContacts200Response';
export * from './findDomainNames200Response';
export * from './findIPs200Response';
export * from './findIntegrations200Response';
export * from './findInvoiceContacts200Response';
export * from './findInvoices200Response';
export * from './findIpGroups200Response';
export * from './findIssues200Response';
export * from './findItems200Response';
export * from './findOrders200Response';
export * from './findPayments200Response';
export * from './findPolicies200Response';
export * from './findProductCategories200Response';
export * from './findProducts200Response';
export * from './findTemplates200Response';
export * from './findTlds200Response';
export * from './findUsers200Response';
export * from './freeTldDto';
export * from './getDomainName200Response';
export * from './getInvoice200Response';
export * from './getItem200Response';
export * from './getPayment200Response';
export * from './getUser200Response';
export * from './integration';
export * from './integrationDto';
export * from './integrationInfoResponseDto';
export * from './intendedUseParamsDataDto';
export * from './invoiceContactDto';
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
import { CheckDomainNameAvailability200Response } from './checkDomainNameAvailability200Response';
import { CheckDomainNameAvailabilitySockets200Response } from './checkDomainNameAvailabilitySockets200Response';
import { ClaimsTokenDataDto } from './claimsTokenDataDto';
import { CompanyDto } from './companyDto';
import { CompanyFindResponseDto } from './companyFindResponseDto';
import { CompanyRolesDto } from './companyRolesDto';
import { ContactAdditionalDto } from './contactAdditionalDto';
import { CouponDto } from './couponDto';
import { CouponProductsDto } from './couponProductsDto';
import { CouponTypeDto } from './couponTypeDto';
import { CreateAffiliate200Response } from './createAffiliate200Response';
import { CreateCompany200Response } from './createCompany200Response';
import { CreateDomainCategory201Response } from './createDomainCategory201Response';
import { CreateDomainContact200Response } from './createDomainContact200Response';
import { CreateIntegration201Response } from './createIntegration201Response';
import { CreateInvoiceContact200Response } from './createInvoiceContact200Response';
import { CreateIpGroup200Response } from './createIpGroup200Response';
import { CreateIssue201Response } from './createIssue201Response';
import { CreateOrder201Response } from './createOrder201Response';
import { CreatePayment200Response } from './createPayment200Response';
import { CreatePolicy200Response } from './createPolicy200Response';
import { CreateProduct201Response } from './createProduct201Response';
import { CreateProductCategory201Response } from './createProductCategory201Response';
import { CreateTemplate201Response } from './createTemplate201Response';
import { CreateTld200Response } from './createTld200Response';
import { Currency } from './currency';
import { CurrencyDto } from './currencyDto';
import { CustomAddonPricePolicies } from './customAddonPricePolicies';
import { CustomAffiliates } from './customAffiliates';
import { CustomPricePolicies } from './customPricePolicies';
import { CustomToken200Response } from './customToken200Response';
import { CustomTokenDto } from './customTokenDto';
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
import { FindAddons200Response } from './findAddons200Response';
import { FindAffiliate200Response } from './findAffiliate200Response';
import { FindCompanies200Response } from './findCompanies200Response';
import { FindCoupons200Response } from './findCoupons200Response';
import { FindDomainCategories200Response } from './findDomainCategories200Response';
import { FindDomainContacts200Response } from './findDomainContacts200Response';
import { FindDomainNames200Response } from './findDomainNames200Response';
import { FindIPs200Response } from './findIPs200Response';
import { FindIntegrations200Response } from './findIntegrations200Response';
import { FindInvoiceContacts200Response } from './findInvoiceContacts200Response';
import { FindInvoices200Response } from './findInvoices200Response';
import { FindIpGroups200Response } from './findIpGroups200Response';
import { FindIssues200Response } from './findIssues200Response';
import { FindItems200Response } from './findItems200Response';
import { FindOrders200Response } from './findOrders200Response';
import { FindPayments200Response } from './findPayments200Response';
import { FindPolicies200Response } from './findPolicies200Response';
import { FindProductCategories200Response } from './findProductCategories200Response';
import { FindProducts200Response } from './findProducts200Response';
import { FindTemplates200Response } from './findTemplates200Response';
import { FindTlds200Response } from './findTlds200Response';
import { FindUsers200Response } from './findUsers200Response';
import { FreeTldDto } from './freeTldDto';
import { GetDomainName200Response } from './getDomainName200Response';
import { GetInvoice200Response } from './getInvoice200Response';
import { GetItem200Response } from './getItem200Response';
import { GetPayment200Response } from './getPayment200Response';
import { GetUser200Response } from './getUser200Response';
import { Integration } from './integration';
import { IntegrationDto } from './integrationDto';
import { IntegrationInfoResponseDto } from './integrationInfoResponseDto';
import { IntendedUseParamsDataDto } from './intendedUseParamsDataDto';
import { InvoiceContactDto } from './invoiceContactDto';
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
    "CheckDomainNameAvailability200Response": CheckDomainNameAvailability200Response,
    "CheckDomainNameAvailabilitySockets200Response": CheckDomainNameAvailabilitySockets200Response,
    "ClaimsTokenDataDto": ClaimsTokenDataDto,
    "CompanyDto": CompanyDto,
    "CompanyFindResponseDto": CompanyFindResponseDto,
    "CompanyRolesDto": CompanyRolesDto,
    "ContactAdditionalDto": ContactAdditionalDto,
    "CouponDto": CouponDto,
    "CouponProductsDto": CouponProductsDto,
    "CouponTypeDto": CouponTypeDto,
    "CreateAffiliate200Response": CreateAffiliate200Response,
    "CreateCompany200Response": CreateCompany200Response,
    "CreateDomainCategory201Response": CreateDomainCategory201Response,
    "CreateDomainContact200Response": CreateDomainContact200Response,
    "CreateIntegration201Response": CreateIntegration201Response,
    "CreateInvoiceContact200Response": CreateInvoiceContact200Response,
    "CreateIpGroup200Response": CreateIpGroup200Response,
    "CreateIssue201Response": CreateIssue201Response,
    "CreateOrder201Response": CreateOrder201Response,
    "CreatePayment200Response": CreatePayment200Response,
    "CreatePolicy200Response": CreatePolicy200Response,
    "CreateProduct201Response": CreateProduct201Response,
    "CreateProductCategory201Response": CreateProductCategory201Response,
    "CreateTemplate201Response": CreateTemplate201Response,
    "CreateTld200Response": CreateTld200Response,
    "Currency": Currency,
    "CurrencyDto": CurrencyDto,
    "CustomAddonPricePolicies": CustomAddonPricePolicies,
    "CustomAffiliates": CustomAffiliates,
    "CustomPricePolicies": CustomPricePolicies,
    "CustomToken200Response": CustomToken200Response,
    "CustomTokenDto": CustomTokenDto,
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
    "FindAddons200Response": FindAddons200Response,
    "FindAffiliate200Response": FindAffiliate200Response,
    "FindCompanies200Response": FindCompanies200Response,
    "FindCoupons200Response": FindCoupons200Response,
    "FindDomainCategories200Response": FindDomainCategories200Response,
    "FindDomainContacts200Response": FindDomainContacts200Response,
    "FindDomainNames200Response": FindDomainNames200Response,
    "FindIPs200Response": FindIPs200Response,
    "FindIntegrations200Response": FindIntegrations200Response,
    "FindInvoiceContacts200Response": FindInvoiceContacts200Response,
    "FindInvoices200Response": FindInvoices200Response,
    "FindIpGroups200Response": FindIpGroups200Response,
    "FindIssues200Response": FindIssues200Response,
    "FindItems200Response": FindItems200Response,
    "FindOrders200Response": FindOrders200Response,
    "FindPayments200Response": FindPayments200Response,
    "FindPolicies200Response": FindPolicies200Response,
    "FindProductCategories200Response": FindProductCategories200Response,
    "FindProducts200Response": FindProducts200Response,
    "FindTemplates200Response": FindTemplates200Response,
    "FindTlds200Response": FindTlds200Response,
    "FindUsers200Response": FindUsers200Response,
    "FreeTldDto": FreeTldDto,
    "GetDomainName200Response": GetDomainName200Response,
    "GetInvoice200Response": GetInvoice200Response,
    "GetItem200Response": GetItem200Response,
    "GetPayment200Response": GetPayment200Response,
    "GetUser200Response": GetUser200Response,
    "Integration": Integration,
    "IntegrationDto": IntegrationDto,
    "IntegrationInfoResponseDto": IntegrationInfoResponseDto,
    "IntendedUseParamsDataDto": IntendedUseParamsDataDto,
    "InvoiceContactDto": InvoiceContactDto,
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
