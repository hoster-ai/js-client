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

- `createAddon(companyId: string, addonRequestDto: AddonRequestDto)`: Creates a new addon.
- `deleteAddon(companyId: string, id: string)`: Deletes an addon.
- `getAddon(id: string, companyId: string)`: Retrieves a specific addon by its ID and company ID.
- `getAddons(companyId: string, query?: string, currentPage?: number, perPage?: number)`: Lists all addons for a specific company with optional filtering and pagination.
- `updateAddon(id: string, companyId: string, addonRequestDto: AddonRequestDto)`: Updates an existing addon.

Example:
```js
const addon = await client.addons().getAddon("addonId", "companyId");
```

### Affiliates

Methods for managing affiliates.

- `createAffiliate(companyId: string, affiliateRequestDto: AffiliateRequestDto)`: Creates a new affiliate.
- `deleteAffiliate(companyId: string, id: string)`: Deletes an affiliate.
- `getAffiliate(companyId: string, id: string)`: Retrieves a specific affiliate by ID.
- `getAffiliates(companyId: string, productId?: string, currentPage?: number, perPage?: number)`: Lists all affiliates with optional filtering and pagination.
- `updateAffiliate(companyId: string, id: string, affiliateRequestDto: AffiliateRequestDto)`: Updates an existing affiliate.

Example:
```js
const affiliates = await client.affiliates().getAffiliates("companyId");
```

### Companies

Methods for managing companies.

- `createCompany(companyRequestDto: CompanyRequestDto)`: Creates a new company.
- `deleteCompany(companyId: string)`: Deletes a company.
- `editComment(companyId: string, editCommentRequest: EditCommentRequest)`: Edits the comment for a company.
- `getBalance(companyId: string)`: Retrieves the balance of a company.
- `getCompanies(companyId: string, perPage?: number, currentPage?: number)`: Lists all companies with pagination.
- `getCompany(companyId: string)`: Retrieves a specific company by ID.
- `getCompanyPublicInfo(companyId: string)`: Retrieves public information for a company.
- `getCompanyPublicInfoByUrl(username: string)`: Retrieves public information for a company by username.
- `installIntegration(companyId: string, ...)`: Installs an integration for a company.
- `lockCompany(companyId: string)`: Locks a company.
- `setCreditBalance(companyId: string, ...)`: Sets the credit balance for a company.
- `uninstallIntegration(companyId: string, ...)`: Uninstalls an integration from a company.
- `unlockCompany(companyId: string)`: Unlocks a company.
- `updateCompany(companyId: string, companyRequestDto: CompanyRequestDto)`: Updates an existing company.
- `updateCompanyBrand(companyId: string, ...)`: Updates company branding.
- `updateCompanyUserRoles(email: string, ...)`: Updates user roles for a company.
- `updateCompanyUsername(companyId: string, ...)`: Updates company username.
- `updateDefaultLanguage(companyId: string, ...)`: Updates default language for a company.
- `updatePrivacyPolicyUrl(companyId: string, ...)`: Updates privacy policy URL.

Example:
```js
const company = await client.companies().getCompany("companyId");
```

### Coupons

Methods for managing coupons.

- `createCoupon(companyId: string, couponRequestDto: CouponRequestDto)`: Creates a new coupon.
- `deleteCoupon(id: string, companyId: string)`: Deletes a coupon.
- `getCoupon(id: string, companyId: string)`: Retrieves a specific coupon by ID.
- `getCoupons(companyId: string, productIds: Array<any>, fromStartDate?: string, toStartDate?: string, fromEndDate?: string, toEndDate?: string, currentPage?: number, perPage?: number)`: Lists all coupons with filtering options.
- `updateCoupon(companyId: string, id: string, couponRequestDto: CouponRequestDto)`: Updates an existing coupon.

Example:
```js
const coupon = await client.coupons().getCoupon("couponId", "companyId");
```

### Domain Categories

Methods for managing domain categories.

- `createDomainCategory(companyId: string, domainCategoryRequestDto: DomainCategoryRequestDto)`: Creates a new domain category.
- `deleteDomainCategory(companyId: string, id: string)`: Deletes a domain category.
- `getDomainCategories(companyId: string, description?: string, currentPage?: number, perPage?: number)`: Lists all domain categories with optional filtering.
- `getDomainCategory(companyId: string, id: string)`: Retrieves a specific domain category by ID.
- `updateDomainCategory(companyId: string, id: string, domainCategoryRequestDto: DomainCategoryRequestDto)`: Updates an existing domain category.

