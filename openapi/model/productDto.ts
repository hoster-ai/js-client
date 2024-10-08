/**
 * Hoster API
 * Hosting automation. The easy way
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DomainPricesDto } from './domainPricesDto';
import { IpSettingsDto } from './ipSettingsDto';
import { MultilangTextDto } from './multilangTextDto';
import { PricePolicyDto } from './pricePolicyDto';
import { ProductAffiliateDto } from './productAffiliateDto';
import { ProductInformationDto } from './productInformationDto';
import { ProductTemplateDto } from './productTemplateDto';

export class ProductDto {
    /**
    * A unique identifier for the product
    */
    'id'?: string;
    /**
    * The name of the product.
    */
    'name': string;
    /**
    * The unique identifier of the company that owns the product.
    */
    'companyId'?: string;
    /**
    * A boolean that indicates if a a version of the product is active.
    */
    'activeVersion'?: boolean = true;
    /**
    * A number that indicates the version of the product.
    */
    'version'?: number = 1;
    /**
    * An array that holds all the versions of a product available.
    */
    'versionsIds'?: number;
    'integrationId': string;
    /**
    * The product\'s category unique identifier.
    */
    'categoryId'?: string;
    /**
    * Indicates if a product is enabled.
    */
    'enabled'?: boolean = true;
    /**
    * Indicates if auto renew option is active for this product .
    */
    'autoRenew'?: boolean = false;
    /**
    * An array of unique identifiers that represent all possible upgrades that can be applied.
    */
    'upgradeProductIds'?: Array<string>;
    /**
    * An array of unique identifiers that represent all possible downgrades that can be applied.
    */
    'downgradeProductIds'?: Array<string>;
    /**
    * An array that holds the title and the written language of the product title.
    */
    'title': Array<MultilangTextDto>;
    /**
    * An array that holds the description and the written language of the product description.
    */
    'description'?: Array<MultilangTextDto>;
    /**
    * Indicates if a product id a domain type product.
    */
    'isDomain'?: boolean = false;
    /**
    * Indicates if the product requires a domain name.
    */
    'requireDomain'?: boolean = false;
    /**
    * The number of days before the registry\'s expiration date, that a domain can be renewed
    */
    'expirationDateOffset'?: number;
    /**
    * A number that indicates the number of days a trial on a product lasts. 0 indicates that there is no trial in this product.
    */
    'trialDays'?: number = 0;
    /**
    * A number that indicates in how many days the product will be suspended.
    */
    'suspendedAfterDays'?: number = 0;
    /**
    * A number that indicates days until user sees the product as deleted.
    */
    'softDeleteDays'?: number = 0;
    /**
    * A number that indicates days until the product is actually deleted.
    */
    'hardDeleteDays'?: number = 0;
    /**
    * Restore penalty price
    */
    'restorePrice'?: number = 0;
    /**
    * An array that holds the templates used for this product.
    */
    'templates'?: Array<ProductTemplateDto>;
    /**
    * Default price policies
    */
    'defaultPrices': Array<PricePolicyDto>;
    /**
    * Premium price policies
    */
    'premiumPrices'?: Array<PricePolicyDto>;
    /**
    * An object that contains all the specific prices for a domain name.
    */
    'domainPrices'?: DomainPricesDto;
    /**
    * Indicates the type of the invoice.
    */
    'invoiceType'?: ProductDto.InvoiceTypeEnum;
    /**
    * A unique identifier of the tld selected.
    */
    'tldId'?: string;
    /**
    * Sets the settings for an ip.
    */
    'ipSettings'?: IpSettingsDto;
    /**
    * This number indicates the number available left for sale.
    */
    'stock'?: number;
    /**
    * An array that holds the unique identifier of the addons.
    */
    'addonIds'?: Array<string>;
    /**
    * 
    */
    'options'?: Array<object>;
    /**
    * Informations about an affiliate product.
    */
    'affiliate'?: ProductAffiliateDto;
    /**
    * An array that contains informations about the product.
    */
    'information'?: Array<ProductInformationDto>;
    /**
    * An array that holds keywords for product indentification.
    */
    'tags'?: Array<string>;
    /**
    * The client has the option to activate a service that has been deactivated. Here, we determine the duration for which it will remain open
    */
    'postponeDays'?: number;
    /**
    * A number that indicates how many times the user can postpone within the last 365 days.
    */
    'postponeTimesPerYear'?: number;
    /**
    * Indicates if you can delete this product
    */
    'deletable'?: boolean;
    /**
    * The date a product created.
    */
    'createdAt'?: Date;
    /**
    * The date a product updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "activeVersion",
            "baseName": "activeVersion",
            "type": "boolean"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "versionsIds",
            "baseName": "versionsIds",
            "type": "number"
        },
        {
            "name": "integrationId",
            "baseName": "integrationId",
            "type": "string"
        },
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "autoRenew",
            "baseName": "autoRenew",
            "type": "boolean"
        },
        {
            "name": "upgradeProductIds",
            "baseName": "upgradeProductIds",
            "type": "Array<string>"
        },
        {
            "name": "downgradeProductIds",
            "baseName": "downgradeProductIds",
            "type": "Array<string>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "Array<MultilangTextDto>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "Array<MultilangTextDto>"
        },
        {
            "name": "isDomain",
            "baseName": "isDomain",
            "type": "boolean"
        },
        {
            "name": "requireDomain",
            "baseName": "requireDomain",
            "type": "boolean"
        },
        {
            "name": "expirationDateOffset",
            "baseName": "expirationDateOffset",
            "type": "number"
        },
        {
            "name": "trialDays",
            "baseName": "trialDays",
            "type": "number"
        },
        {
            "name": "suspendedAfterDays",
            "baseName": "suspendedAfterDays",
            "type": "number"
        },
        {
            "name": "softDeleteDays",
            "baseName": "softDeleteDays",
            "type": "number"
        },
        {
            "name": "hardDeleteDays",
            "baseName": "hardDeleteDays",
            "type": "number"
        },
        {
            "name": "restorePrice",
            "baseName": "restorePrice",
            "type": "number"
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<ProductTemplateDto>"
        },
        {
            "name": "defaultPrices",
            "baseName": "defaultPrices",
            "type": "Array<PricePolicyDto>"
        },
        {
            "name": "premiumPrices",
            "baseName": "premiumPrices",
            "type": "Array<PricePolicyDto>"
        },
        {
            "name": "domainPrices",
            "baseName": "domainPrices",
            "type": "DomainPricesDto"
        },
        {
            "name": "invoiceType",
            "baseName": "invoiceType",
            "type": "ProductDto.InvoiceTypeEnum"
        },
        {
            "name": "tldId",
            "baseName": "tldId",
            "type": "string"
        },
        {
            "name": "ipSettings",
            "baseName": "ipSettings",
            "type": "IpSettingsDto"
        },
        {
            "name": "stock",
            "baseName": "stock",
            "type": "number"
        },
        {
            "name": "addonIds",
            "baseName": "addonIds",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<object>"
        },
        {
            "name": "affiliate",
            "baseName": "affiliate",
            "type": "ProductAffiliateDto"
        },
        {
            "name": "information",
            "baseName": "information",
            "type": "Array<ProductInformationDto>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "postponeDays",
            "baseName": "postponeDays",
            "type": "number"
        },
        {
            "name": "postponeTimesPerYear",
            "baseName": "postponeTimesPerYear",
            "type": "number"
        },
        {
            "name": "deletable",
            "baseName": "deletable",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ProductDto.attributeTypeMap;
    }
}

export namespace ProductDto {
    export enum InvoiceTypeEnum {
        Snapshot = <any> 'SNAPSHOT',
        Prorata = <any> 'PRORATA',
        Perhour = <any> 'PERHOUR',
        Permonth = <any> 'PERMONTH'
    }
}
