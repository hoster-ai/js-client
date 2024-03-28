"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./acceptedNotificationMethods"), exports);
__exportStar(require("./acceptedNotificationMethodsDto"), exports);
__exportStar(require("./actionFieldDto"), exports);
__exportStar(require("./addonDto"), exports);
__exportStar(require("./addonFind200Response"), exports);
__exportStar(require("./addonOptionsDto"), exports);
__exportStar(require("./affiliateCreate200Response"), exports);
__exportStar(require("./affiliateData"), exports);
__exportStar(require("./affiliateDto"), exports);
__exportStar(require("./affiliateFind200Response"), exports);
__exportStar(require("./afnicAdditionalDataDto"), exports);
__exportStar(require("./attachment"), exports);
__exportStar(require("./calculatedPriceDto"), exports);
__exportStar(require("./catAdditionalDataDto"), exports);
__exportStar(require("./catParameterDataDto"), exports);
__exportStar(require("./challengeParametersDataDto"), exports);
__exportStar(require("./challengeQuestionAnswerDto"), exports);
__exportStar(require("./claimsTokenDataDto"), exports);
__exportStar(require("./companyCreate200Response"), exports);
__exportStar(require("./companyDto"), exports);
__exportStar(require("./companyFind200Response"), exports);
__exportStar(require("./companyFindResponseDto"), exports);
__exportStar(require("./companyRolesDto"), exports);
__exportStar(require("./contactAdditionalDto"), exports);
__exportStar(require("./couponDto"), exports);
__exportStar(require("./couponFind200Response"), exports);
__exportStar(require("./couponProductsDto"), exports);
__exportStar(require("./couponTypeDto"), exports);
__exportStar(require("./currency"), exports);
__exportStar(require("./currencyDto"), exports);
__exportStar(require("./customAddonPricePolicies"), exports);
__exportStar(require("./customAffiliates"), exports);
__exportStar(require("./customPricePolicies"), exports);
__exportStar(require("./deAdditionalDataDto"), exports);
__exportStar(require("./defaultInvoiceContact"), exports);
__exportStar(require("./domainAdditionalDto"), exports);
__exportStar(require("./domainAvailabilityDto"), exports);
__exportStar(require("./domainAvailabilityWebsocketsDto"), exports);
__exportStar(require("./domainBundleDto"), exports);
__exportStar(require("./domainCategoryCreate201Response"), exports);
__exportStar(require("./domainCategoryDto"), exports);
__exportStar(require("./domainCategoryFind200Response"), exports);
__exportStar(require("./domainCheckAvailabilityRequestDto"), exports);
__exportStar(require("./domainContactCreate200Response"), exports);
__exportStar(require("./domainContactDto"), exports);
__exportStar(require("./domainContactFind200Response"), exports);
__exportStar(require("./domainNameCheckAvailability200Response"), exports);
__exportStar(require("./domainNameCheckAvailabilitySockets200Response"), exports);
__exportStar(require("./domainNameDto"), exports);
__exportStar(require("./domainNameFind200Response"), exports);
__exportStar(require("./domainNameGet200Response"), exports);
__exportStar(require("./domainPricesDto"), exports);
__exportStar(require("./donutsPriceCategoryDataDto"), exports);
__exportStar(require("./dynamicPriceDto"), exports);
__exportStar(require("./dynamicPriceInfoDto"), exports);
__exportStar(require("./emailPayloadDto"), exports);
__exportStar(require("./errorResponse"), exports);
__exportStar(require("./esAdditionalDataDto"), exports);
__exportStar(require("./euBeAdditionalDataDto"), exports);
__exportStar(require("./freeTldDto"), exports);
__exportStar(require("./integration"), exports);
__exportStar(require("./integrationCreate201Response"), exports);
__exportStar(require("./integrationDto"), exports);
__exportStar(require("./integrationFind200Response"), exports);
__exportStar(require("./integrationInfoResponseDto"), exports);
__exportStar(require("./intendedUseParamsDataDto"), exports);
__exportStar(require("./invoiceContactCreate200Response"), exports);
__exportStar(require("./invoiceContactDto"), exports);
__exportStar(require("./invoiceContactFind200Response"), exports);
__exportStar(require("./invoiceGet200Response"), exports);
__exportStar(require("./invoicesFind200Response"), exports);
__exportStar(require("./ipDto"), exports);
__exportStar(require("./ipGroupDto"), exports);
__exportStar(require("./ipGroupsCreate200Response"), exports);
__exportStar(require("./ipGroupsFind200Response"), exports);
__exportStar(require("./ipSettingsDto"), exports);
__exportStar(require("./ipsFind200Response"), exports);
__exportStar(require("./issueCreate201Response"), exports);
__exportStar(require("./issueDto"), exports);
__exportStar(require("./issueFind200Response"), exports);
__exportStar(require("./itAdditionalDataDto"), exports);
__exportStar(require("./itemAddonDto"), exports);
__exportStar(require("./itemAffiliateDto"), exports);
__exportStar(require("./itemCurrency"), exports);
__exportStar(require("./itemDto"), exports);
__exportStar(require("./itemFind200Response"), exports);
__exportStar(require("./itemGet200Response"), exports);
__exportStar(require("./itemUpdateDto"), exports);
__exportStar(require("./listActionDto"), exports);
__exportStar(require("./loginResponseDto"), exports);
__exportStar(require("./lvAdditionalDataDto"), exports);
__exportStar(require("./makePayment200Response"), exports);
__exportStar(require("./makePolicy200Response"), exports);
__exportStar(require("./menuItemDto"), exports);
__exportStar(require("./multilangTextDto"), exports);
__exportStar(require("./nameServerDto"), exports);
__exportStar(require("./nlAdditionalDataDto"), exports);
__exportStar(require("./orderCreate201Response"), exports);
__exportStar(require("./orderDto"), exports);
__exportStar(require("./orderFind200Response"), exports);
__exportStar(require("./paginatedResponse"), exports);
__exportStar(require("./paymentDto"), exports);
__exportStar(require("./paymentFind200Response"), exports);
__exportStar(require("./paymentGet200Response"), exports);
__exportStar(require("./paymentRedirectUrlResponseDto"), exports);
__exportStar(require("./paymentSubscriptionDto"), exports);
__exportStar(require("./persistentCart"), exports);
__exportStar(require("./policy"), exports);
__exportStar(require("./policyData"), exports);
__exportStar(require("./policyDto"), exports);
__exportStar(require("./policyFind200Response"), exports);
__exportStar(require("./premiumPriceCategoryDataDto"), exports);
__exportStar(require("./priceDto"), exports);
__exportStar(require("./pricePolicyDto"), exports);
__exportStar(require("./pricesDto"), exports);
__exportStar(require("./proAdditionalDataDto"), exports);
__exportStar(require("./productAffiliateDto"), exports);
__exportStar(require("./productCategoryCreate201Response"), exports);
__exportStar(require("./productCategoryDetails"), exports);
__exportStar(require("./productCategoryDetailsDto"), exports);
__exportStar(require("./productCategoryDto"), exports);
__exportStar(require("./productCategoryFind200Response"), exports);
__exportStar(require("./productCategoryTitle"), exports);
__exportStar(require("./productCreate201Response"), exports);
__exportStar(require("./productDetails"), exports);
__exportStar(require("./productDetailsDto"), exports);
__exportStar(require("./productDto"), exports);
__exportStar(require("./productFind200Response"), exports);
__exportStar(require("./productInformationDto"), exports);
__exportStar(require("./productTemplateDto"), exports);
__exportStar(require("./proxyServiceDataDto"), exports);
__exportStar(require("./pushPayloadDto"), exports);
__exportStar(require("./registryContactsDto"), exports);
__exportStar(require("./settingOptionsDto"), exports);
__exportStar(require("./settings"), exports);
__exportStar(require("./settingsCreate201Response"), exports);
__exportStar(require("./settingsDto"), exports);
__exportStar(require("./settingsFind200Response"), exports);
__exportStar(require("./smsPayloadDto"), exports);
__exportStar(require("./sunriseDataDto"), exports);
__exportStar(require("./tabDto"), exports);
__exportStar(require("./taskDto"), exports);
__exportStar(require("./templateCreate201Response"), exports);
__exportStar(require("./templateData"), exports);
__exportStar(require("./templateDto"), exports);
__exportStar(require("./templateFind200Response"), exports);
__exportStar(require("./tldCreate200Response"), exports);
__exportStar(require("./tldDto"), exports);
__exportStar(require("./tldFind200Response"), exports);
__exportStar(require("./tldPolicyDto"), exports);
__exportStar(require("./uKDirectDataDto"), exports);
__exportStar(require("./ukAdditionalDataDto"), exports);
__exportStar(require("./updateProductDto"), exports);
__exportStar(require("./usAdditionalDataDto"), exports);
__exportStar(require("./userAddonPricePolicyDto"), exports);
__exportStar(require("./userBasketDto"), exports);
__exportStar(require("./userDto"), exports);
__exportStar(require("./userFind200Response"), exports);
__exportStar(require("./userGet200Response"), exports);
__exportStar(require("./userGetSettings200Response"), exports);
__exportStar(require("./userPricePolicyDto"), exports);
__exportStar(require("./value"), exports);
__exportStar(require("./xXXMemberDataDto"), exports);
const acceptedNotificationMethods_1 = require("./acceptedNotificationMethods");
const acceptedNotificationMethodsDto_1 = require("./acceptedNotificationMethodsDto");
const actionFieldDto_1 = require("./actionFieldDto");
const addonDto_1 = require("./addonDto");
const addonFind200Response_1 = require("./addonFind200Response");
const addonOptionsDto_1 = require("./addonOptionsDto");
const affiliateCreate200Response_1 = require("./affiliateCreate200Response");
const affiliateData_1 = require("./affiliateData");
const affiliateDto_1 = require("./affiliateDto");
const affiliateFind200Response_1 = require("./affiliateFind200Response");
const afnicAdditionalDataDto_1 = require("./afnicAdditionalDataDto");
const attachment_1 = require("./attachment");
const calculatedPriceDto_1 = require("./calculatedPriceDto");
const catAdditionalDataDto_1 = require("./catAdditionalDataDto");
const catParameterDataDto_1 = require("./catParameterDataDto");
const challengeParametersDataDto_1 = require("./challengeParametersDataDto");
const challengeQuestionAnswerDto_1 = require("./challengeQuestionAnswerDto");
const claimsTokenDataDto_1 = require("./claimsTokenDataDto");
const companyCreate200Response_1 = require("./companyCreate200Response");
const companyDto_1 = require("./companyDto");
const companyFind200Response_1 = require("./companyFind200Response");
const companyFindResponseDto_1 = require("./companyFindResponseDto");
const companyRolesDto_1 = require("./companyRolesDto");
const contactAdditionalDto_1 = require("./contactAdditionalDto");
const couponDto_1 = require("./couponDto");
const couponFind200Response_1 = require("./couponFind200Response");
const couponProductsDto_1 = require("./couponProductsDto");
const couponTypeDto_1 = require("./couponTypeDto");
const currency_1 = require("./currency");
const currencyDto_1 = require("./currencyDto");
const customAddonPricePolicies_1 = require("./customAddonPricePolicies");
const customAffiliates_1 = require("./customAffiliates");
const customPricePolicies_1 = require("./customPricePolicies");
const deAdditionalDataDto_1 = require("./deAdditionalDataDto");
const defaultInvoiceContact_1 = require("./defaultInvoiceContact");
const domainAdditionalDto_1 = require("./domainAdditionalDto");
const domainAvailabilityDto_1 = require("./domainAvailabilityDto");
const domainAvailabilityWebsocketsDto_1 = require("./domainAvailabilityWebsocketsDto");
const domainBundleDto_1 = require("./domainBundleDto");
const domainCategoryCreate201Response_1 = require("./domainCategoryCreate201Response");
const domainCategoryDto_1 = require("./domainCategoryDto");
const domainCategoryFind200Response_1 = require("./domainCategoryFind200Response");
const domainCheckAvailabilityRequestDto_1 = require("./domainCheckAvailabilityRequestDto");
const domainContactCreate200Response_1 = require("./domainContactCreate200Response");
const domainContactDto_1 = require("./domainContactDto");
const domainContactFind200Response_1 = require("./domainContactFind200Response");
const domainNameCheckAvailability200Response_1 = require("./domainNameCheckAvailability200Response");
const domainNameCheckAvailabilitySockets200Response_1 = require("./domainNameCheckAvailabilitySockets200Response");
const domainNameDto_1 = require("./domainNameDto");
const domainNameFind200Response_1 = require("./domainNameFind200Response");
const domainNameGet200Response_1 = require("./domainNameGet200Response");
const domainPricesDto_1 = require("./domainPricesDto");
const donutsPriceCategoryDataDto_1 = require("./donutsPriceCategoryDataDto");
const dynamicPriceDto_1 = require("./dynamicPriceDto");
const dynamicPriceInfoDto_1 = require("./dynamicPriceInfoDto");
const emailPayloadDto_1 = require("./emailPayloadDto");
const errorResponse_1 = require("./errorResponse");
const esAdditionalDataDto_1 = require("./esAdditionalDataDto");
const euBeAdditionalDataDto_1 = require("./euBeAdditionalDataDto");
const freeTldDto_1 = require("./freeTldDto");
const integration_1 = require("./integration");
const integrationCreate201Response_1 = require("./integrationCreate201Response");
const integrationDto_1 = require("./integrationDto");
const integrationFind200Response_1 = require("./integrationFind200Response");
const integrationInfoResponseDto_1 = require("./integrationInfoResponseDto");
const intendedUseParamsDataDto_1 = require("./intendedUseParamsDataDto");
const invoiceContactCreate200Response_1 = require("./invoiceContactCreate200Response");
const invoiceContactDto_1 = require("./invoiceContactDto");
const invoiceContactFind200Response_1 = require("./invoiceContactFind200Response");
const invoiceGet200Response_1 = require("./invoiceGet200Response");
const invoicesFind200Response_1 = require("./invoicesFind200Response");
const ipDto_1 = require("./ipDto");
const ipGroupDto_1 = require("./ipGroupDto");
const ipGroupsCreate200Response_1 = require("./ipGroupsCreate200Response");
const ipGroupsFind200Response_1 = require("./ipGroupsFind200Response");
const ipSettingsDto_1 = require("./ipSettingsDto");
const ipsFind200Response_1 = require("./ipsFind200Response");
const issueCreate201Response_1 = require("./issueCreate201Response");
const issueDto_1 = require("./issueDto");
const issueFind200Response_1 = require("./issueFind200Response");
const itAdditionalDataDto_1 = require("./itAdditionalDataDto");
const itemAddonDto_1 = require("./itemAddonDto");
const itemAffiliateDto_1 = require("./itemAffiliateDto");
const itemCurrency_1 = require("./itemCurrency");
const itemDto_1 = require("./itemDto");
const itemFind200Response_1 = require("./itemFind200Response");
const itemGet200Response_1 = require("./itemGet200Response");
const itemUpdateDto_1 = require("./itemUpdateDto");
const listActionDto_1 = require("./listActionDto");
const loginResponseDto_1 = require("./loginResponseDto");
const lvAdditionalDataDto_1 = require("./lvAdditionalDataDto");
const makePayment200Response_1 = require("./makePayment200Response");
const makePolicy200Response_1 = require("./makePolicy200Response");
const menuItemDto_1 = require("./menuItemDto");
const multilangTextDto_1 = require("./multilangTextDto");
const nameServerDto_1 = require("./nameServerDto");
const nlAdditionalDataDto_1 = require("./nlAdditionalDataDto");
const orderCreate201Response_1 = require("./orderCreate201Response");
const orderDto_1 = require("./orderDto");
const orderFind200Response_1 = require("./orderFind200Response");
const paginatedResponse_1 = require("./paginatedResponse");
const paymentDto_1 = require("./paymentDto");
const paymentFind200Response_1 = require("./paymentFind200Response");
const paymentGet200Response_1 = require("./paymentGet200Response");
const paymentRedirectUrlResponseDto_1 = require("./paymentRedirectUrlResponseDto");
const paymentSubscriptionDto_1 = require("./paymentSubscriptionDto");
const persistentCart_1 = require("./persistentCart");
const policy_1 = require("./policy");
const policyData_1 = require("./policyData");
const policyDto_1 = require("./policyDto");
const policyFind200Response_1 = require("./policyFind200Response");
const premiumPriceCategoryDataDto_1 = require("./premiumPriceCategoryDataDto");
const priceDto_1 = require("./priceDto");
const pricePolicyDto_1 = require("./pricePolicyDto");
const pricesDto_1 = require("./pricesDto");
const proAdditionalDataDto_1 = require("./proAdditionalDataDto");
const productAffiliateDto_1 = require("./productAffiliateDto");
const productCategoryCreate201Response_1 = require("./productCategoryCreate201Response");
const productCategoryDetails_1 = require("./productCategoryDetails");
const productCategoryDetailsDto_1 = require("./productCategoryDetailsDto");
const productCategoryDto_1 = require("./productCategoryDto");
const productCategoryFind200Response_1 = require("./productCategoryFind200Response");
const productCategoryTitle_1 = require("./productCategoryTitle");
const productCreate201Response_1 = require("./productCreate201Response");
const productDetails_1 = require("./productDetails");
const productDetailsDto_1 = require("./productDetailsDto");
const productDto_1 = require("./productDto");
const productFind200Response_1 = require("./productFind200Response");
const productInformationDto_1 = require("./productInformationDto");
const productTemplateDto_1 = require("./productTemplateDto");
const proxyServiceDataDto_1 = require("./proxyServiceDataDto");
const pushPayloadDto_1 = require("./pushPayloadDto");
const registryContactsDto_1 = require("./registryContactsDto");
const settingOptionsDto_1 = require("./settingOptionsDto");
const settings_1 = require("./settings");
const settingsCreate201Response_1 = require("./settingsCreate201Response");
const settingsDto_1 = require("./settingsDto");
const settingsFind200Response_1 = require("./settingsFind200Response");
const smsPayloadDto_1 = require("./smsPayloadDto");
const sunriseDataDto_1 = require("./sunriseDataDto");
const tabDto_1 = require("./tabDto");
const taskDto_1 = require("./taskDto");
const templateCreate201Response_1 = require("./templateCreate201Response");
const templateData_1 = require("./templateData");
const templateDto_1 = require("./templateDto");
const templateFind200Response_1 = require("./templateFind200Response");
const tldCreate200Response_1 = require("./tldCreate200Response");
const tldDto_1 = require("./tldDto");
const tldFind200Response_1 = require("./tldFind200Response");
const tldPolicyDto_1 = require("./tldPolicyDto");
const uKDirectDataDto_1 = require("./uKDirectDataDto");
const ukAdditionalDataDto_1 = require("./ukAdditionalDataDto");
const updateProductDto_1 = require("./updateProductDto");
const usAdditionalDataDto_1 = require("./usAdditionalDataDto");
const userAddonPricePolicyDto_1 = require("./userAddonPricePolicyDto");
const userBasketDto_1 = require("./userBasketDto");
const userDto_1 = require("./userDto");
const userFind200Response_1 = require("./userFind200Response");
const userGet200Response_1 = require("./userGet200Response");
const userGetSettings200Response_1 = require("./userGetSettings200Response");
const userPricePolicyDto_1 = require("./userPricePolicyDto");
const value_1 = require("./value");
const xXXMemberDataDto_1 = require("./xXXMemberDataDto");
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
let enumsMap = {
    "ActionFieldDto.TypeEnum": actionFieldDto_1.ActionFieldDto.TypeEnum,
    "AddonDto.TypeEnum": addonDto_1.AddonDto.TypeEnum,
    "AffiliateData.AffiliateTypeEnum": affiliateData_1.AffiliateData.AffiliateTypeEnum,
    "AffiliateData.StatusEnum": affiliateData_1.AffiliateData.StatusEnum,
    "AfnicAdditionalDataDto.BirthCcEnum": afnicAdditionalDataDto_1.AfnicAdditionalDataDto.BirthCcEnum,
    "CatAdditionalDataDto.LanguageEnum": catAdditionalDataDto_1.CatAdditionalDataDto.LanguageEnum,
    "CompanyDto.DefaultLanguageEnum": companyDto_1.CompanyDto.DefaultLanguageEnum,
    "CompanyDto.ProductLanguagesEnum": companyDto_1.CompanyDto.ProductLanguagesEnum,
    "CompanyRolesDto.RolesEnum": companyRolesDto_1.CompanyRolesDto.RolesEnum,
    "CouponProductsDto.AppliedOnDurationsEnum": couponProductsDto_1.CouponProductsDto.AppliedOnDurationsEnum,
    "CouponProductsDto.AppliedOnActionsEnum": couponProductsDto_1.CouponProductsDto.AppliedOnActionsEnum,
    "CouponTypeDto.TypeEnum": couponTypeDto_1.CouponTypeDto.TypeEnum,
    "CouponTypeDto.WhichToApplyEnum": couponTypeDto_1.CouponTypeDto.WhichToApplyEnum,
    "DeAdditionalDataDto.ContactTypeEnum": deAdditionalDataDto_1.DeAdditionalDataDto.ContactTypeEnum,
    "DefaultInvoiceContact.CountryEnum": defaultInvoiceContact_1.DefaultInvoiceContact.CountryEnum,
    "DomainBundleDto.RecordTypeEnum": domainBundleDto_1.DomainBundleDto.RecordTypeEnum,
    "DomainContactDto.CountryCodeEnum": domainContactDto_1.DomainContactDto.CountryCodeEnum,
    "DomainContactDto.ContactTypeEnum": domainContactDto_1.DomainContactDto.ContactTypeEnum,
    "DomainNameDto.DurationEnum": domainNameDto_1.DomainNameDto.DurationEnum,
    "DonutsPriceCategoryDataDto.PriceCategoryEnum": donutsPriceCategoryDataDto_1.DonutsPriceCategoryDataDto.PriceCategoryEnum,
    "EsAdditionalDataDto.IdentificationNumberEnum": esAdditionalDataDto_1.EsAdditionalDataDto.IdentificationNumberEnum,
    "EsAdditionalDataDto.ContactTypeEnum": esAdditionalDataDto_1.EsAdditionalDataDto.ContactTypeEnum,
    "EuBeAdditionalDataDto.LanguageEnum": euBeAdditionalDataDto_1.EuBeAdditionalDataDto.LanguageEnum,
    "EuBeAdditionalDataDto.CountryOfCitizenshipEnum": euBeAdditionalDataDto_1.EuBeAdditionalDataDto.CountryOfCitizenshipEnum,
    "FreeTldDto.DurationsEnum": freeTldDto_1.FreeTldDto.DurationsEnum,
    "Integration.TypeEnum": integration_1.Integration.TypeEnum,
    "Integration.ListenEventsEnum": integration_1.Integration.ListenEventsEnum,
    "Integration.ProductCategoryEnum": integration_1.Integration.ProductCategoryEnum,
    "IntegrationDto.TypeEnum": integrationDto_1.IntegrationDto.TypeEnum,
    "IntegrationDto.ListenEventsEnum": integrationDto_1.IntegrationDto.ListenEventsEnum,
    "IntegrationDto.ProductCategoryEnum": integrationDto_1.IntegrationDto.ProductCategoryEnum,
    "InvoiceContactDto.CountryEnum": invoiceContactDto_1.InvoiceContactDto.CountryEnum,
    "IpDto.TypeEnum": ipDto_1.IpDto.TypeEnum,
    "IssueDto.CategoryEnum": issueDto_1.IssueDto.CategoryEnum,
    "IssueDto.PriorityEnum": issueDto_1.IssueDto.PriorityEnum,
    "ItAdditionalDataDto.EntityTypeEnum": itAdditionalDataDto_1.ItAdditionalDataDto.EntityTypeEnum,
    "ItemAffiliateDto.AffiliateTypeEnum": itemAffiliateDto_1.ItemAffiliateDto.AffiliateTypeEnum,
    "ItemAffiliateDto.StatusEnum": itemAffiliateDto_1.ItemAffiliateDto.StatusEnum,
    "ItemDto.TypeEnum": itemDto_1.ItemDto.TypeEnum,
    "ItemDto.ActionEnum": itemDto_1.ItemDto.ActionEnum,
    "ItemDto.StatusEnum": itemDto_1.ItemDto.StatusEnum,
    "ItemDto.DurationEnum": itemDto_1.ItemDto.DurationEnum,
    "MultilangTextDto.LanguageEnum": multilangTextDto_1.MultilangTextDto.LanguageEnum,
    "NlAdditionalDataDto.LegalTypeEnum": nlAdditionalDataDto_1.NlAdditionalDataDto.LegalTypeEnum,
    "OrderDto.OrderStatusEnum": orderDto_1.OrderDto.OrderStatusEnum,
    "OrderDto.OrderInvoiceStatusEnum": orderDto_1.OrderDto.OrderInvoiceStatusEnum,
    "PaymentDto.PaymentTypeEnum": paymentDto_1.PaymentDto.PaymentTypeEnum,
    "PaymentDto.TransactionTypeEnum": paymentDto_1.PaymentDto.TransactionTypeEnum,
    "PaymentDto.StatusEnum": paymentDto_1.PaymentDto.StatusEnum,
    "PremiumPriceCategoryDataDto.PriceCategoryEnum": premiumPriceCategoryDataDto_1.PremiumPriceCategoryDataDto.PriceCategoryEnum,
    "PriceDto.DurationEnum": priceDto_1.PriceDto.DurationEnum,
    "ProductAffiliateDto.DurationsEnum": productAffiliateDto_1.ProductAffiliateDto.DurationsEnum,
    "ProductAffiliateDto.TypeEnum": productAffiliateDto_1.ProductAffiliateDto.TypeEnum,
    "ProductAffiliateDto.ActionEnum": productAffiliateDto_1.ProductAffiliateDto.ActionEnum,
    "ProductCategoryTitle.LanguageEnum": productCategoryTitle_1.ProductCategoryTitle.LanguageEnum,
    "ProductDto.InvoiceTypeEnum": productDto_1.ProductDto.InvoiceTypeEnum,
    "ProductTemplateDto.ActionEnum": productTemplateDto_1.ProductTemplateDto.ActionEnum,
    "TaskDto.ActionEnum": taskDto_1.TaskDto.ActionEnum,
    "TaskDto.StatusEnum": taskDto_1.TaskDto.StatusEnum,
    "TaskDto.IntegrationHandlerEnum": taskDto_1.TaskDto.IntegrationHandlerEnum,
    "TemplateDto.NotificationTypeEnum": templateDto_1.TemplateDto.NotificationTypeEnum,
    "TemplateDto.EventEnum": templateDto_1.TemplateDto.EventEnum,
    "TldDto.RegistrantContactCountryPresenceEnum": tldDto_1.TldDto.RegistrantContactCountryPresenceEnum,
    "TldDto.AdminContactCountryPresenceEnum": tldDto_1.TldDto.AdminContactCountryPresenceEnum,
    "TldDto.TechContactCountryPresenceEnum": tldDto_1.TldDto.TechContactCountryPresenceEnum,
    "TldDto.BillingContactCountryPresenceEnum": tldDto_1.TldDto.BillingContactCountryPresenceEnum,
    "TldDto.RegistrationPeriodAfterTransferEnum": tldDto_1.TldDto.RegistrationPeriodAfterTransferEnum,
    "TldDto.SupportedDurationsEnum": tldDto_1.TldDto.SupportedDurationsEnum,
    "TldDto.DomainAdditionalDataEnum": tldDto_1.TldDto.DomainAdditionalDataEnum,
    "TldDto.ContactAdditionalDataEnum": tldDto_1.TldDto.ContactAdditionalDataEnum,
    "UkAdditionalDataDto.RegistrantTypeEnum": ukAdditionalDataDto_1.UkAdditionalDataDto.RegistrantTypeEnum,
    "UpdateProductDto.InvoiceTypeEnum": updateProductDto_1.UpdateProductDto.InvoiceTypeEnum,
    "UsAdditionalDataDto.AppPurposeEnum": usAdditionalDataDto_1.UsAdditionalDataDto.AppPurposeEnum,
    "UsAdditionalDataDto.CategoryEnum": usAdditionalDataDto_1.UsAdditionalDataDto.CategoryEnum,
    "UserDto.DefaultLanguageEnum": userDto_1.UserDto.DefaultLanguageEnum,
    "UserDto.InvoiceIntervalEnum": userDto_1.UserDto.InvoiceIntervalEnum,
};
let typeMap = {
    "AcceptedNotificationMethods": acceptedNotificationMethods_1.AcceptedNotificationMethods,
    "AcceptedNotificationMethodsDto": acceptedNotificationMethodsDto_1.AcceptedNotificationMethodsDto,
    "ActionFieldDto": actionFieldDto_1.ActionFieldDto,
    "AddonDto": addonDto_1.AddonDto,
    "AddonFind200Response": addonFind200Response_1.AddonFind200Response,
    "AddonOptionsDto": addonOptionsDto_1.AddonOptionsDto,
    "AffiliateCreate200Response": affiliateCreate200Response_1.AffiliateCreate200Response,
    "AffiliateData": affiliateData_1.AffiliateData,
    "AffiliateDto": affiliateDto_1.AffiliateDto,
    "AffiliateFind200Response": affiliateFind200Response_1.AffiliateFind200Response,
    "AfnicAdditionalDataDto": afnicAdditionalDataDto_1.AfnicAdditionalDataDto,
    "Attachment": attachment_1.Attachment,
    "CalculatedPriceDto": calculatedPriceDto_1.CalculatedPriceDto,
    "CatAdditionalDataDto": catAdditionalDataDto_1.CatAdditionalDataDto,
    "CatParameterDataDto": catParameterDataDto_1.CatParameterDataDto,
    "ChallengeParametersDataDto": challengeParametersDataDto_1.ChallengeParametersDataDto,
    "ChallengeQuestionAnswerDto": challengeQuestionAnswerDto_1.ChallengeQuestionAnswerDto,
    "ClaimsTokenDataDto": claimsTokenDataDto_1.ClaimsTokenDataDto,
    "CompanyCreate200Response": companyCreate200Response_1.CompanyCreate200Response,
    "CompanyDto": companyDto_1.CompanyDto,
    "CompanyFind200Response": companyFind200Response_1.CompanyFind200Response,
    "CompanyFindResponseDto": companyFindResponseDto_1.CompanyFindResponseDto,
    "CompanyRolesDto": companyRolesDto_1.CompanyRolesDto,
    "ContactAdditionalDto": contactAdditionalDto_1.ContactAdditionalDto,
    "CouponDto": couponDto_1.CouponDto,
    "CouponFind200Response": couponFind200Response_1.CouponFind200Response,
    "CouponProductsDto": couponProductsDto_1.CouponProductsDto,
    "CouponTypeDto": couponTypeDto_1.CouponTypeDto,
    "Currency": currency_1.Currency,
    "CurrencyDto": currencyDto_1.CurrencyDto,
    "CustomAddonPricePolicies": customAddonPricePolicies_1.CustomAddonPricePolicies,
    "CustomAffiliates": customAffiliates_1.CustomAffiliates,
    "CustomPricePolicies": customPricePolicies_1.CustomPricePolicies,
    "DeAdditionalDataDto": deAdditionalDataDto_1.DeAdditionalDataDto,
    "DefaultInvoiceContact": defaultInvoiceContact_1.DefaultInvoiceContact,
    "DomainAdditionalDto": domainAdditionalDto_1.DomainAdditionalDto,
    "DomainAvailabilityDto": domainAvailabilityDto_1.DomainAvailabilityDto,
    "DomainAvailabilityWebsocketsDto": domainAvailabilityWebsocketsDto_1.DomainAvailabilityWebsocketsDto,
    "DomainBundleDto": domainBundleDto_1.DomainBundleDto,
    "DomainCategoryCreate201Response": domainCategoryCreate201Response_1.DomainCategoryCreate201Response,
    "DomainCategoryDto": domainCategoryDto_1.DomainCategoryDto,
    "DomainCategoryFind200Response": domainCategoryFind200Response_1.DomainCategoryFind200Response,
    "DomainCheckAvailabilityRequestDto": domainCheckAvailabilityRequestDto_1.DomainCheckAvailabilityRequestDto,
    "DomainContactCreate200Response": domainContactCreate200Response_1.DomainContactCreate200Response,
    "DomainContactDto": domainContactDto_1.DomainContactDto,
    "DomainContactFind200Response": domainContactFind200Response_1.DomainContactFind200Response,
    "DomainNameCheckAvailability200Response": domainNameCheckAvailability200Response_1.DomainNameCheckAvailability200Response,
    "DomainNameCheckAvailabilitySockets200Response": domainNameCheckAvailabilitySockets200Response_1.DomainNameCheckAvailabilitySockets200Response,
    "DomainNameDto": domainNameDto_1.DomainNameDto,
    "DomainNameFind200Response": domainNameFind200Response_1.DomainNameFind200Response,
    "DomainNameGet200Response": domainNameGet200Response_1.DomainNameGet200Response,
    "DomainPricesDto": domainPricesDto_1.DomainPricesDto,
    "DonutsPriceCategoryDataDto": donutsPriceCategoryDataDto_1.DonutsPriceCategoryDataDto,
    "DynamicPriceDto": dynamicPriceDto_1.DynamicPriceDto,
    "DynamicPriceInfoDto": dynamicPriceInfoDto_1.DynamicPriceInfoDto,
    "EmailPayloadDto": emailPayloadDto_1.EmailPayloadDto,
    "ErrorResponse": errorResponse_1.ErrorResponse,
    "EsAdditionalDataDto": esAdditionalDataDto_1.EsAdditionalDataDto,
    "EuBeAdditionalDataDto": euBeAdditionalDataDto_1.EuBeAdditionalDataDto,
    "FreeTldDto": freeTldDto_1.FreeTldDto,
    "Integration": integration_1.Integration,
    "IntegrationCreate201Response": integrationCreate201Response_1.IntegrationCreate201Response,
    "IntegrationDto": integrationDto_1.IntegrationDto,
    "IntegrationFind200Response": integrationFind200Response_1.IntegrationFind200Response,
    "IntegrationInfoResponseDto": integrationInfoResponseDto_1.IntegrationInfoResponseDto,
    "IntendedUseParamsDataDto": intendedUseParamsDataDto_1.IntendedUseParamsDataDto,
    "InvoiceContactCreate200Response": invoiceContactCreate200Response_1.InvoiceContactCreate200Response,
    "InvoiceContactDto": invoiceContactDto_1.InvoiceContactDto,
    "InvoiceContactFind200Response": invoiceContactFind200Response_1.InvoiceContactFind200Response,
    "InvoiceGet200Response": invoiceGet200Response_1.InvoiceGet200Response,
    "InvoicesFind200Response": invoicesFind200Response_1.InvoicesFind200Response,
    "IpDto": ipDto_1.IpDto,
    "IpGroupDto": ipGroupDto_1.IpGroupDto,
    "IpGroupsCreate200Response": ipGroupsCreate200Response_1.IpGroupsCreate200Response,
    "IpGroupsFind200Response": ipGroupsFind200Response_1.IpGroupsFind200Response,
    "IpSettingsDto": ipSettingsDto_1.IpSettingsDto,
    "IpsFind200Response": ipsFind200Response_1.IpsFind200Response,
    "IssueCreate201Response": issueCreate201Response_1.IssueCreate201Response,
    "IssueDto": issueDto_1.IssueDto,
    "IssueFind200Response": issueFind200Response_1.IssueFind200Response,
    "ItAdditionalDataDto": itAdditionalDataDto_1.ItAdditionalDataDto,
    "ItemAddonDto": itemAddonDto_1.ItemAddonDto,
    "ItemAffiliateDto": itemAffiliateDto_1.ItemAffiliateDto,
    "ItemCurrency": itemCurrency_1.ItemCurrency,
    "ItemDto": itemDto_1.ItemDto,
    "ItemFind200Response": itemFind200Response_1.ItemFind200Response,
    "ItemGet200Response": itemGet200Response_1.ItemGet200Response,
    "ItemUpdateDto": itemUpdateDto_1.ItemUpdateDto,
    "ListActionDto": listActionDto_1.ListActionDto,
    "LoginResponseDto": loginResponseDto_1.LoginResponseDto,
    "LvAdditionalDataDto": lvAdditionalDataDto_1.LvAdditionalDataDto,
    "MakePayment200Response": makePayment200Response_1.MakePayment200Response,
    "MakePolicy200Response": makePolicy200Response_1.MakePolicy200Response,
    "MenuItemDto": menuItemDto_1.MenuItemDto,
    "MultilangTextDto": multilangTextDto_1.MultilangTextDto,
    "NameServerDto": nameServerDto_1.NameServerDto,
    "NlAdditionalDataDto": nlAdditionalDataDto_1.NlAdditionalDataDto,
    "OrderCreate201Response": orderCreate201Response_1.OrderCreate201Response,
    "OrderDto": orderDto_1.OrderDto,
    "OrderFind200Response": orderFind200Response_1.OrderFind200Response,
    "PaginatedResponse": paginatedResponse_1.PaginatedResponse,
    "PaymentDto": paymentDto_1.PaymentDto,
    "PaymentFind200Response": paymentFind200Response_1.PaymentFind200Response,
    "PaymentGet200Response": paymentGet200Response_1.PaymentGet200Response,
    "PaymentRedirectUrlResponseDto": paymentRedirectUrlResponseDto_1.PaymentRedirectUrlResponseDto,
    "PaymentSubscriptionDto": paymentSubscriptionDto_1.PaymentSubscriptionDto,
    "PersistentCart": persistentCart_1.PersistentCart,
    "Policy": policy_1.Policy,
    "PolicyData": policyData_1.PolicyData,
    "PolicyDto": policyDto_1.PolicyDto,
    "PolicyFind200Response": policyFind200Response_1.PolicyFind200Response,
    "PremiumPriceCategoryDataDto": premiumPriceCategoryDataDto_1.PremiumPriceCategoryDataDto,
    "PriceDto": priceDto_1.PriceDto,
    "PricePolicyDto": pricePolicyDto_1.PricePolicyDto,
    "PricesDto": pricesDto_1.PricesDto,
    "ProAdditionalDataDto": proAdditionalDataDto_1.ProAdditionalDataDto,
    "ProductAffiliateDto": productAffiliateDto_1.ProductAffiliateDto,
    "ProductCategoryCreate201Response": productCategoryCreate201Response_1.ProductCategoryCreate201Response,
    "ProductCategoryDetails": productCategoryDetails_1.ProductCategoryDetails,
    "ProductCategoryDetailsDto": productCategoryDetailsDto_1.ProductCategoryDetailsDto,
    "ProductCategoryDto": productCategoryDto_1.ProductCategoryDto,
    "ProductCategoryFind200Response": productCategoryFind200Response_1.ProductCategoryFind200Response,
    "ProductCategoryTitle": productCategoryTitle_1.ProductCategoryTitle,
    "ProductCreate201Response": productCreate201Response_1.ProductCreate201Response,
    "ProductDetails": productDetails_1.ProductDetails,
    "ProductDetailsDto": productDetailsDto_1.ProductDetailsDto,
    "ProductDto": productDto_1.ProductDto,
    "ProductFind200Response": productFind200Response_1.ProductFind200Response,
    "ProductInformationDto": productInformationDto_1.ProductInformationDto,
    "ProductTemplateDto": productTemplateDto_1.ProductTemplateDto,
    "ProxyServiceDataDto": proxyServiceDataDto_1.ProxyServiceDataDto,
    "PushPayloadDto": pushPayloadDto_1.PushPayloadDto,
    "RegistryContactsDto": registryContactsDto_1.RegistryContactsDto,
    "SettingOptionsDto": settingOptionsDto_1.SettingOptionsDto,
    "Settings": settings_1.Settings,
    "SettingsCreate201Response": settingsCreate201Response_1.SettingsCreate201Response,
    "SettingsDto": settingsDto_1.SettingsDto,
    "SettingsFind200Response": settingsFind200Response_1.SettingsFind200Response,
    "SmsPayloadDto": smsPayloadDto_1.SmsPayloadDto,
    "SunriseDataDto": sunriseDataDto_1.SunriseDataDto,
    "TabDto": tabDto_1.TabDto,
    "TaskDto": taskDto_1.TaskDto,
    "TemplateCreate201Response": templateCreate201Response_1.TemplateCreate201Response,
    "TemplateData": templateData_1.TemplateData,
    "TemplateDto": templateDto_1.TemplateDto,
    "TemplateFind200Response": templateFind200Response_1.TemplateFind200Response,
    "TldCreate200Response": tldCreate200Response_1.TldCreate200Response,
    "TldDto": tldDto_1.TldDto,
    "TldFind200Response": tldFind200Response_1.TldFind200Response,
    "TldPolicyDto": tldPolicyDto_1.TldPolicyDto,
    "UKDirectDataDto": uKDirectDataDto_1.UKDirectDataDto,
    "UkAdditionalDataDto": ukAdditionalDataDto_1.UkAdditionalDataDto,
    "UpdateProductDto": updateProductDto_1.UpdateProductDto,
    "UsAdditionalDataDto": usAdditionalDataDto_1.UsAdditionalDataDto,
    "UserAddonPricePolicyDto": userAddonPricePolicyDto_1.UserAddonPricePolicyDto,
    "UserBasketDto": userBasketDto_1.UserBasketDto,
    "UserDto": userDto_1.UserDto,
    "UserFind200Response": userFind200Response_1.UserFind200Response,
    "UserGet200Response": userGet200Response_1.UserGet200Response,
    "UserGetSettings200Response": userGetSettings200Response_1.UserGetSettings200Response,
    "UserPricePolicyDto": userPricePolicyDto_1.UserPricePolicyDto,
    "Value": value_1.Value,
    "XXXMemberDataDto": xXXMemberDataDto_1.XXXMemberDataDto,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
