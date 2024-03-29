# Hoster.AI JavaScript Client
This is the JavaScript client for Hoster.AI. It provides an easy-to-use interface for interacting with the Hoster.AI API.

## Installation
To install the client, use npm:
```bash
npm install @hosterai/js-client
```

## Usage
First, import the client:
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
const addons = await client.addons().listAddons();
```

## API
The client provides methods for interacting with all parts of the Hoster.AI API, including:

* Addons
* Affiliates
* Companies
* Coupons
* Domain Categories
* Domain Contacts
* Domain Names
* IP Groups
* IPs
* Integrations
* Invoice Contacts
* Invoices
* Issues
* Items
* Orders
* Payments
* Policies
* Product Categories
* Products
* Settings
* Templates
* TLDs
* Users

Each of these categories has its own set of methods for interacting with the API.