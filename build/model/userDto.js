"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor() {
        /**
        * Indicates user account balance
        */
        this['balance'] = 0;
    }
    static getAttributeTypeMap() {
        return UserDto.attributeTypeMap;
    }
}
exports.UserDto = UserDto;
UserDto.discriminator = undefined;
UserDto.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "defaultLanguage",
        "baseName": "defaultLanguage",
        "type": "UserDto.DefaultLanguageEnum"
    },
    {
        "name": "lockedPayments",
        "baseName": "lockedPayments",
        "type": "boolean"
    },
    {
        "name": "banned",
        "baseName": "banned",
        "type": "boolean"
    },
    {
        "name": "currencyThreeLetterCode",
        "baseName": "currencyThreeLetterCode",
        "type": "string"
    },
    {
        "name": "parentCompanyId",
        "baseName": "parentCompanyId",
        "type": "string"
    },
    {
        "name": "ownInvoiceContact",
        "baseName": "ownInvoiceContact",
        "type": "DefaultInvoiceContact"
    },
    {
        "name": "policyId",
        "baseName": "policyId",
        "type": "string"
    },
    {
        "name": "customPricePolicies",
        "baseName": "customPricePolicies",
        "type": "CustomPricePolicies"
    },
    {
        "name": "customAddonPricePolicies",
        "baseName": "customAddonPricePolicies",
        "type": "CustomAddonPricePolicies"
    },
    {
        "name": "customAffiliates",
        "baseName": "customAffiliates",
        "type": "CustomAffiliates"
    },
    {
        "name": "comments",
        "baseName": "comments",
        "type": "Array<string>"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency"
    },
    {
        "name": "invoiceInterval",
        "baseName": "invoiceInterval",
        "type": "UserDto.InvoiceIntervalEnum"
    },
    {
        "name": "acceptedNotificationMethods",
        "baseName": "acceptedNotificationMethods",
        "type": "AcceptedNotificationMethods"
    },
    {
        "name": "persistentCart",
        "baseName": "persistentCart",
        "type": "PersistentCart"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "string"
    },
    {
        "name": "logs",
        "baseName": "logs",
        "type": "string"
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "Settings"
    },
    {
        "name": "additionalNotificationEmails",
        "baseName": "additionalNotificationEmails",
        "type": "string"
    },
    {
        "name": "creditBalance",
        "baseName": "creditBalance",
        "type": "number"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "paymentSubscriptions",
        "baseName": "paymentSubscriptions",
        "type": "Array<PaymentSubscriptionDto>"
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
    }
];
(function (UserDto) {
    let DefaultLanguageEnum;
    (function (DefaultLanguageEnum) {
        DefaultLanguageEnum[DefaultLanguageEnum["Aa"] = 'aa'] = "Aa";
        DefaultLanguageEnum[DefaultLanguageEnum["Af"] = 'af'] = "Af";
        DefaultLanguageEnum[DefaultLanguageEnum["Ak"] = 'ak'] = "Ak";
        DefaultLanguageEnum[DefaultLanguageEnum["Sq"] = 'sq'] = "Sq";
        DefaultLanguageEnum[DefaultLanguageEnum["Am"] = 'am'] = "Am";
        DefaultLanguageEnum[DefaultLanguageEnum["Ar"] = 'ar'] = "Ar";
        DefaultLanguageEnum[DefaultLanguageEnum["An"] = 'an'] = "An";
        DefaultLanguageEnum[DefaultLanguageEnum["Hy"] = 'hy'] = "Hy";
        DefaultLanguageEnum[DefaultLanguageEnum["As"] = 'as'] = "As";
        DefaultLanguageEnum[DefaultLanguageEnum["Av"] = 'av'] = "Av";
        DefaultLanguageEnum[DefaultLanguageEnum["Ae"] = 'ae'] = "Ae";
        DefaultLanguageEnum[DefaultLanguageEnum["Ay"] = 'ay'] = "Ay";
        DefaultLanguageEnum[DefaultLanguageEnum["Az"] = 'az'] = "Az";
        DefaultLanguageEnum[DefaultLanguageEnum["Bm"] = 'bm'] = "Bm";
        DefaultLanguageEnum[DefaultLanguageEnum["Ba"] = 'ba'] = "Ba";
        DefaultLanguageEnum[DefaultLanguageEnum["Eu"] = 'eu'] = "Eu";
        DefaultLanguageEnum[DefaultLanguageEnum["Be"] = 'be'] = "Be";
        DefaultLanguageEnum[DefaultLanguageEnum["Bn"] = 'bn'] = "Bn";
        DefaultLanguageEnum[DefaultLanguageEnum["Bh"] = 'bh'] = "Bh";
        DefaultLanguageEnum[DefaultLanguageEnum["Bi"] = 'bi'] = "Bi";
        DefaultLanguageEnum[DefaultLanguageEnum["Bs"] = 'bs'] = "Bs";
        DefaultLanguageEnum[DefaultLanguageEnum["Br"] = 'br'] = "Br";
        DefaultLanguageEnum[DefaultLanguageEnum["Bg"] = 'bg'] = "Bg";
        DefaultLanguageEnum[DefaultLanguageEnum["My"] = 'my'] = "My";
        DefaultLanguageEnum[DefaultLanguageEnum["Ca"] = 'ca'] = "Ca";
        DefaultLanguageEnum[DefaultLanguageEnum["Ch"] = 'ch'] = "Ch";
        DefaultLanguageEnum[DefaultLanguageEnum["Ce"] = 'ce'] = "Ce";
        DefaultLanguageEnum[DefaultLanguageEnum["Ny"] = 'ny'] = "Ny";
        DefaultLanguageEnum[DefaultLanguageEnum["Zh"] = 'zh'] = "Zh";
        DefaultLanguageEnum[DefaultLanguageEnum["Cv"] = 'cv'] = "Cv";
        DefaultLanguageEnum[DefaultLanguageEnum["Kw"] = 'kw'] = "Kw";
        DefaultLanguageEnum[DefaultLanguageEnum["Co"] = 'co'] = "Co";
        DefaultLanguageEnum[DefaultLanguageEnum["Cr"] = 'cr'] = "Cr";
        DefaultLanguageEnum[DefaultLanguageEnum["Hr"] = 'hr'] = "Hr";
        DefaultLanguageEnum[DefaultLanguageEnum["Cs"] = 'cs'] = "Cs";
        DefaultLanguageEnum[DefaultLanguageEnum["Da"] = 'da'] = "Da";
        DefaultLanguageEnum[DefaultLanguageEnum["Dv"] = 'dv'] = "Dv";
        DefaultLanguageEnum[DefaultLanguageEnum["Nl"] = 'nl'] = "Nl";
        DefaultLanguageEnum[DefaultLanguageEnum["Dz"] = 'dz'] = "Dz";
        DefaultLanguageEnum[DefaultLanguageEnum["En"] = 'en'] = "En";
        DefaultLanguageEnum[DefaultLanguageEnum["Eo"] = 'eo'] = "Eo";
        DefaultLanguageEnum[DefaultLanguageEnum["Et"] = 'et'] = "Et";
        DefaultLanguageEnum[DefaultLanguageEnum["Ee"] = 'ee'] = "Ee";
        DefaultLanguageEnum[DefaultLanguageEnum["Fo"] = 'fo'] = "Fo";
        DefaultLanguageEnum[DefaultLanguageEnum["Fj"] = 'fj'] = "Fj";
        DefaultLanguageEnum[DefaultLanguageEnum["Fi"] = 'fi'] = "Fi";
        DefaultLanguageEnum[DefaultLanguageEnum["Fr"] = 'fr'] = "Fr";
        DefaultLanguageEnum[DefaultLanguageEnum["Ff"] = 'ff'] = "Ff";
        DefaultLanguageEnum[DefaultLanguageEnum["Gl"] = 'gl'] = "Gl";
        DefaultLanguageEnum[DefaultLanguageEnum["Ka"] = 'ka'] = "Ka";
        DefaultLanguageEnum[DefaultLanguageEnum["De"] = 'de'] = "De";
        DefaultLanguageEnum[DefaultLanguageEnum["El"] = 'el'] = "El";
        DefaultLanguageEnum[DefaultLanguageEnum["Gn"] = 'gn'] = "Gn";
        DefaultLanguageEnum[DefaultLanguageEnum["Gu"] = 'gu'] = "Gu";
        DefaultLanguageEnum[DefaultLanguageEnum["Ht"] = 'ht'] = "Ht";
        DefaultLanguageEnum[DefaultLanguageEnum["Ha"] = 'ha'] = "Ha";
        DefaultLanguageEnum[DefaultLanguageEnum["He"] = 'he'] = "He";
        DefaultLanguageEnum[DefaultLanguageEnum["Hz"] = 'hz'] = "Hz";
        DefaultLanguageEnum[DefaultLanguageEnum["Hi"] = 'hi'] = "Hi";
        DefaultLanguageEnum[DefaultLanguageEnum["Ho"] = 'ho'] = "Ho";
        DefaultLanguageEnum[DefaultLanguageEnum["Hu"] = 'hu'] = "Hu";
        DefaultLanguageEnum[DefaultLanguageEnum["Ia"] = 'ia'] = "Ia";
        DefaultLanguageEnum[DefaultLanguageEnum["Id"] = 'id'] = "Id";
        DefaultLanguageEnum[DefaultLanguageEnum["Ie"] = 'ie'] = "Ie";
        DefaultLanguageEnum[DefaultLanguageEnum["Ga"] = 'ga'] = "Ga";
        DefaultLanguageEnum[DefaultLanguageEnum["Ig"] = 'ig'] = "Ig";
        DefaultLanguageEnum[DefaultLanguageEnum["Ik"] = 'ik'] = "Ik";
        DefaultLanguageEnum[DefaultLanguageEnum["Io"] = 'io'] = "Io";
        DefaultLanguageEnum[DefaultLanguageEnum["Is"] = 'is'] = "Is";
        DefaultLanguageEnum[DefaultLanguageEnum["It"] = 'it'] = "It";
        DefaultLanguageEnum[DefaultLanguageEnum["Iu"] = 'iu'] = "Iu";
        DefaultLanguageEnum[DefaultLanguageEnum["Ja"] = 'ja'] = "Ja";
        DefaultLanguageEnum[DefaultLanguageEnum["Jv"] = 'jv'] = "Jv";
        DefaultLanguageEnum[DefaultLanguageEnum["Kl"] = 'kl'] = "Kl";
        DefaultLanguageEnum[DefaultLanguageEnum["Kn"] = 'kn'] = "Kn";
        DefaultLanguageEnum[DefaultLanguageEnum["Kr"] = 'kr'] = "Kr";
        DefaultLanguageEnum[DefaultLanguageEnum["Ks"] = 'ks'] = "Ks";
        DefaultLanguageEnum[DefaultLanguageEnum["Kk"] = 'kk'] = "Kk";
        DefaultLanguageEnum[DefaultLanguageEnum["Km"] = 'km'] = "Km";
        DefaultLanguageEnum[DefaultLanguageEnum["Ki"] = 'ki'] = "Ki";
        DefaultLanguageEnum[DefaultLanguageEnum["Rw"] = 'rw'] = "Rw";
        DefaultLanguageEnum[DefaultLanguageEnum["Ky"] = 'ky'] = "Ky";
        DefaultLanguageEnum[DefaultLanguageEnum["Kv"] = 'kv'] = "Kv";
        DefaultLanguageEnum[DefaultLanguageEnum["Kg"] = 'kg'] = "Kg";
        DefaultLanguageEnum[DefaultLanguageEnum["Ko"] = 'ko'] = "Ko";
        DefaultLanguageEnum[DefaultLanguageEnum["Ku"] = 'ku'] = "Ku";
        DefaultLanguageEnum[DefaultLanguageEnum["Kj"] = 'kj'] = "Kj";
        DefaultLanguageEnum[DefaultLanguageEnum["La"] = 'la'] = "La";
        DefaultLanguageEnum[DefaultLanguageEnum["Lb"] = 'lb'] = "Lb";
        DefaultLanguageEnum[DefaultLanguageEnum["Lg"] = 'lg'] = "Lg";
        DefaultLanguageEnum[DefaultLanguageEnum["Li"] = 'li'] = "Li";
        DefaultLanguageEnum[DefaultLanguageEnum["Ln"] = 'ln'] = "Ln";
        DefaultLanguageEnum[DefaultLanguageEnum["Lo"] = 'lo'] = "Lo";
        DefaultLanguageEnum[DefaultLanguageEnum["Lt"] = 'lt'] = "Lt";
        DefaultLanguageEnum[DefaultLanguageEnum["Lu"] = 'lu'] = "Lu";
        DefaultLanguageEnum[DefaultLanguageEnum["Lv"] = 'lv'] = "Lv";
        DefaultLanguageEnum[DefaultLanguageEnum["Gv"] = 'gv'] = "Gv";
        DefaultLanguageEnum[DefaultLanguageEnum["Mk"] = 'mk'] = "Mk";
        DefaultLanguageEnum[DefaultLanguageEnum["Mg"] = 'mg'] = "Mg";
        DefaultLanguageEnum[DefaultLanguageEnum["Ms"] = 'ms'] = "Ms";
        DefaultLanguageEnum[DefaultLanguageEnum["Ml"] = 'ml'] = "Ml";
        DefaultLanguageEnum[DefaultLanguageEnum["Mt"] = 'mt'] = "Mt";
        DefaultLanguageEnum[DefaultLanguageEnum["Mi"] = 'mi'] = "Mi";
        DefaultLanguageEnum[DefaultLanguageEnum["Mr"] = 'mr'] = "Mr";
        DefaultLanguageEnum[DefaultLanguageEnum["Mh"] = 'mh'] = "Mh";
        DefaultLanguageEnum[DefaultLanguageEnum["Mn"] = 'mn'] = "Mn";
        DefaultLanguageEnum[DefaultLanguageEnum["Na"] = 'na'] = "Na";
        DefaultLanguageEnum[DefaultLanguageEnum["Nv"] = 'nv'] = "Nv";
        DefaultLanguageEnum[DefaultLanguageEnum["Nd"] = 'nd'] = "Nd";
        DefaultLanguageEnum[DefaultLanguageEnum["Ne"] = 'ne'] = "Ne";
        DefaultLanguageEnum[DefaultLanguageEnum["Ng"] = 'ng'] = "Ng";
        DefaultLanguageEnum[DefaultLanguageEnum["Nb"] = 'nb'] = "Nb";
        DefaultLanguageEnum[DefaultLanguageEnum["Nn"] = 'nn'] = "Nn";
        DefaultLanguageEnum[DefaultLanguageEnum["No"] = 'no'] = "No";
        DefaultLanguageEnum[DefaultLanguageEnum["Ii"] = 'ii'] = "Ii";
        DefaultLanguageEnum[DefaultLanguageEnum["Nr"] = 'nr'] = "Nr";
        DefaultLanguageEnum[DefaultLanguageEnum["Oc"] = 'oc'] = "Oc";
        DefaultLanguageEnum[DefaultLanguageEnum["Oj"] = 'oj'] = "Oj";
        DefaultLanguageEnum[DefaultLanguageEnum["Cu"] = 'cu'] = "Cu";
        DefaultLanguageEnum[DefaultLanguageEnum["Om"] = 'om'] = "Om";
        DefaultLanguageEnum[DefaultLanguageEnum["Or"] = 'or'] = "Or";
        DefaultLanguageEnum[DefaultLanguageEnum["Os"] = 'os'] = "Os";
        DefaultLanguageEnum[DefaultLanguageEnum["Pa"] = 'pa'] = "Pa";
        DefaultLanguageEnum[DefaultLanguageEnum["Pi"] = 'pi'] = "Pi";
        DefaultLanguageEnum[DefaultLanguageEnum["Fa"] = 'fa'] = "Fa";
        DefaultLanguageEnum[DefaultLanguageEnum["Pl"] = 'pl'] = "Pl";
        DefaultLanguageEnum[DefaultLanguageEnum["Ps"] = 'ps'] = "Ps";
        DefaultLanguageEnum[DefaultLanguageEnum["Pt"] = 'pt'] = "Pt";
        DefaultLanguageEnum[DefaultLanguageEnum["Qu"] = 'qu'] = "Qu";
        DefaultLanguageEnum[DefaultLanguageEnum["Rm"] = 'rm'] = "Rm";
        DefaultLanguageEnum[DefaultLanguageEnum["Rn"] = 'rn'] = "Rn";
        DefaultLanguageEnum[DefaultLanguageEnum["Ro"] = 'ro'] = "Ro";
        DefaultLanguageEnum[DefaultLanguageEnum["Rh"] = 'rh'] = "Rh";
        DefaultLanguageEnum[DefaultLanguageEnum["Ru"] = 'ru'] = "Ru";
        DefaultLanguageEnum[DefaultLanguageEnum["Sa"] = 'sa'] = "Sa";
        DefaultLanguageEnum[DefaultLanguageEnum["Sc"] = 'sc'] = "Sc";
        DefaultLanguageEnum[DefaultLanguageEnum["Sd"] = 'sd'] = "Sd";
        DefaultLanguageEnum[DefaultLanguageEnum["Se"] = 'se'] = "Se";
        DefaultLanguageEnum[DefaultLanguageEnum["Sm"] = 'sm'] = "Sm";
        DefaultLanguageEnum[DefaultLanguageEnum["Sg"] = 'sg'] = "Sg";
        DefaultLanguageEnum[DefaultLanguageEnum["Sr"] = 'sr'] = "Sr";
        DefaultLanguageEnum[DefaultLanguageEnum["Gd"] = 'gd'] = "Gd";
        DefaultLanguageEnum[DefaultLanguageEnum["Sn"] = 'sn'] = "Sn";
        DefaultLanguageEnum[DefaultLanguageEnum["Si"] = 'si'] = "Si";
        DefaultLanguageEnum[DefaultLanguageEnum["Sk"] = 'sk'] = "Sk";
        DefaultLanguageEnum[DefaultLanguageEnum["Sl"] = 'sl'] = "Sl";
        DefaultLanguageEnum[DefaultLanguageEnum["So"] = 'so'] = "So";
        DefaultLanguageEnum[DefaultLanguageEnum["St"] = 'st'] = "St";
        DefaultLanguageEnum[DefaultLanguageEnum["Es"] = 'es'] = "Es";
        DefaultLanguageEnum[DefaultLanguageEnum["Su"] = 'su'] = "Su";
        DefaultLanguageEnum[DefaultLanguageEnum["Sw"] = 'sw'] = "Sw";
        DefaultLanguageEnum[DefaultLanguageEnum["Ss"] = 'ss'] = "Ss";
        DefaultLanguageEnum[DefaultLanguageEnum["Sv"] = 'sv'] = "Sv";
        DefaultLanguageEnum[DefaultLanguageEnum["Ta"] = 'ta'] = "Ta";
        DefaultLanguageEnum[DefaultLanguageEnum["Te"] = 'te'] = "Te";
        DefaultLanguageEnum[DefaultLanguageEnum["Tg"] = 'tg'] = "Tg";
        DefaultLanguageEnum[DefaultLanguageEnum["Th"] = 'th'] = "Th";
        DefaultLanguageEnum[DefaultLanguageEnum["Ti"] = 'ti'] = "Ti";
        DefaultLanguageEnum[DefaultLanguageEnum["Bo"] = 'bo'] = "Bo";
        DefaultLanguageEnum[DefaultLanguageEnum["Tk"] = 'tk'] = "Tk";
        DefaultLanguageEnum[DefaultLanguageEnum["Tl"] = 'tl'] = "Tl";
        DefaultLanguageEnum[DefaultLanguageEnum["Tn"] = 'tn'] = "Tn";
        DefaultLanguageEnum[DefaultLanguageEnum["To"] = 'to'] = "To";
        DefaultLanguageEnum[DefaultLanguageEnum["Tr"] = 'tr'] = "Tr";
        DefaultLanguageEnum[DefaultLanguageEnum["Ts"] = 'ts'] = "Ts";
        DefaultLanguageEnum[DefaultLanguageEnum["Tt"] = 'tt'] = "Tt";
        DefaultLanguageEnum[DefaultLanguageEnum["Tw"] = 'tw'] = "Tw";
        DefaultLanguageEnum[DefaultLanguageEnum["Ty"] = 'ty'] = "Ty";
        DefaultLanguageEnum[DefaultLanguageEnum["Ug"] = 'ug'] = "Ug";
        DefaultLanguageEnum[DefaultLanguageEnum["Uk"] = 'uk'] = "Uk";
        DefaultLanguageEnum[DefaultLanguageEnum["Ur"] = 'ur'] = "Ur";
        DefaultLanguageEnum[DefaultLanguageEnum["Uz"] = 'uz'] = "Uz";
        DefaultLanguageEnum[DefaultLanguageEnum["Ve"] = 've'] = "Ve";
        DefaultLanguageEnum[DefaultLanguageEnum["Vi"] = 'vi'] = "Vi";
        DefaultLanguageEnum[DefaultLanguageEnum["Vo"] = 'vo'] = "Vo";
        DefaultLanguageEnum[DefaultLanguageEnum["Wa"] = 'wa'] = "Wa";
        DefaultLanguageEnum[DefaultLanguageEnum["Cy"] = 'cy'] = "Cy";
        DefaultLanguageEnum[DefaultLanguageEnum["Wo"] = 'wo'] = "Wo";
        DefaultLanguageEnum[DefaultLanguageEnum["Fy"] = 'fy'] = "Fy";
        DefaultLanguageEnum[DefaultLanguageEnum["Xh"] = 'xh'] = "Xh";
        DefaultLanguageEnum[DefaultLanguageEnum["Yi"] = 'yi'] = "Yi";
        DefaultLanguageEnum[DefaultLanguageEnum["Yo"] = 'yo'] = "Yo";
        DefaultLanguageEnum[DefaultLanguageEnum["Za"] = 'za'] = "Za";
        DefaultLanguageEnum[DefaultLanguageEnum["Zu"] = 'zu'] = "Zu";
        DefaultLanguageEnum[DefaultLanguageEnum["Ab"] = 'ab'] = "Ab";
        DefaultLanguageEnum[DefaultLanguageEnum["Aa2"] = 'aa'] = "Aa2";
        DefaultLanguageEnum[DefaultLanguageEnum["Af2"] = 'af'] = "Af2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ak2"] = 'ak'] = "Ak2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sq2"] = 'sq'] = "Sq2";
        DefaultLanguageEnum[DefaultLanguageEnum["Am2"] = 'am'] = "Am2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ar2"] = 'ar'] = "Ar2";
        DefaultLanguageEnum[DefaultLanguageEnum["An2"] = 'an'] = "An2";
        DefaultLanguageEnum[DefaultLanguageEnum["Hy2"] = 'hy'] = "Hy2";
        DefaultLanguageEnum[DefaultLanguageEnum["As2"] = 'as'] = "As2";
        DefaultLanguageEnum[DefaultLanguageEnum["Av2"] = 'av'] = "Av2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ae2"] = 'ae'] = "Ae2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ay2"] = 'ay'] = "Ay2";
        DefaultLanguageEnum[DefaultLanguageEnum["Az2"] = 'az'] = "Az2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bm2"] = 'bm'] = "Bm2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ba2"] = 'ba'] = "Ba2";
        DefaultLanguageEnum[DefaultLanguageEnum["Eu2"] = 'eu'] = "Eu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Be2"] = 'be'] = "Be2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bn2"] = 'bn'] = "Bn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bh2"] = 'bh'] = "Bh2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bi2"] = 'bi'] = "Bi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bs2"] = 'bs'] = "Bs2";
        DefaultLanguageEnum[DefaultLanguageEnum["Br2"] = 'br'] = "Br2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bg2"] = 'bg'] = "Bg2";
        DefaultLanguageEnum[DefaultLanguageEnum["My2"] = 'my'] = "My2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ca2"] = 'ca'] = "Ca2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ch2"] = 'ch'] = "Ch2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ce2"] = 'ce'] = "Ce2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ny2"] = 'ny'] = "Ny2";
        DefaultLanguageEnum[DefaultLanguageEnum["Zh2"] = 'zh'] = "Zh2";
        DefaultLanguageEnum[DefaultLanguageEnum["Cv2"] = 'cv'] = "Cv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kw2"] = 'kw'] = "Kw2";
        DefaultLanguageEnum[DefaultLanguageEnum["Co2"] = 'co'] = "Co2";
        DefaultLanguageEnum[DefaultLanguageEnum["Cr2"] = 'cr'] = "Cr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Hr2"] = 'hr'] = "Hr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Cs2"] = 'cs'] = "Cs2";
        DefaultLanguageEnum[DefaultLanguageEnum["Da2"] = 'da'] = "Da2";
        DefaultLanguageEnum[DefaultLanguageEnum["Dv2"] = 'dv'] = "Dv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Nl2"] = 'nl'] = "Nl2";
        DefaultLanguageEnum[DefaultLanguageEnum["Dz2"] = 'dz'] = "Dz2";
        DefaultLanguageEnum[DefaultLanguageEnum["En2"] = 'en'] = "En2";
        DefaultLanguageEnum[DefaultLanguageEnum["Eo2"] = 'eo'] = "Eo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Et2"] = 'et'] = "Et2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ee2"] = 'ee'] = "Ee2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fo2"] = 'fo'] = "Fo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fj2"] = 'fj'] = "Fj2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fi2"] = 'fi'] = "Fi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fr2"] = 'fr'] = "Fr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ff2"] = 'ff'] = "Ff2";
        DefaultLanguageEnum[DefaultLanguageEnum["Gl2"] = 'gl'] = "Gl2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ka2"] = 'ka'] = "Ka2";
        DefaultLanguageEnum[DefaultLanguageEnum["De2"] = 'de'] = "De2";
        DefaultLanguageEnum[DefaultLanguageEnum["El2"] = 'el'] = "El2";
        DefaultLanguageEnum[DefaultLanguageEnum["Gn2"] = 'gn'] = "Gn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Gu2"] = 'gu'] = "Gu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ht2"] = 'ht'] = "Ht2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ha2"] = 'ha'] = "Ha2";
        DefaultLanguageEnum[DefaultLanguageEnum["He2"] = 'he'] = "He2";
        DefaultLanguageEnum[DefaultLanguageEnum["Hz2"] = 'hz'] = "Hz2";
        DefaultLanguageEnum[DefaultLanguageEnum["Hi2"] = 'hi'] = "Hi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ho2"] = 'ho'] = "Ho2";
        DefaultLanguageEnum[DefaultLanguageEnum["Hu2"] = 'hu'] = "Hu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ia2"] = 'ia'] = "Ia2";
        DefaultLanguageEnum[DefaultLanguageEnum["Id2"] = 'id'] = "Id2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ie2"] = 'ie'] = "Ie2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ga2"] = 'ga'] = "Ga2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ig2"] = 'ig'] = "Ig2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ik2"] = 'ik'] = "Ik2";
        DefaultLanguageEnum[DefaultLanguageEnum["Io2"] = 'io'] = "Io2";
        DefaultLanguageEnum[DefaultLanguageEnum["Is2"] = 'is'] = "Is2";
        DefaultLanguageEnum[DefaultLanguageEnum["It2"] = 'it'] = "It2";
        DefaultLanguageEnum[DefaultLanguageEnum["Iu2"] = 'iu'] = "Iu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ja2"] = 'ja'] = "Ja2";
        DefaultLanguageEnum[DefaultLanguageEnum["Jv2"] = 'jv'] = "Jv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kl2"] = 'kl'] = "Kl2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kn2"] = 'kn'] = "Kn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kr2"] = 'kr'] = "Kr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ks2"] = 'ks'] = "Ks2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kk2"] = 'kk'] = "Kk2";
        DefaultLanguageEnum[DefaultLanguageEnum["Km2"] = 'km'] = "Km2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ki2"] = 'ki'] = "Ki2";
        DefaultLanguageEnum[DefaultLanguageEnum["Rw2"] = 'rw'] = "Rw2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ky2"] = 'ky'] = "Ky2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kv2"] = 'kv'] = "Kv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kg2"] = 'kg'] = "Kg2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ko2"] = 'ko'] = "Ko2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ku2"] = 'ku'] = "Ku2";
        DefaultLanguageEnum[DefaultLanguageEnum["Kj2"] = 'kj'] = "Kj2";
        DefaultLanguageEnum[DefaultLanguageEnum["La2"] = 'la'] = "La2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lb2"] = 'lb'] = "Lb2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lg2"] = 'lg'] = "Lg2";
        DefaultLanguageEnum[DefaultLanguageEnum["Li2"] = 'li'] = "Li2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ln2"] = 'ln'] = "Ln2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lo2"] = 'lo'] = "Lo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lt2"] = 'lt'] = "Lt2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lu2"] = 'lu'] = "Lu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Lv2"] = 'lv'] = "Lv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Gv2"] = 'gv'] = "Gv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mk2"] = 'mk'] = "Mk2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mg2"] = 'mg'] = "Mg2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ms2"] = 'ms'] = "Ms2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ml2"] = 'ml'] = "Ml2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mt2"] = 'mt'] = "Mt2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mi2"] = 'mi'] = "Mi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mr2"] = 'mr'] = "Mr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mh2"] = 'mh'] = "Mh2";
        DefaultLanguageEnum[DefaultLanguageEnum["Mn2"] = 'mn'] = "Mn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Na2"] = 'na'] = "Na2";
        DefaultLanguageEnum[DefaultLanguageEnum["Nv2"] = 'nv'] = "Nv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Nd2"] = 'nd'] = "Nd2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ne2"] = 'ne'] = "Ne2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ng2"] = 'ng'] = "Ng2";
        DefaultLanguageEnum[DefaultLanguageEnum["Nb2"] = 'nb'] = "Nb2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ii2"] = 'ii'] = "Ii2";
        DefaultLanguageEnum[DefaultLanguageEnum["Nr2"] = 'nr'] = "Nr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Oc2"] = 'oc'] = "Oc2";
        DefaultLanguageEnum[DefaultLanguageEnum["Oj2"] = 'oj'] = "Oj2";
        DefaultLanguageEnum[DefaultLanguageEnum["Cu2"] = 'cu'] = "Cu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Om2"] = 'om'] = "Om2";
        DefaultLanguageEnum[DefaultLanguageEnum["Or2"] = 'or'] = "Or2";
        DefaultLanguageEnum[DefaultLanguageEnum["Os2"] = 'os'] = "Os2";
        DefaultLanguageEnum[DefaultLanguageEnum["Pa2"] = 'pa'] = "Pa2";
        DefaultLanguageEnum[DefaultLanguageEnum["Pi2"] = 'pi'] = "Pi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fa2"] = 'fa'] = "Fa2";
        DefaultLanguageEnum[DefaultLanguageEnum["Pl2"] = 'pl'] = "Pl2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ps2"] = 'ps'] = "Ps2";
        DefaultLanguageEnum[DefaultLanguageEnum["Pt2"] = 'pt'] = "Pt2";
        DefaultLanguageEnum[DefaultLanguageEnum["Qu2"] = 'qu'] = "Qu2";
        DefaultLanguageEnum[DefaultLanguageEnum["Rm2"] = 'rm'] = "Rm2";
        DefaultLanguageEnum[DefaultLanguageEnum["Rn2"] = 'rn'] = "Rn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ro2"] = 'ro'] = "Ro2";
        DefaultLanguageEnum[DefaultLanguageEnum["Rh2"] = 'rh'] = "Rh2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ru2"] = 'ru'] = "Ru2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sa2"] = 'sa'] = "Sa2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sc2"] = 'sc'] = "Sc2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sd2"] = 'sd'] = "Sd2";
        DefaultLanguageEnum[DefaultLanguageEnum["Se2"] = 'se'] = "Se2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sm2"] = 'sm'] = "Sm2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sg2"] = 'sg'] = "Sg2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sr2"] = 'sr'] = "Sr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Gd2"] = 'gd'] = "Gd2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sn2"] = 'sn'] = "Sn2";
        DefaultLanguageEnum[DefaultLanguageEnum["Si2"] = 'si'] = "Si2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sk2"] = 'sk'] = "Sk2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sl2"] = 'sl'] = "Sl2";
        DefaultLanguageEnum[DefaultLanguageEnum["So2"] = 'so'] = "So2";
        DefaultLanguageEnum[DefaultLanguageEnum["St2"] = 'st'] = "St2";
        DefaultLanguageEnum[DefaultLanguageEnum["Es2"] = 'es'] = "Es2";
        DefaultLanguageEnum[DefaultLanguageEnum["Su2"] = 'su'] = "Su2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sw2"] = 'sw'] = "Sw2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ss2"] = 'ss'] = "Ss2";
        DefaultLanguageEnum[DefaultLanguageEnum["Sv2"] = 'sv'] = "Sv2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ta2"] = 'ta'] = "Ta2";
        DefaultLanguageEnum[DefaultLanguageEnum["Te2"] = 'te'] = "Te2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tg2"] = 'tg'] = "Tg2";
        DefaultLanguageEnum[DefaultLanguageEnum["Th2"] = 'th'] = "Th2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ti2"] = 'ti'] = "Ti2";
        DefaultLanguageEnum[DefaultLanguageEnum["Bo2"] = 'bo'] = "Bo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tk2"] = 'tk'] = "Tk2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tl2"] = 'tl'] = "Tl2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tn2"] = 'tn'] = "Tn2";
        DefaultLanguageEnum[DefaultLanguageEnum["To2"] = 'to'] = "To2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tr2"] = 'tr'] = "Tr2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ts2"] = 'ts'] = "Ts2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tt2"] = 'tt'] = "Tt2";
        DefaultLanguageEnum[DefaultLanguageEnum["Tw2"] = 'tw'] = "Tw2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ty2"] = 'ty'] = "Ty2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ug2"] = 'ug'] = "Ug2";
        DefaultLanguageEnum[DefaultLanguageEnum["Uk2"] = 'uk'] = "Uk2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ur2"] = 'ur'] = "Ur2";
        DefaultLanguageEnum[DefaultLanguageEnum["Uz2"] = 'uz'] = "Uz2";
        DefaultLanguageEnum[DefaultLanguageEnum["Ve2"] = 've'] = "Ve2";
        DefaultLanguageEnum[DefaultLanguageEnum["Vi2"] = 'vi'] = "Vi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Vo2"] = 'vo'] = "Vo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Wa2"] = 'wa'] = "Wa2";
        DefaultLanguageEnum[DefaultLanguageEnum["Cy2"] = 'cy'] = "Cy2";
        DefaultLanguageEnum[DefaultLanguageEnum["Wo2"] = 'wo'] = "Wo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Fy2"] = 'fy'] = "Fy2";
        DefaultLanguageEnum[DefaultLanguageEnum["Xh2"] = 'xh'] = "Xh2";
        DefaultLanguageEnum[DefaultLanguageEnum["Yi2"] = 'yi'] = "Yi2";
        DefaultLanguageEnum[DefaultLanguageEnum["Yo2"] = 'yo'] = "Yo2";
        DefaultLanguageEnum[DefaultLanguageEnum["Za2"] = 'za'] = "Za2";
        DefaultLanguageEnum[DefaultLanguageEnum["Zu2"] = 'zu'] = "Zu2";
    })(DefaultLanguageEnum = UserDto.DefaultLanguageEnum || (UserDto.DefaultLanguageEnum = {}));
    let InvoiceIntervalEnum;
    (function (InvoiceIntervalEnum) {
        InvoiceIntervalEnum[InvoiceIntervalEnum["Instant"] = 'instant'] = "Instant";
        InvoiceIntervalEnum[InvoiceIntervalEnum["Weekly"] = 'weekly'] = "Weekly";
        InvoiceIntervalEnum[InvoiceIntervalEnum["Monthly"] = 'monthly'] = "Monthly";
        InvoiceIntervalEnum[InvoiceIntervalEnum["PerRequest"] = 'per request'] = "PerRequest";
    })(InvoiceIntervalEnum = UserDto.InvoiceIntervalEnum || (UserDto.InvoiceIntervalEnum = {}));
})(UserDto || (exports.UserDto = UserDto = {}));