Example:
```js
const categories = await client.domainCategories().getDomainCategories("companyId");
```

### Domain Contacts

Methods for managing domain contacts.

- `createDomainContact(companyId: string, domainContactRequestDto: DomainContactRequestDto)`: Creates a new domain contact.
- `deleteDomainContact(id: string, companyId: string)`: Deletes a domain contact.
- `getDomainContact(id: string, companyId: string)`: Retrieves a specific domain contact by ID.
- `getDomainContacts(companyId: string, query?: string, country?: string, userId?: string, currentPage?: number, perPage?: number)`: Lists all domain contacts with filtering options.
- `updateDomainContact(companyId: string, id: string, domainContactRequestDto: DomainContactRequestDto)`: Updates an existing domain contact.
- `updateDomainContactAfnicAdditionalData(id: string, companyId: string, afnicAdditionalDataDto: AfnicAdditionalDataDto)`: Updates Afnic additional data.
- `updateDomainContactCatAdditionalData(id: string, companyId: string, catAdditionalDataDto: CatAdditionalDataDto)`: Updates Cat additional data.
- `updateDomainContactDeAdditionalData(id: string, companyId: string, ...)`: Updates DE additional data.
- `updateDomainContactEsAdditionalData(id: string, companyId: string, ...)`: Updates ES additional data.
- `updateDomainContactEuBeAdditionalData(id: string, companyId: string, ...)`: Updates EU/BE additional data.
- `updateDomainContactItAdditionalData(id: string, companyId: string, ...)`: Updates IT additional data.
- `updateDomainContactLvAdditionalData(id: string, companyId: string, ...)`: Updates LV additional data.
- `updateDomainContactNlAdditionalData(id: string, companyId: string, ...)`: Updates NL additional data.
- `updateDomainContactProAdditionalData(id: string, companyId: string, ...)`: Updates Pro additional data.
- `updateDomainContactUkAdditionalData(id: string, companyId: string, ...)`: Updates UK additional data.
- `updateDomainContactUsAdditionalData(id: string, companyId: string, ...)`: Updates US additional data.

Example:
```js
const contact = await client.domainContacts().getDomainContact("contactId", "companyId");
```


### Integrations

Methods for managing integrations.

- `acceptUrlsValidationResults(...)`: Accepts the results of a URL validation job.
- `activateIntegration(companyId: string, ...)`: Activates an integration.
- `createIntegration(companyId: string, ...)`: Creates a new integration.
- `deactivateIntegration(companyId: string, ...)`: Deactivates an integration.
- `deactivateMaintenance(companyId: string, ...)`: Deactivates maintenance mode.
- `deleteIntegration(companyId: string, ...)`: Deletes an integration.
- `getIntegration(companyId: string, ...)`: Retrieves a specific integration.
- `getIntegrationPublicInfo(id: string)`: Retrieves public information for an integration.
- `getIntegrations(type?: string)`: Lists all integrations.
- `publishIntegration(id: string)`: Publishes an integration.
- `refreshSecret(companyId: string, ...)`: Refreshes integration secret.
- `unpublishIntegration(id: string)`: Unpublishes an integration.
- `updateIntegration(companyId: string, ...)`: Updates an existing integration.
- `updateIntegrationInfo(companyId: string, ...)`: Updates integration information.
- `validateIntegration(companyId: string, ...)`: Validates an integration.
- `validateItemAttributes(companyId: string, ...)`: Validates item attributes.
- `validateProductAttributes(companyId: string, ...)`: Validates product attributes.

Example:
```js
const integrations = await client.integrations().getIntegrations();
```

### Invoice Contacts

Methods for managing invoice contacts.

- `createInvoiceContact(companyId: string, ...)`: Creates a new invoice contact.
- `deleteInvoiceContact(id: string, ...)`: Deletes an invoice contact.
- `getInvoiceContact(id: string, ...)`: Retrieves a specific invoice contact by ID.
- `getInvoiceContacts(companyId: string, ...)`: Lists all invoice contacts.
- `updateInvoiceContact(id: string, ...)`: Updates an existing invoice contact.

