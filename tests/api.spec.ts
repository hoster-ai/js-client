import { ApiClient } from "../client";
import { AddonsApi, AffiliatesApi, TemplatesApi, CompaniesApi, CouponsApi, DomainCategoriesApi, DomainContactsApi, DomainNamesApi, IPGroupsApi, IPsApi, IntegrationsApi, InvoiceContactsApi, InvoicesApi, IssuesApi, ItemsApi, OrdersApi, PaymentsApi, PoliciesApi, ProductCategoriesApi, ProductsApi, SettingsApi, TldsApi, UsersApi } from "../openapi/api";

describe('ApiClient', () => {
  let client: ApiClient;

  beforeEach(() => {
    client = new ApiClient('http://localhost:3000');
  });

  it('should create addons API', () => {
    const api = client.addons();
    expect(api).toBeInstanceOf(AddonsApi);
  });

  it('should create affiliates API', () => {
    const api = client.affiliates();
    expect(api).toBeInstanceOf(AffiliatesApi);
  });

  it('should create templates API', () => {
    const api = client.templates();
    expect(api).toBeInstanceOf(TemplatesApi);
  });

  it('should create companies API', () => {
    const api = client.companies();
    expect(api).toBeInstanceOf(CompaniesApi);
  });

  it('should create coupons API', () => {
    const api = client.coupons();
    expect(api).toBeInstanceOf(CouponsApi);
  });

  it('should create domain categories API', () => {
    const api = client.domainCategories();
    expect(api).toBeInstanceOf(DomainCategoriesApi);
  });

  it('should create domain contacts API', () => {
    const api = client.domainContacts();
    expect(api).toBeInstanceOf(DomainContactsApi);
  });

  it('should create domain names API', () => {
    const api = client.domainNames();
    expect(api).toBeInstanceOf(DomainNamesApi);
  });

  it('should create IP groups API', () => {
    const api = client.ipGroups();
    expect(api).toBeInstanceOf(IPGroupsApi);
  });

  it('should create IPs API', () => {
    const api = client.ips();
    expect(api).toBeInstanceOf(IPsApi);
  });

  it('should create integrations API', () => {
    const api = client.integrations();
    expect(api).toBeInstanceOf(IntegrationsApi);
  });

  it('should create invoice contacts API', () => {
    const api = client.invoiceContacts();
    expect(api).toBeInstanceOf(InvoiceContactsApi);
  });

  it('should create invoices API', () => {
    const api = client.invoices();
    expect(api).toBeInstanceOf(InvoicesApi);
  });

  it('should create issues API', () => {
    const api = client.issues();
    expect(api).toBeInstanceOf(IssuesApi);
  });

  it('should create items API', () => {
    const api = client.items();
    expect(api).toBeInstanceOf(ItemsApi);
  });

  it('should create orders API', () => {
    const api = client.orders();
    expect(api).toBeInstanceOf(OrdersApi);
  });

  it('should create payments API', () => {
    const api = client.payments();
    expect(api).toBeInstanceOf(PaymentsApi);
  });

  it('should create policies API', () => {
    const api = client.policies();
    expect(api).toBeInstanceOf(PoliciesApi);
  });

  it('should create product categories API', () => {
    const api = client.productCategories();
    expect(api).toBeInstanceOf(ProductCategoriesApi);
  });

  it('should create products API', () => {
    const api = client.products();
    expect(api).toBeInstanceOf(ProductsApi);
  });

  it('should create settings API', () => {
    const api = client.settings();
    expect(api).toBeInstanceOf(SettingsApi);
  });

  it('should create templates API', () => {
    const api = client.templates();
    expect(api).toBeInstanceOf(TemplatesApi);
  });

  it('should create TLDs API', () => {
    const api = client.tlds();
    expect(api).toBeInstanceOf(TldsApi);
  });

  it('should create users API', () => {
    const api = client.users();
    expect(api).toBeInstanceOf(UsersApi);
  });



});