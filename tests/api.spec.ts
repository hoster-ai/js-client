import { Client } from "../client";
import {
  AddonsApi,
  AffiliatesApi,
  TemplatesApi,
  CompaniesApi,
  CouponsApi,
  DomainCategoriesApi,
  DomainContactsApi,
  IntegrationsApi,
  InvoiceContactsApi,
  InvoicesApi,
  IssuesApi,
  ItemsApi,
  OrdersApi,
  PoliciesApi,
  ProductCategoriesApi,
  ProductsApi,
  TldsApi,
  UsersApi,
} from "../openapi/api";

describe("ApiClient", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("https://api.hoster.ai");
  });

  it("should create addons API", () => {
    const api = client.addons();
    expect(api).toBeInstanceOf(AddonsApi);
  });

  it("should create affiliates API", () => {
    const api = client.affiliates();
    expect(api).toBeInstanceOf(AffiliatesApi);
  });

  it("should create templates API", () => {
    const api = client.templates();
    expect(api).toBeInstanceOf(TemplatesApi);
  });

  it("should create companies API", () => {
    const api = client.companies();
    expect(api).toBeInstanceOf(CompaniesApi);
  });

  it("should create coupons API", () => {
    const api = client.coupons();
    expect(api).toBeInstanceOf(CouponsApi);
  });

  it("should create domain categories API", () => {
    const api = client.domainCategories();
    expect(api).toBeInstanceOf(DomainCategoriesApi);
  });

  it("should create domain contacts API", () => {
    const api = client.domainContacts();
    expect(api).toBeInstanceOf(DomainContactsApi);
  });

  it("should create integrations API", () => {
    const api = client.integrations();
    expect(api).toBeInstanceOf(IntegrationsApi);
  });

  it("should create invoice contacts API", () => {
    const api = client.invoiceContacts();
    expect(api).toBeInstanceOf(InvoiceContactsApi);
  });

  it("should create invoices API", () => {
    const api = client.invoices();
    expect(api).toBeInstanceOf(InvoicesApi);
  });

  it("should create issues API", () => {
    const api = client.issues();
    expect(api).toBeInstanceOf(IssuesApi);
  });

  it("should create items API", () => {
    const api = client.items();
    expect(api).toBeInstanceOf(ItemsApi);
  });

  it("should create orders API", () => {
    const api = client.orders();
    expect(api).toBeInstanceOf(OrdersApi);
  });

  it("should create policies API", () => {
    const api = client.policies();
    expect(api).toBeInstanceOf(PoliciesApi);
  });

  it("should create product categories API", () => {
    const api = client.productCategories();
    expect(api).toBeInstanceOf(ProductCategoriesApi);
  });

  it("should create products API", () => {
    const api = client.products();
    expect(api).toBeInstanceOf(ProductsApi);
  });

  it("should create templates API", () => {
    const api = client.templates();
    expect(api).toBeInstanceOf(TemplatesApi);
  });

  it("should create TLDs API", () => {
    const api = client.tlds();
    expect(api).toBeInstanceOf(TldsApi);
  });

  it("should create users API", () => {
    const api = client.users();
    expect(api).toBeInstanceOf(UsersApi);
  });

  it.only("Try to ban a user without permissions", async () => {
    return client
      .users()
      .banUser("user1", "company1")
      .then((results) => {
        fail('Should not have been successful');
      })
      .catch((error) => {
        expect(error.statusCode).toEqual(401);
      });
  });
});