Example:
```js
const invoiceContacts = await client.invoiceContacts().getInvoiceContacts("companyId");
```

### Invoices

Methods for managing invoices.

- `cancelInvoice(id: string, ...)`: Cancels an invoice.
- `exportInvoice(companyId: string, ...)`: Exports an invoice.
- `getInvoice(id: string, ...)`: Retrieves a specific invoice by ID.
- `getInvoices(companyId: string, ...)`: Lists all invoices.
- `invoiceControllerIssueInvoice(orderId: string, ...)`: Issues an invoice for an order.

Example:
```js
const invoice = await client.invoices().getInvoice("invoiceId");
```

### Issues

Methods for managing issues.

- `createIssue(companyId: string, ...)`: Creates a new issue.
- `deleteIssue(companyId: string, id: string)`: Deletes an issue.
- `getIssue(companyId: string, id: string)`: Retrieves a specific issue by ID.
- `getIssues(companyId: string, ...)`: Lists all issues.
- `issuesControllerExportIssuesToCsv(companyId: string, ...)`: Exports issues to CSV.
- `updateIssue(companyId: string, id: string, ...)`: Updates an existing issue.

Example:
```js
const issues = await client.issues().getIssues("companyId");
```

### Items

Methods for managing items.

- `acceptItemTransfer(companyid: string, ...)`: Accepts the transfer of items.
- `addAffiliateUser(id: string, ...)`: Adds an affiliate user to an item.
- `attachItemToBundle(id: string, ...)`: Attaches an item to a bundle.
- `cancelItem(id: string, ...)`: Cancels an item.
- `deleteItem(id: string, ...)`: Deletes an item.
- `detachItemFromBundle(id: string, ...)`: Detaches an item from a bundle.
- `getItem(companyId: string, id: string)`: Retrieves a specific item by ID.
- `getItems(companyId: string, ...)`: Lists all items.
- `getItemsForTransfer(companyid: string, ...)`: Gets items available for transfer.
- `itemControllerItemOwnershipCertificate(id: string, ...)`: Generates item ownership certificate.
- `itemControllerItemTransfer(id: string, ...)`: Transfers an item.
- `postponeItem(id: string, ...)`: Postpones an item.
- `removeAffiliateFromItem(id: string, ...)`: Removes an affiliate from an item.
- `restorePrice(id: string, ...)`: Restores the price of an item.
- `retryItem(id: string, ...)`: Retries an item operation.
- `setCustomPrices(id: string, ...)`: Sets custom prices for an item.
- `suspendItem(id: string, ...)`: Suspends an item.
- `unsuspendItem(id: string, ...)`: Unsuspends an item.
- `updateItem(id: string, ...)`: Updates an existing item.

Example:
```js
const item = await client.items().getItem("companyId", "itemId");
```

### Orders

Methods for managing orders.

- `orderControllerAddItem(id: string, ...)`: Adds an item to an order.
- `orderControllerChangeInvoiceContact(id: string, ...)`: Changes the invoice contact for an order.
- `orderControllerCreateOrder(companyId: string, ...)`: Creates a new order.
- `orderControllerDeleteOrder(id: string, ...)`: Deletes an order.
- `orderControllerGetOrder(companyId: string, id: string)`: Retrieves a specific order by ID.
- `orderControllerGetPaginatedOrders(companyId: string, ...)`: Lists all orders with pagination.
- `orderControllerItemRefund(companyId: string, ...)`: Processes an item refund.
- `orderControllerRemoveItem(id: string, ...)`: Removes an item from an order.
- `orderControllerResendOrderEmail(companyId: string, ...)`: Resends order email.
- `orderControllerResendPaymentEmail(companyId: string, ...)`: Resends payment email.

Example:
```js
const order = await client.orders().orderControllerGetOrder("companyId", "orderId");
```

### Policies

Methods for managing policies.

- `createPolicy(companyId: string, ...)`: Creates a new policy.
- `deletePolicy(id: string, ...)`: Deletes a policy.
- `getPolicies(companyId: string, ...)`: Lists all policies.
- `getPolicy(id: string, ...)`: Retrieves a specific policy by ID.
- `updatePolicy(companyId: string, id: string, ...)`: Updates an existing policy.

Example:
```js
const policies = await client.policies().getPolicies("companyId");
```

