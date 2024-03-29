import { HttpBearerAuth, AddonsApi, AffiliatesApi, CompaniesApi, CouponsApi, DomainCategoriesApi, DomainContactsApi, DomainNamesApi, IPGroupsApi, IPsApi, IntegrationsApi, InvoiceContactsApi, InvoicesApi, IssuesApi, ItemsApi, OrdersApi, PaymentsApi, PoliciesApi, ProductCategoriesApi, ProductsApi, SettingsApi, TemplatesApi, TldsApi, UsersApi } from "./api";

export class ApiClient {
    private basePath: string;
    private httpBearerAuth: HttpBearerAuth;
  
    constructor(url: string) {
      if (url) {
        this.basePath = url;
      } else {
        this.basePath =
          process.env.NODE_ENV === "production"
            ? "https://api.hoster.ai"
            : "http://localhost:3000";
      }
      this.httpBearerAuth = new HttpBearerAuth();
    }
  
    public setAccessToken(accessToken: string) {
      this.httpBearerAuth.accessToken = accessToken;
    }
  
    public addons() {
      const addonsApi = new AddonsApi(this.basePath);
      addonsApi.setDefaultAuthentication(this.httpBearerAuth);
      return addonsApi;
    }
  
    public affiliates() {
      const affiliatesApi = new AffiliatesApi(this.basePath);
      affiliatesApi.setDefaultAuthentication(this.httpBearerAuth);
      return affiliatesApi;
    }
  
    public companies() {
      const companiesApi = new CompaniesApi(this.basePath);
      companiesApi.setDefaultAuthentication(this.httpBearerAuth);
      return companiesApi;
    }
  
    public coupons() {
      const couponsApi = new CouponsApi(this.basePath);
      couponsApi.setDefaultAuthentication(this.httpBearerAuth);
      return couponsApi;
    }
  
    public domainCategories() {
      const domainCategoriesApi = new DomainCategoriesApi(this.basePath);
      domainCategoriesApi.setDefaultAuthentication(this.httpBearerAuth);
      return domainCategoriesApi;
    }
  
    public domainContacts() {
      const domainContactsApi = new DomainContactsApi(this.basePath);
      domainContactsApi.setDefaultAuthentication(this.httpBearerAuth);
      return domainContactsApi;
    }
  
    public domainNames() {
      const domainNamesApi = new DomainNamesApi(this.basePath);
      domainNamesApi.setDefaultAuthentication(this.httpBearerAuth);
      return domainNamesApi;
    }
  
    public ipGroups() {
      const ipGroupsApi = new IPGroupsApi(this.basePath);
      ipGroupsApi.setDefaultAuthentication(this.httpBearerAuth);
      return ipGroupsApi;
    }
  
    public ips() {
      const ipsApi = new IPsApi(this.basePath);
      ipsApi.setDefaultAuthentication(this.httpBearerAuth);
      return ipsApi;
    }
  
    public integrations() {
      const integrationsApi = new IntegrationsApi(this.basePath);
      integrationsApi.setDefaultAuthentication(this.httpBearerAuth);
      return integrationsApi;
    }
  
    public invoiceContacts() {
      const invoiceContactsApi = new InvoiceContactsApi(this.basePath);
      invoiceContactsApi.setDefaultAuthentication(this.httpBearerAuth);
      return invoiceContactsApi;
    }
  
    public invoices() {
      const invoicesApi = new InvoicesApi(this.basePath);
      invoicesApi.setDefaultAuthentication(this.httpBearerAuth);
      return invoicesApi;
    }
  
    public issues() {
      const issuesApi = new IssuesApi(this.basePath);
      issuesApi.setDefaultAuthentication(this.httpBearerAuth);
      return issuesApi;
    }
  
    public items() {
      const itemsApi = new ItemsApi(this.basePath);
      itemsApi.setDefaultAuthentication(this.httpBearerAuth);
      return itemsApi;
    }
  
    public orders() {
      const ordersApi = new OrdersApi(this.basePath);
      ordersApi.setDefaultAuthentication(this.httpBearerAuth);
      return ordersApi;
    }
  
    public payments() {
      const paymentsApi = new PaymentsApi(this.basePath);
      paymentsApi.setDefaultAuthentication(this.httpBearerAuth);
      return paymentsApi;
    }
  
    public policies() {
      const policiesApi = new PoliciesApi(this.basePath);
      policiesApi.setDefaultAuthentication(this.httpBearerAuth);
      return policiesApi;
    }
  
    public productCategories() {
      const productCategoriesApi = new ProductCategoriesApi(this.basePath);
      productCategoriesApi.setDefaultAuthentication(this.httpBearerAuth);
      return productCategoriesApi;
    }
  
    public products() {
      const productsApi = new ProductsApi(this.basePath);
      productsApi.setDefaultAuthentication(this.httpBearerAuth);
      return productsApi;
    }
  
    public settings() {
      const settingsApi = new SettingsApi(this.basePath);
      settingsApi.setDefaultAuthentication(this.httpBearerAuth);
      return settingsApi;
    }
  
    public templates() {
      const templatesApi = new TemplatesApi(this.basePath);
      templatesApi.setDefaultAuthentication(this.httpBearerAuth);
      return templatesApi;
    }
  
    public tlds() {
      const tldsApi = new TldsApi(this.basePath);
      tldsApi.setDefaultAuthentication(this.httpBearerAuth);
      return tldsApi;
    }
  
    public users() {
      const usersApi = new UsersApi(this.basePath);
      usersApi.setDefaultAuthentication(this.httpBearerAuth);
      return usersApi;
    }
  }