# Hoster.AI JavaScript Client

# JavaScript Client for Hoster.AI

This is the JavaScript client for Hoster.AI, providing an easy-to-use interface for interacting with the Hoster.AI API.

## Installation

To install the client, use npm:

```bash
npm install @hosterai/js-client
```

## Usage

First, import the client using npm:

```bash
npm install @hosterai/js-client
```

Or if you prefer using yarn:

```bash
yarn add @hosterai/js-client
```

Then, import the client in your JavaScript file:

```js
import { Client } from '@hosterai/js-client';
```


Then, create a new instance of the client:

```js
const client = new Client('https://api.hoster.ai');
```

If you're running in a development environment, you can omit the URL and the client will default to `http://localhost:3000`.

To authenticate, use the `setAccessToken` method:

```js
client.setAccessToken('your access token');
```

Then, you can use the client to interact with the API. For example, to get a list of addons:

```js
const addons = await client.addons().getAddon("id","testConmany");
```

## API Documentation

The client provides methods for interacting with all parts of the Hoster.AI API. Below is a detailed description of each API category:

### Addons

Methods for managing add-ons.

- `getAddon(id: string, companyId: string)`: Retrieves a specific addon by its ID and company ID.
- `listAddons(companyId: string)`: Lists all addons for a specific company.
- `createAddon(addon: AddonDto)`: Creates a new addon.
- `updateAddon(id: string, addon: AddonDto)`: Updates an existing addon.
- `deleteAddon(id: string)`: Deletes an addon.

### Affiliates

Methods for managing affiliates.

- `getAffiliate(id: string)`: Retrieves a specific affiliate by ID.
- `listAffiliates()`: Lists all affiliates.
- `createAffiliate(affiliate: AffiliateDto)`: Creates a new affiliate.
- `updateAffiliate(id: string, affiliate: AffiliateDto)`: Updates an existing affiliate.
- `deleteAffiliate(id: string)`: Deletes an affiliate.

### Companies

Methods for managing companies.

- `getCompany(id: string)`: Retrieves a specific company by ID.
- `listCompanies()`: Lists all companies.
- `createCompany(company: CompanyDto)`: Creates a new company.
- `updateCompany(id: string, company: CompanyDto)`: Updates an existing company.
- `deleteCompany(id: string)`: Deletes a company.

### Coupons

Methods for managing coupons.

- `getCoupon(id: string)`: Retrieves a specific coupon by ID.
- `listCoupons()`: Lists all coupons.
- `createCoupon(coupon: CouponDto)`: Creates a new coupon.
- `updateCoupon(id: string, coupon: CouponDto)`: Updates an existing coupon.
- `deleteCoupon(id: string)`: Deletes a coupon.

### Domain Categories

Methods for managing domain categories.

- `getDomainCategory(id: string)`: Retrieves a specific domain category by ID.
- `listDomainCategories()`: Lists all domain categories.
- `createDomainCategory(category: DomainCategoryDto)`: Creates a new domain category.
- `updateDomainCategory(id: string, category: DomainCategoryDto)`: Updates an existing domain category.
- `deleteDomainCategory(id: string)`: Deletes a domain category.

### Domain Contacts

Methods for managing domain contacts.

- `getDomainContact(id: string)`: Retrieves a specific domain contact by ID.
- `listDomainContacts()`: Lists all domain contacts.
- `createDomainContact(contact: DomainContactDto)`: Creates a new domain contact.
- `updateDomainContact(id: string, contact: DomainContactDto)`: Updates an existing domain contact.
- `deleteDomainContact(id: string)`: Deletes a domain contact.

### Domain Names

Methods for managing domain names.

- `getDomain(id: string)`: Retrieves a specific domain by ID.
- `listDomains()`: Lists all domains.
- `registerDomain(domain: DomainDto)`: Registers a new domain.
- `transferDomain(domain: DomainDto)`: Transfers a domain.
- `renewDomain(id: string, period: number)`: Renews a domain for a specified period.

### IP Groups

Methods for managing IP groups.

- `getIpGroup(id: string)`: Retrieves a specific IP group by ID.
- `listIpGroups()`: Lists all IP groups.
- `createIpGroup(group: IpGroupDto)`: Creates a new IP group.
- `updateIpGroup(id: string, group: IpGroupDto)`: Updates an existing IP group.
- `deleteIpGroup(id: string)`: Deletes an IP group.

### IPs

Methods for managing individual IPs.

- `getIp(id: string)`: Retrieves a specific IP by ID.
- `listIps()`: Lists all IPs.
- `createIp(ip: IpDto)`: Creates a new IP.
- `updateIp(id: string, ip: IpDto)`: Updates an existing IP.
- `deleteIp(id: string)`: Deletes an IP.

### Integrations

Methods for managing integrations.

- `getIntegration(id: string)`: Retrieves a specific integration by ID.
- `listIntegrations()`: Lists all integrations.
- `createIntegration(integration: IntegrationDto)`: Creates a new integration.
- `updateIntegration(id: string, integration: IntegrationDto)`: Updates an existing integration.
- `deleteIntegration(id: string)`: Deletes an integration.

