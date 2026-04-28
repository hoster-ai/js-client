import { Configuration } from "./openapi";
import {
  AddonsApi,
  ClientInvoiceContactsApi,
  ClientItemsApi,
  ClientOrdersApi,
  ClientUsersApi,
  CompaniesApi,
  CouponsApi,
  DomainCategoriesApi,
  DomainContactsApi,
  GroupRolesApi,
  IntegrationsApi,
  InvoiceContactsApi,
  InvoicesApi,
  IssuesApi,
  ItemsApi,
  OrdersApi,
  PricePolicyApi,
  ProductCategoriesApi,
  ProductsApi,
  TemplatesApi,
  TldsApi,
  TransactionsApi,
  UsersApi,
} from "./openapi/api";

// This is the entrypoint for the openapi package
export * from './openapi/index';

class AdminNamespace {
  private _addons?: AddonsApi;
  private _companies?: CompaniesApi;
  private _coupons?: CouponsApi;
  private _domainCategories?: DomainCategoriesApi;
  private _domainContacts?: DomainContactsApi;
  private _groupRoles?: GroupRolesApi;
  private _integrations?: IntegrationsApi;
  private _invoiceContacts?: InvoiceContactsApi;
  private _invoices?: InvoicesApi;
  private _issues?: IssuesApi;
  private _items?: ItemsApi;
  private _orders?: OrdersApi;
  private _pricePolicy?: PricePolicyApi;
  private _productCategories?: ProductCategoriesApi;
  private _products?: ProductsApi;
  private _templates?: TemplatesApi;
  private _tlds?: TldsApi;
  private _transactions?: TransactionsApi;
  private _users?: UsersApi;

  constructor(private readonly configuration: Configuration) {}

  get addons() { return this._addons ??= new AddonsApi(this.configuration); }
  get companies() { return this._companies ??= new CompaniesApi(this.configuration); }
  get coupons() { return this._coupons ??= new CouponsApi(this.configuration); }
  get domainCategories() { return this._domainCategories ??= new DomainCategoriesApi(this.configuration); }
  get domainContacts() { return this._domainContacts ??= new DomainContactsApi(this.configuration); }
  get groupRoles() { return this._groupRoles ??= new GroupRolesApi(this.configuration); }
  get integrations() { return this._integrations ??= new IntegrationsApi(this.configuration); }
  get invoiceContacts() { return this._invoiceContacts ??= new InvoiceContactsApi(this.configuration); }
  get invoices() { return this._invoices ??= new InvoicesApi(this.configuration); }
  get issues() { return this._issues ??= new IssuesApi(this.configuration); }
  get items() { return this._items ??= new ItemsApi(this.configuration); }
  get orders() { return this._orders ??= new OrdersApi(this.configuration); }
  get pricePolicy() { return this._pricePolicy ??= new PricePolicyApi(this.configuration); }
  get productCategories() { return this._productCategories ??= new ProductCategoriesApi(this.configuration); }
  get products() { return this._products ??= new ProductsApi(this.configuration); }
  get templates() { return this._templates ??= new TemplatesApi(this.configuration); }
  get tlds() { return this._tlds ??= new TldsApi(this.configuration); }
  get transactions() { return this._transactions ??= new TransactionsApi(this.configuration); }
  get users() { return this._users ??= new UsersApi(this.configuration); }
}

class ClientNamespace {
  private _invoiceContacts?: ClientInvoiceContactsApi;
  private _items?: ClientItemsApi;
  private _orders?: ClientOrdersApi;
  private _users?: ClientUsersApi;

  constructor(private readonly configuration: Configuration) {}

  get invoiceContacts() { return this._invoiceContacts ??= new ClientInvoiceContactsApi(this.configuration); }
  get items() { return this._items ??= new ClientItemsApi(this.configuration); }
  get orders() { return this._orders ??= new ClientOrdersApi(this.configuration); }
  get users() { return this._users ??= new ClientUsersApi(this.configuration); }
}

export class Client {
  private basePath: string;
  private configuration: Configuration;
  private _admin?: AdminNamespace;
  private _client?: ClientNamespace;

  constructor(url?: string) {
    if (url) {
      this.basePath = url;
    } else {
      this.basePath =
        process.env.NODE_ENV === "production"
          ? "https://api.hoster.ai"
          : "http://localhost:3000";
    }

    this.configuration = new Configuration({
      basePath: this.basePath,
    });
  }

  public setAccessToken(accessToken: string) {
    this.configuration.accessToken = accessToken;
  }

  public get admin(): AdminNamespace {
    return this._admin ??= new AdminNamespace(this.configuration);
  }

  public get client(): ClientNamespace {
    return this._client ??= new ClientNamespace(this.configuration);
  }
}
