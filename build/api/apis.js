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
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./addonsApi"), exports);
const addonsApi_1 = require("./addonsApi");
__exportStar(require("./affiliatesApi"), exports);
const affiliatesApi_1 = require("./affiliatesApi");
__exportStar(require("./companiesApi"), exports);
const companiesApi_1 = require("./companiesApi");
__exportStar(require("./couponsApi"), exports);
const couponsApi_1 = require("./couponsApi");
__exportStar(require("./defaultApi"), exports);
const defaultApi_1 = require("./defaultApi");
__exportStar(require("./domainCategoriesApi"), exports);
const domainCategoriesApi_1 = require("./domainCategoriesApi");
__exportStar(require("./domainContactsApi"), exports);
const domainContactsApi_1 = require("./domainContactsApi");
__exportStar(require("./domainNamesApi"), exports);
const domainNamesApi_1 = require("./domainNamesApi");
__exportStar(require("./iPGroupsApi"), exports);
const iPGroupsApi_1 = require("./iPGroupsApi");
__exportStar(require("./iPsApi"), exports);
const iPsApi_1 = require("./iPsApi");
__exportStar(require("./integrationsApi"), exports);
const integrationsApi_1 = require("./integrationsApi");
__exportStar(require("./invoiceContactsApi"), exports);
const invoiceContactsApi_1 = require("./invoiceContactsApi");
__exportStar(require("./invoicesApi"), exports);
const invoicesApi_1 = require("./invoicesApi");
__exportStar(require("./issuesApi"), exports);
const issuesApi_1 = require("./issuesApi");
__exportStar(require("./itemsApi"), exports);
const itemsApi_1 = require("./itemsApi");
__exportStar(require("./ordersApi"), exports);
const ordersApi_1 = require("./ordersApi");
__exportStar(require("./paymentsApi"), exports);
const paymentsApi_1 = require("./paymentsApi");
__exportStar(require("./policiesApi"), exports);
const policiesApi_1 = require("./policiesApi");
__exportStar(require("./productCategoriesApi"), exports);
const productCategoriesApi_1 = require("./productCategoriesApi");
__exportStar(require("./productsApi"), exports);
const productsApi_1 = require("./productsApi");
__exportStar(require("./settingsApi"), exports);
const settingsApi_1 = require("./settingsApi");
__exportStar(require("./templatesApi"), exports);
const templatesApi_1 = require("./templatesApi");
__exportStar(require("./tldsApi"), exports);
const tldsApi_1 = require("./tldsApi");
__exportStar(require("./usersApi"), exports);
const usersApi_1 = require("./usersApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [addonsApi_1.AddonsApi, affiliatesApi_1.AffiliatesApi, companiesApi_1.CompaniesApi, couponsApi_1.CouponsApi, defaultApi_1.DefaultApi, domainCategoriesApi_1.DomainCategoriesApi, domainContactsApi_1.DomainContactsApi, domainNamesApi_1.DomainNamesApi, iPGroupsApi_1.IPGroupsApi, iPsApi_1.IPsApi, integrationsApi_1.IntegrationsApi, invoiceContactsApi_1.InvoiceContactsApi, invoicesApi_1.InvoicesApi, issuesApi_1.IssuesApi, itemsApi_1.ItemsApi, ordersApi_1.OrdersApi, paymentsApi_1.PaymentsApi, policiesApi_1.PoliciesApi, productCategoriesApi_1.ProductCategoriesApi, productsApi_1.ProductsApi, settingsApi_1.SettingsApi, templatesApi_1.TemplatesApi, tldsApi_1.TldsApi, usersApi_1.UsersApi];