### Product Categories

Methods for managing product categories.

- `createProductCategory(companyId: string, ...)`: Creates a new product category.
- `deleteProductCategory(id: string, ...)`: Deletes a product category.
- `getProductCategories(companyId: string, ...)`: Lists all product categories.
- `getProductCategory(id: string, ...)`: Retrieves a specific product category by ID.
- `updateProductCategory(id: string, ...)`: Updates an existing product category.

Example:
```js
const categories = await client.productCategories().getProductCategories("companyId");
```

### Products

Methods for managing products.

- `activateProduct(id: string, ...)`: Activates a product.
- `archiveProduct(id: string, ...)`: Archives a product.
- `createProduct(companyId: string, ...)`: Creates a new product.
- `deactivateProduct(id: string, ...)`: Deactivates a product.
- `deleteProduct(id: string, ...)`: Deletes a product.
- `getProduct(id: string, ...)`: Retrieves a specific product by ID.
- `getProducts(companyId: string, ...)`: Lists all products.
- `restoreArchivedProduct(id: string, ...)`: Restores an archived product.
- `updateProduct(id: string, ...)`: Updates an existing product.

Example:
```js
const products = await client.products().getProducts("companyId");
```

### Templates

Methods for managing templates.

- `createTemplate(companyId: string, ...)`: Creates a new template.
- `deleteTemplate(id: string, ...)`: Deletes a template.
- `getTemplate(companyId: string, id: string)`: Retrieves a specific template by ID.
- `getTemplates(companyId: string, ...)`: Lists all templates.
- `updateTemplate(companyId: string, id: string, ...)`: Updates an existing template.

Example:
```js
const templates = await client.templates().getTemplates("companyId");
```

### TLDs

Methods for managing Top-Level Domains (TLDs).

- `createTld(companyId: string, ...)`: Creates a new TLD.
- `deleteTld(companyId: string, id: string)`: Deletes a TLD.
- `getTld(companyId: string, id: string)`: Retrieves a specific TLD by ID.
- `getTlds(companyId: string, ...)`: Lists all TLDs.
- `updateTld(companyId: string, id: string, ...)`: Updates an existing TLD.

Example:
```js
const tld = await client.tlds().getTld("companyId", "tldId");
```

### Users

Methods for managing users.

- `addUserNotificationEmail(id: string, ...)`: Adds a notification email for a user.
- `banUser(id: string, companyId: string)`: Bans a user.
- `createUserCustomToken(companyId: string, ...)`: Creates a custom token for a user.
- `deleteUser(id: string, ...)`: Deletes a user.
- `getUser(id: string, ...)`: Retrieves a specific user by ID.
- `getUserAdditionalNotificationEmails(id: string, ...)`: Gets additional notification emails for a user.
- `getUserBalance(id: string, ...)`: Gets the balance of a user.
- `getUserComments(id: string, ...)`: Gets comments for a user.
- `getUserTransactions(companyId: string, userId: string, ...)`: Gets transactions for a user.
- `getUsers(companyId: string, ...)`: Lists all users.
- `lockUser(id: string, ...)`: Locks a user.
- `removeUserAdditionalNotificationEmails(id: string, ...)`: Removes additional notification emails.
- `setUserCreditBalance(id: string, ...)`: Sets the credit balance for a user.
- `unbanUser(companyId: string, userId: string)`: Unbans a user.
- `unlockUser(companyId: string, userId: string)`: Unlocks a user.
- `updateUserBalance(id: string, ...)`: Updates the balance of a user.
- `updateUserComments(id: string, ...)`: Updates comments for a user.
- `updateUserCustomPricePolicies(id: string, ...)`: Updates custom price policies for a user.
- `updateUserInvoiceContact(companyId: string, userId: string, ...)`: Updates invoice contact for a user.
- `updateUserInvoiceInterval(companyId: string, userId: string, ...)`: Updates invoice interval for a user.
- `updateUserLanguages(id: string, ...)`: Updates languages for a user.
- `updateUserTags(id: string, ...)`: Updates tags for a user.

Example:
```js
const users = await client.users().getUsers("companyId");
```

Each of these methods returns a Promise that resolves with the requested data or rejects with an error if the request fails.

For more detailed information about the parameters and return types of these methods, please refer to the TypeScript definitions in the source code.