### Invoice Contacts

Methods for managing invoice contacts.

- `getInvoiceContact(id: string)`: Retrieves a specific invoice contact by ID.
- `listInvoiceContacts()`: Lists all invoice contacts.
- `createInvoiceContact(contact: InvoiceContactDto)`: Creates a new invoice contact.
- `updateInvoiceContact(id: string, contact: InvoiceContactDto)`: Updates an existing invoice contact.
- `deleteInvoiceContact(id: string)`: Deletes an invoice contact.

### Invoices

Methods for managing invoices.

- `getInvoice(id: string)`: Retrieves a specific invoice by ID.
- `listInvoices()`: Lists all invoices.
- `createInvoice(invoice: InvoiceDto)`: Creates a new invoice.
- `updateInvoice(id: string, invoice: InvoiceDto)`: Updates an existing invoice.
- `deleteInvoice(id: string)`: Deletes an invoice.

### Issues

Methods for managing issues.

- `getIssue(id: string)`: Retrieves a specific issue by ID.
- `listIssues()`: Lists all issues.
- `createIssue(issue: IssueDto)`: Creates a new issue.
- `updateIssue(id: string, issue: IssueDto)`: Updates an existing issue.
- `deleteIssue(id: string)`: Deletes an issue.

### Items

Methods for managing items.

- `getItem(id: string)`: Retrieves a specific item by ID.
- `listItems()`: Lists all items.
- `createItem(item: ItemDto)`: Creates a new item.
- `updateItem(id: string, item: ItemDto)`: Updates an existing item.
- `deleteItem(id: string)`: Deletes an item.

### Orders

Methods for managing orders.

- `getOrder(id: string)`: Retrieves a specific order by ID.
- `listOrders()`: Lists all orders.
- `createOrder(order: OrderDto)`: Creates a new order.
- `updateOrder(id: string, order: OrderDto)`: Updates an existing order.
- `deleteOrder(id: string)`: Deletes an order.

### Payments

Methods for managing payments.

- `getPayment(id: string)`: Retrieves a specific payment by ID.
- `listPayments()`: Lists all payments.
- `createPayment(payment: PaymentDto)`: Creates a new payment.
- `updatePayment(id: string, payment: PaymentDto)`: Updates an existing payment.
- `deletePayment(id: string)`: Deletes a payment.

### Policies

Methods for managing policies.

- `getPolicy(id: string)`: Retrieves a specific policy by ID.
- `listPolicies()`: Lists all policies.
- `createPolicy(policy: PolicyDto)`: Creates a new policy.
- `updatePolicy(id: string, policy: PolicyDto)`: Updates an existing policy.
- `deletePolicy(id: string)`: Deletes a policy.

### Product Categories

Methods for managing product categories.

- `getProductCategory(id: string)`: Retrieves a specific product category by ID.
- `listProductCategories()`: Lists all product categories.
- `createProductCategory(category: ProductCategoryDto)`: Creates a new product category.
- `updateProductCategory(id: string, category: ProductCategoryDto)`: Updates an existing product category.
- `deleteProductCategory(id: string)`: Deletes a product category.

### Products

Methods for managing products.

- `getProduct(id: string)`: Retrieves a specific product by ID.
- `listProducts()`: Lists all products.
- `createProduct(product: ProductDto)`: Creates a new product.
- `updateProduct(id: string, product: ProductDto)`: Updates an existing product.
- `deleteProduct(id: string)`: Deletes a product.

### Settings

Methods for managing settings.

- `getSetting(key: string)`: Retrieves a specific setting by key.
- `listSettings()`: Lists all settings.
- `updateSetting(key: string, value: string)`: Updates an existing setting.

### Templates

Methods for managing templates.

- `getTemplate(id: string)`: Retrieves a specific template by ID.
- `listTemplates()`: Lists all templates.
- `createTemplate(template: TemplateDto)`: Creates a new template.
- `updateTemplate(id: string, template: TemplateDto)`: Updates an existing template.
- `deleteTemplate(id: string)`: Deletes a template.

### TLDs

Methods for managing Top-Level Domains (TLDs).

- `getTld(id: string)`: Retrieves a specific TLD by ID.
- `listTlds()`: Lists all TLDs.
- `createTld(tld: TldDto)`: Creates a new TLD.
- `updateTld(id: string, tld: TldDto)`: Updates an existing TLD.
- `deleteTld(id: string)`: Deletes a TLD.

### Users

Methods for managing users.

- `getUser(id: string)`: Retrieves a specific user by ID.
- `listUsers()`: Lists all users.
- `createUser(user: UserDto)`: Creates a new user.
- `updateUser(id: string, user: UserDto)`: Updates an existing user.
- `deleteUser(id: string)`: Deletes a user.

Each of these methods returns a Promise that resolves with the requested data or rejects with an error if the request fails.

For more detailed information about the parameters and return types of these methods, please refer to the TypeScript definitions in the source code.
