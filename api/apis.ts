export * from './addonsApi';
import { AddonsApi } from './addonsApi';
export * from './affiliatesApi';
import { AffiliatesApi } from './affiliatesApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './couponsApi';
import { CouponsApi } from './couponsApi';
export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './domainCategoriesApi';
import { DomainCategoriesApi } from './domainCategoriesApi';
export * from './domainContactsApi';
import { DomainContactsApi } from './domainContactsApi';
export * from './domainNamesApi';
import { DomainNamesApi } from './domainNamesApi';
export * from './iPGroupsApi';
import { IPGroupsApi } from './iPGroupsApi';
export * from './iPsApi';
import { IPsApi } from './iPsApi';
export * from './integrationsApi';
import { IntegrationsApi } from './integrationsApi';
export * from './invoiceContactsApi';
import { InvoiceContactsApi } from './invoiceContactsApi';
export * from './invoicesApi';
import { InvoicesApi } from './invoicesApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './itemsApi';
import { ItemsApi } from './itemsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './policiesApi';
import { PoliciesApi } from './policiesApi';
export * from './productCategoriesApi';
import { ProductCategoriesApi } from './productCategoriesApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './settingsApi';
import { SettingsApi } from './settingsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
export * from './tldsApi';
import { TldsApi } from './tldsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AddonsApi, AffiliatesApi, CompaniesApi, CouponsApi, DefaultApi, DomainCategoriesApi, DomainContactsApi, DomainNamesApi, IPGroupsApi, IPsApi, IntegrationsApi, InvoiceContactsApi, InvoicesApi, IssuesApi, ItemsApi, OrdersApi, PaymentsApi, PoliciesApi, ProductCategoriesApi, ProductsApi, SettingsApi, TemplatesApi, TldsApi, UsersApi];
