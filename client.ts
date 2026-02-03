import { Configuration } from "./openapi";
import { AddonsApi, AffiliatesApi, CompaniesApi, CouponsApi, DomainCategoriesApi, DomainContactsApi, IntegrationsApi, InvoiceContactsApi, InvoicesApi, IssuesApi, ItemsApi, OrdersApi, PoliciesApi, ProductCategoriesApi, ProductsApi, TemplatesApi, TldsApi, UsersApi } from "./openapi/api";

// This is the entrypoint for the openapi package
export * from './openapi/index';

export class Client {
    private basePath: string;
    private configuration?: Configuration;
  
    constructor(url?: string) {
      if (url) {
        this.basePath = url;
      } else {
        this.basePath =
          process.env.NODE_ENV === "production"
            ? "https://api.hoster.ai"
            : "http://localhost:3000";
      }
    }
  
    public setAccessToken(accessToken: string) {
      this.configuration = new Configuration({
        accessToken: accessToken,
        basePath: this.basePath,
      });
    }
  
    public addons() {
      const addonsApi = new AddonsApi(this.configuration);
      return addonsApi;
    }
  
    public affiliates() {
      const affiliatesApi = new AffiliatesApi(this.configuration);
      return affiliatesApi;
    }
  
    public companies() {
      const companiesApi = new CompaniesApi(this.configuration);
      return companiesApi;
    }
  
    public coupons() {
      const couponsApi = new CouponsApi(this.configuration);
      return couponsApi;
    }
  
    public domainCategories() {
      const domainCategoriesApi = new DomainCategoriesApi(this.configuration);
      return domainCategoriesApi;
    }
  
    public domainContacts() {
      const domainContactsApi = new DomainContactsApi(this.configuration);
      return domainContactsApi;
    }
  
    public integrations() {
      const integrationsApi = new IntegrationsApi(this.configuration);
      return integrationsApi;
    }
  
    public invoiceContacts() {
      const invoiceContactsApi = new InvoiceContactsApi(this.configuration);
      return invoiceContactsApi;
    }
  
    public invoices() {
      const invoicesApi = new InvoicesApi(this.configuration);
      return invoicesApi;
    }
  
    public issues() {
      const issuesApi = new IssuesApi(this.configuration);
      return issuesApi;
    }
  
    public items() {
      const itemsApi = new ItemsApi(this.configuration);
      return itemsApi;
    }
  
    public orders() {
      const ordersApi = new OrdersApi(this.configuration);
      return ordersApi;
    }
  
    public policies() {
      const policiesApi = new PoliciesApi(this.configuration);
      return policiesApi;
    }
  
    public productCategories() {
      const productCategoriesApi = new ProductCategoriesApi(this.configuration);
      return productCategoriesApi;
    }
  
    public products() {
      const productsApi = new ProductsApi(this.configuration);
      return productsApi;
    }
  
    public templates() {
      const templatesApi = new TemplatesApi(this.configuration);
      return templatesApi;
    }
  
    public tlds() {
      const tldsApi = new TldsApi(this.configuration);
      return tldsApi;
    }
  
    public users() {
      const usersApi = new UsersApi(this.configuration);
      return usersApi;
    }
  }