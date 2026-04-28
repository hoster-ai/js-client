import { Client } from "../client";
import {
  AddonsApi,
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
  PricePolicyApi,
  ProductCategoriesApi,
  ProductsApi,
  TldsApi,
  UsersApi,
} from "../openapi/api";

describe("ApiClient", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("http://localhost:3000");
  });

  it("should create addons API", () => {
    const api = client.admin.addons;
    expect(api).toBeInstanceOf(AddonsApi);
  });

  it("should create templates API", () => {
    const api = client.admin.templates;
    expect(api).toBeInstanceOf(TemplatesApi);
  });

  it("should create companies API", () => {
    const api = client.admin.companies;
    expect(api).toBeInstanceOf(CompaniesApi);
  });

  it("should create coupons API", () => {
    const api = client.admin.coupons;
    expect(api).toBeInstanceOf(CouponsApi);
  });

  it("should create domain categories API", () => {
    const api = client.admin.domainCategories;
    expect(api).toBeInstanceOf(DomainCategoriesApi);
  });

  it("should create domain contacts API", () => {
    const api = client.admin.domainContacts;
    expect(api).toBeInstanceOf(DomainContactsApi);
  });

  it("should create integrations API", () => {
    const api = client.admin.integrations;
    expect(api).toBeInstanceOf(IntegrationsApi);
  });

  it("should create invoice contacts API", () => {
    const api = client.admin.invoiceContacts;
    expect(api).toBeInstanceOf(InvoiceContactsApi);
  });

  it("should create invoices API", () => {
    const api = client.admin.invoices;
    expect(api).toBeInstanceOf(InvoicesApi);
  });

  it("should create issues API", () => {
    const api = client.admin.issues;
    expect(api).toBeInstanceOf(IssuesApi);
  });

  it("should create items API", () => {
    const api = client.admin.items;
    expect(api).toBeInstanceOf(ItemsApi);
  });

  it("should create orders API", () => {
    const api = client.admin.orders;
    expect(api).toBeInstanceOf(OrdersApi);
  });

  it("should create price policy API", () => {
    const api = client.admin.pricePolicy;
    expect(api).toBeInstanceOf(PricePolicyApi);
  });

  it("should create product categories API", () => {
    const api = client.admin.productCategories;
    expect(api).toBeInstanceOf(ProductCategoriesApi);
  });

  it("should create products API", () => {
    const api = client.admin.products;
    expect(api).toBeInstanceOf(ProductsApi);
  });

  it("should create TLDs API", () => {
    const api = client.admin.tlds;
    expect(api).toBeInstanceOf(TldsApi);
  });

  it("should create users API", () => {
    const api = client.admin.users;
    expect(api).toBeInstanceOf(UsersApi);
  });

  it.skip("Try to ban a user without permissions", async () => {
    return client.admin.users
      .banUser("user1", "company1")
      .then((results) => {
        fail('Should not have been successful');
      })
      .catch((error) => {
        expect(error.statusCode).toEqual(401);
      });
  });
});
