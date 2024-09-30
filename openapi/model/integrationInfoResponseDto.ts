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
import { ActionFieldDto } from './actionFieldDto';
import { ListActionDto } from './listActionDto';
import { MenuItemDto } from './menuItemDto';
import { TabDto } from './tabDto';

export class IntegrationInfoResponseDto {
    /**
    * The name of the service integration.
    */
    'name'?: string;
    /**
    * The string contains the path for the service integration\'s logo.
    */
    'logo'?: string;
    /**
    * The title of the service integration.
    */
    'title'?: string;
    /**
    * A string providing a brief overview or description of the integration.
    */
    'description'?: string;
    /**
    * An array that holds all the action fields.
    */
    'actionFields'?: Array<ActionFieldDto>;
    /**
    * An array that holds all the tabs for the product.
    */
    'productTabs'?: Array<TabDto>;
    /**
    * An array that holds all the list actions.
    */
    'listActions'?: Array<ListActionDto>;
    /**
    * An array that holds tabs about the product settings.
    */
    'settings'?: Array<TabDto>;
    /**
    * An array that holds all the menu items.
    */
    'menuItems'?: Array<MenuItemDto>;
    /**
    * An array that holds all the required fields for the product.
    */
    'requiredFields'?: string;
    /**
    * An array that holds all the meta keys need to be returned for the product.
    */
    'returnMetaKeys'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "actionFields",
            "baseName": "actionFields",
            "type": "Array<ActionFieldDto>"
        },
        {
            "name": "productTabs",
            "baseName": "productTabs",
            "type": "Array<TabDto>"
        },
        {
            "name": "listActions",
            "baseName": "listActions",
            "type": "Array<ListActionDto>"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "Array<TabDto>"
        },
        {
            "name": "menuItems",
            "baseName": "menuItems",
            "type": "Array<MenuItemDto>"
        },
        {
            "name": "requiredFields",
            "baseName": "requiredFields",
            "type": "string"
        },
        {
            "name": "returnMetaKeys",
            "baseName": "returnMetaKeys",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IntegrationInfoResponseDto.attributeTypeMap;
    }
}

