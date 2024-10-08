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
import { TldPolicyDto } from './tldPolicyDto';

export class TldDto {
    /**
    * The unique identifier for the tld.
    */
    'id'?: string;
    /**
    * A string that contains the acual tld.
    */
    'tld': string;
    /**
    * Tld\'s title.
    */
    'title': string;
    /**
    * The minimum lenght of character you can have.
    */
    'minLength'?: number;
    /**
    * The maximum lenght of character you can have.
    */
    'maxLength'?: number;
    /**
    * A regular expresion used for validation
    */
    'regex'?: object;
    /**
    * The number of days a tld stays in soft quarantine status.
    */
    'softQuarantineDays'?: number;
    /**
    * The number of days a tld stays in hard quarantine status.
    */
    'hardQuarantineDays'?: number;
    /**
    * The number of days before the registry\'s expiration date, that the domain is required to be renewed
    */
    'renewalDateOffset'?: number;
    /**
    * The number of days before the registry\'s expiration date, that a domain can be renewed
    */
    'expirationDateOffset'?: number;
    /**
    * Indicates how many hours will the auth code be valid.
    */
    'authorizationCodeValidityHours'?: number;
    /**
    * Indicates if it can be restored during pending delete or not.
    */
    'restoreDuringPendingDelete'?: boolean;
    /**
    * Indicates if it can be deleted or not.
    */
    'allowsDelete'?: boolean;
    /**
    * Indicates if recall is allowed or not.
    */
    'allowsRecall'?: boolean;
    /**
    * Indicates if it supports DNSSEC or not.
    */
    'supportsDNSSEC'?: boolean;
    /**
    * Indicates if it supports IDN or not.
    */
    'supportsIDN'?: boolean;
    /**
    * Indicates if tld has a fee for status soft quarantine or not.
    */
    'hasSoftQuarantineFee'?: boolean;
    /**
    * Indicates if tld has a fee for status hard quarantine or not.
    */
    'hasHardQuarantineFee'?: boolean;
    /**
    * Indicates if you can transfer a tld while it has expired or not.
    */
    'transferWhileExpired'?: boolean;
    /**
    * An array of strings representing registration information for a tld.
    */
    'registerInformation'?: Array<string>;
    /**
    * An array of strings representing transfer information for a tld.
    */
    'transferInformation'?: Array<string>;
    /**
    * An array of country codes representing the presence of registrant contacts in specific countries.
    */
    'registrantContactCountryPresence'?: Array<TldDto.RegistrantContactCountryPresenceEnum>;
    /**
    * An array of country codes representing the presence of administrative contacts in specific countries.
    */
    'adminContactCountryPresence'?: Array<TldDto.AdminContactCountryPresenceEnum>;
    /**
    * An array of country codes representing the presence of technical contacts in specific countries.
    */
    'techContactCountryPresence'?: Array<TldDto.TechContactCountryPresenceEnum>;
    /**
    * An array of country codes representing the presence of billing contacts in specific countries.
    */
    'billingContactCountryPresence'?: Array<TldDto.BillingContactCountryPresenceEnum>;
    /**
    * Indicates if accept or cancel transfer is allowed or not.
    */
    'allowsAcceptOrCancelTransferOut'?: boolean;
    /**
    * Indicates if an active Dns zones are required or not.
    */
    'activeDNSZonesRequired'?: boolean;
    /**
    * Indicates whether the tld will be deleted when its DNS zones become inactive.
    */
    'deletesIfDnsZonesAreInactive'?: boolean;
    /**
    * Determines whether the EPP code should be sent to the domain owner when they request a transfer to a different registrar.
    */
    'sendEppCodeToOwner'?: boolean;
    /**
    * Determines whether the details of the previous owner should be copied to the new owner when a domain transfer takes place.
    */
    'copyOwnerOnTransfer': boolean;
    /**
    * Controls whether the EPP system should send an email and wait for verification when making changes to the registrant\'s email address.
    */
    'registrantEmailAddressVerification'?: boolean;
    /**
    * Specifies the desired registration period for a domain after it has been transferred to a new registrar.
    */
    'registrationPeriodAfterTransfer'?: TldDto.RegistrationPeriodAfterTransferEnum;
    /**
    * An array of supported durations for domain registrations.
    */
    'supportedDurations'?: Array<TldDto.SupportedDurationsEnum>;
    /**
    * An array with all the tld policies.
    */
    'registryPolicies'?: Array<TldPolicyDto>;
    /**
    * An array of DNS servers used for the domain names within this tld.
    */
    'dNS'?: Array<string>;
    /**
    * A number indicates the default price for retail.
    */
    'defaultRetailPrice'?: number;
    /**
    * Specifies additional data associated with a domain within this tld.
    */
    'domainAdditionalData'?: TldDto.DomainAdditionalDataEnum;
    /**
    * Specifies additional data associated with a contact of this tld.
    */
    'contactAdditionalData'?: TldDto.ContactAdditionalDataEnum;
    /**
    * The date and time when the tld was created.
    */
    'createdAt'?: Date;
    /**
    * The date and time when the service tld was updated.
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
            "name": "tld",
            "baseName": "tld",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "minLength",
            "baseName": "minLength",
            "type": "number"
        },
        {
            "name": "maxLength",
            "baseName": "maxLength",
            "type": "number"
        },
        {
            "name": "regex",
            "baseName": "regex",
            "type": "object"
        },
        {
            "name": "softQuarantineDays",
            "baseName": "softQuarantineDays",
            "type": "number"
        },
        {
            "name": "hardQuarantineDays",
            "baseName": "hardQuarantineDays",
            "type": "number"
        },
        {
            "name": "renewalDateOffset",
            "baseName": "renewalDateOffset",
            "type": "number"
        },
        {
            "name": "expirationDateOffset",
            "baseName": "expirationDateOffset",
            "type": "number"
        },
        {
            "name": "authorizationCodeValidityHours",
            "baseName": "authorizationCodeValidityHours",
            "type": "number"
        },
        {
            "name": "restoreDuringPendingDelete",
            "baseName": "restoreDuringPendingDelete",
            "type": "boolean"
        },
        {
            "name": "allowsDelete",
            "baseName": "allowsDelete",
            "type": "boolean"
        },
        {
            "name": "allowsRecall",
            "baseName": "allowsRecall",
            "type": "boolean"
        },
        {
            "name": "supportsDNSSEC",
            "baseName": "supportsDNSSEC",
            "type": "boolean"
        },
        {
            "name": "supportsIDN",
            "baseName": "supportsIDN",
            "type": "boolean"
        },
        {
            "name": "hasSoftQuarantineFee",
            "baseName": "hasSoftQuarantineFee",
            "type": "boolean"
        },
        {
            "name": "hasHardQuarantineFee",
            "baseName": "hasHardQuarantineFee",
            "type": "boolean"
        },
        {
            "name": "transferWhileExpired",
            "baseName": "transferWhileExpired",
            "type": "boolean"
        },
        {
            "name": "registerInformation",
            "baseName": "registerInformation",
            "type": "Array<string>"
        },
        {
            "name": "transferInformation",
            "baseName": "transferInformation",
            "type": "Array<string>"
        },
        {
            "name": "registrantContactCountryPresence",
            "baseName": "registrantContactCountryPresence",
            "type": "Array<TldDto.RegistrantContactCountryPresenceEnum>"
        },
        {
            "name": "adminContactCountryPresence",
            "baseName": "adminContactCountryPresence",
            "type": "Array<TldDto.AdminContactCountryPresenceEnum>"
        },
        {
            "name": "techContactCountryPresence",
            "baseName": "techContactCountryPresence",
            "type": "Array<TldDto.TechContactCountryPresenceEnum>"
        },
        {
            "name": "billingContactCountryPresence",
            "baseName": "billingContactCountryPresence",
            "type": "Array<TldDto.BillingContactCountryPresenceEnum>"
        },
        {
            "name": "allowsAcceptOrCancelTransferOut",
            "baseName": "allowsAcceptOrCancelTransferOut",
            "type": "boolean"
        },
        {
            "name": "activeDNSZonesRequired",
            "baseName": "activeDNSZonesRequired",
            "type": "boolean"
        },
        {
            "name": "deletesIfDnsZonesAreInactive",
            "baseName": "deletesIfDnsZonesAreInactive",
            "type": "boolean"
        },
        {
            "name": "sendEppCodeToOwner",
            "baseName": "sendEppCodeToOwner",
            "type": "boolean"
        },
        {
            "name": "copyOwnerOnTransfer",
            "baseName": "copyOwnerOnTransfer",
            "type": "boolean"
        },
        {
            "name": "registrantEmailAddressVerification",
            "baseName": "registrantEmailAddressVerification",
            "type": "boolean"
        },
        {
            "name": "registrationPeriodAfterTransfer",
            "baseName": "registrationPeriodAfterTransfer",
            "type": "TldDto.RegistrationPeriodAfterTransferEnum"
        },
        {
            "name": "supportedDurations",
            "baseName": "supportedDurations",
            "type": "Array<TldDto.SupportedDurationsEnum>"
        },
        {
            "name": "registryPolicies",
            "baseName": "registryPolicies",
            "type": "Array<TldPolicyDto>"
        },
        {
            "name": "dNS",
            "baseName": "DNS",
            "type": "Array<string>"
        },
        {
            "name": "defaultRetailPrice",
            "baseName": "defaultRetailPrice",
            "type": "number"
        },
        {
            "name": "domainAdditionalData",
            "baseName": "domainAdditionalData",
            "type": "TldDto.DomainAdditionalDataEnum"
        },
        {
            "name": "contactAdditionalData",
            "baseName": "contactAdditionalData",
            "type": "TldDto.ContactAdditionalDataEnum"
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
        return TldDto.attributeTypeMap;
    }
}

export namespace TldDto {
    export enum RegistrantContactCountryPresenceEnum {
        Af = <any> 'AF',
        Al = <any> 'AL',
        Dz = <any> 'DZ',
        As = <any> 'AS',
        Ad = <any> 'AD',
        Ao = <any> 'AO',
        Ai = <any> 'AI',
        Aq = <any> 'AQ',
        Ag = <any> 'AG',
        Ar = <any> 'AR',
        Am = <any> 'AM',
        Aw = <any> 'AW',
        Au = <any> 'AU',
        At = <any> 'AT',
        Az = <any> 'AZ',
        Bs = <any> 'BS',
        Bh = <any> 'BH',
        Bd = <any> 'BD',
        Bb = <any> 'BB',
        By = <any> 'BY',
        Be = <any> 'BE',
        Bz = <any> 'BZ',
        Bj = <any> 'BJ',
        Bm = <any> 'BM',
        Bt = <any> 'BT',
        Bo = <any> 'BO',
        Bq = <any> 'BQ',
        Ba = <any> 'BA',
        Bw = <any> 'BW',
        Bv = <any> 'BV',
        Br = <any> 'BR',
        Io = <any> 'IO',
        Bn = <any> 'BN',
        Bg = <any> 'BG',
        Bf = <any> 'BF',
        Bi = <any> 'BI',
        Kh = <any> 'KH',
        Cm = <any> 'CM',
        Ca = <any> 'CA',
        Cv = <any> 'CV',
        Ky = <any> 'KY',
        Cf = <any> 'CF',
        Td = <any> 'TD',
        Cl = <any> 'CL',
        Cn = <any> 'CN',
        Cx = <any> 'CX',
        Cc = <any> 'CC',
        Co = <any> 'CO',
        Km = <any> 'KM',
        Cg = <any> 'CG',
        Cd = <any> 'CD',
        Ck = <any> 'CK',
        Cr = <any> 'CR',
        Ci = <any> 'CI',
        Hr = <any> 'HR',
        Cu = <any> 'CU',
        Cw = <any> 'CW',
        Cy = <any> 'CY',
        Cz = <any> 'CZ',
        Dk = <any> 'DK',
        Dj = <any> 'DJ',
        Dm = <any> 'DM',
        Do = <any> 'DO',
        Ec = <any> 'EC',
        Eg = <any> 'EG',
        Sv = <any> 'SV',
        Gq = <any> 'GQ',
        Er = <any> 'ER',
        Ee = <any> 'EE',
        Et = <any> 'ET',
        Fk = <any> 'FK',
        Fo = <any> 'FO',
        Fj = <any> 'FJ',
        Fi = <any> 'FI',
        Fr = <any> 'FR',
        Gf = <any> 'GF',
        Pf = <any> 'PF',
        Tf = <any> 'TF',
        Ga = <any> 'GA',
        Gm = <any> 'GM',
        Ge = <any> 'GE',
        De = <any> 'DE',
        Gh = <any> 'GH',
        Gi = <any> 'GI',
        Gr = <any> 'GR',
        Gl = <any> 'GL',
        Gd = <any> 'GD',
        Gp = <any> 'GP',
        Gu = <any> 'GU',
        Gt = <any> 'GT',
        Gg = <any> 'GG',
        Gn = <any> 'GN',
        Gw = <any> 'GW',
        Gy = <any> 'GY',
        Ht = <any> 'HT',
        Hm = <any> 'HM',
        Va = <any> 'VA',
        Hn = <any> 'HN',
        Hk = <any> 'HK',
        Hu = <any> 'HU',
        Is = <any> 'IS',
        In = <any> 'IN',
        Id = <any> 'ID',
        Ir = <any> 'IR',
        Iq = <any> 'IQ',
        Ie = <any> 'IE',
        Im = <any> 'IM',
        Il = <any> 'IL',
        It = <any> 'IT',
        Jm = <any> 'JM',
        Jp = <any> 'JP',
        Je = <any> 'JE',
        Jo = <any> 'JO',
        Kz = <any> 'KZ',
        Ke = <any> 'KE',
        Ki = <any> 'KI',
        Kp = <any> 'KP',
        Kr = <any> 'KR',
        Kw = <any> 'KW',
        Kg = <any> 'KG',
        La = <any> 'LA',
        Lv = <any> 'LV',
        Lb = <any> 'LB',
        Ls = <any> 'LS',
        Lr = <any> 'LR',
        Ly = <any> 'LY',
        Li = <any> 'LI',
        Lt = <any> 'LT',
        Lu = <any> 'LU',
        Mo = <any> 'MO',
        Mk = <any> 'MK',
        Mg = <any> 'MG',
        Mw = <any> 'MW',
        My = <any> 'MY',
        Mv = <any> 'MV',
        Ml = <any> 'ML',
        Mt = <any> 'MT',
        Mh = <any> 'MH',
        Mq = <any> 'MQ',
        Mr = <any> 'MR',
        Mu = <any> 'MU',
        Tn = <any> 'TN',
        Tr = <any> 'TR',
        Tm = <any> 'TM',
        Tc = <any> 'TC',
        Tv = <any> 'TV',
        Ug = <any> 'UG',
        Ua = <any> 'UA',
        Ae = <any> 'AE',
        Gb = <any> 'GB',
        Us = <any> 'US',
        Um = <any> 'UM',
        Uy = <any> 'UY',
        Uz = <any> 'UZ',
        Vu = <any> 'VU',
        Ve = <any> 'VE',
        Vn = <any> 'VN',
        Vg = <any> 'VG',
        Vi = <any> 'VI',
        Wf = <any> 'WF',
        Eh = <any> 'EH',
        Ye = <any> 'YE',
        Zm = <any> 'ZM',
        Zw = <any> 'ZW',
        Yt = <any> 'YT',
        Mx = <any> 'MX',
        Fm = <any> 'FM',
        Md = <any> 'MD',
        Mc = <any> 'MC',
        Mn = <any> 'MN',
        Me = <any> 'ME',
        Ms = <any> 'MS',
        Ma = <any> 'MA',
        Mz = <any> 'MZ',
        Mm = <any> 'MM',
        Na = <any> 'NA',
        Nr = <any> 'NR',
        Np = <any> 'NP',
        Nl = <any> 'NL',
        Nc = <any> 'NC',
        Nz = <any> 'NZ',
        Ni = <any> 'NI',
        Ne = <any> 'NE',
        Ng = <any> 'NG',
        Nu = <any> 'NU',
        Nf = <any> 'NF',
        Mp = <any> 'MP',
        No = <any> 'NO',
        Om = <any> 'OM',
        Pk = <any> 'PK',
        Pw = <any> 'PW',
        Ps = <any> 'PS',
        Pa = <any> 'PA',
        Pg = <any> 'PG',
        Py = <any> 'PY',
        Pe = <any> 'PE',
        Ph = <any> 'PH',
        Pn = <any> 'PN',
        Pl = <any> 'PL',
        Pt = <any> 'PT',
        Pr = <any> 'PR',
        Qa = <any> 'QA',
        Re = <any> 'RE',
        Ro = <any> 'RO',
        Ru = <any> 'RU',
        Rw = <any> 'RW',
        Bl = <any> 'BL',
        Sh = <any> 'SH',
        Kn = <any> 'KN',
        Lc = <any> 'LC',
        Mf = <any> 'MF',
        Pm = <any> 'PM',
        Vc = <any> 'VC',
        Ws = <any> 'WS',
        Sm = <any> 'SM',
        St = <any> 'ST',
        Sa = <any> 'SA',
        Sn = <any> 'SN',
        Rs = <any> 'RS',
        Sc = <any> 'SC',
        Sl = <any> 'SL',
        Sg = <any> 'SG',
        Sx = <any> 'SX',
        Sk = <any> 'SK',
        Si = <any> 'SI',
        Sb = <any> 'SB',
        So = <any> 'SO',
        Za = <any> 'ZA',
        Gs = <any> 'GS',
        Ss = <any> 'SS',
        Es = <any> 'ES',
        Lk = <any> 'LK',
        Sd = <any> 'SD',
        Sr = <any> 'SR',
        Sj = <any> 'SJ',
        Sz = <any> 'SZ',
        Se = <any> 'SE',
        Ch = <any> 'CH',
        Sy = <any> 'SY',
        Tw = <any> 'TW',
        Tj = <any> 'TJ',
        Tz = <any> 'TZ',
        Th = <any> 'TH',
        Tl = <any> 'TL',
        Tg = <any> 'TG',
        Tk = <any> 'TK',
        To = <any> 'TO',
        Tt = <any> 'TT'
    }
    export enum AdminContactCountryPresenceEnum {
        Af = <any> 'AF',
        Al = <any> 'AL',
        Dz = <any> 'DZ',
        As = <any> 'AS',
        Ad = <any> 'AD',
        Ao = <any> 'AO',
        Ai = <any> 'AI',
        Aq = <any> 'AQ',
        Ag = <any> 'AG',
        Ar = <any> 'AR',
        Am = <any> 'AM',
        Aw = <any> 'AW',
        Au = <any> 'AU',
        At = <any> 'AT',
        Az = <any> 'AZ',
        Bs = <any> 'BS',
        Bh = <any> 'BH',
        Bd = <any> 'BD',
        Bb = <any> 'BB',
        By = <any> 'BY',
        Be = <any> 'BE',
        Bz = <any> 'BZ',
        Bj = <any> 'BJ',
        Bm = <any> 'BM',
        Bt = <any> 'BT',
        Bo = <any> 'BO',
        Bq = <any> 'BQ',
        Ba = <any> 'BA',
        Bw = <any> 'BW',
        Bv = <any> 'BV',
        Br = <any> 'BR',
        Io = <any> 'IO',
        Bn = <any> 'BN',
        Bg = <any> 'BG',
        Bf = <any> 'BF',
        Bi = <any> 'BI',
        Kh = <any> 'KH',
        Cm = <any> 'CM',
        Ca = <any> 'CA',
        Cv = <any> 'CV',
        Ky = <any> 'KY',
        Cf = <any> 'CF',
        Td = <any> 'TD',
        Cl = <any> 'CL',
        Cn = <any> 'CN',
        Cx = <any> 'CX',
        Cc = <any> 'CC',
        Co = <any> 'CO',
        Km = <any> 'KM',
        Cg = <any> 'CG',
        Cd = <any> 'CD',
        Ck = <any> 'CK',
        Cr = <any> 'CR',
        Ci = <any> 'CI',
        Hr = <any> 'HR',
        Cu = <any> 'CU',
        Cw = <any> 'CW',
        Cy = <any> 'CY',
        Cz = <any> 'CZ',
        Dk = <any> 'DK',
        Dj = <any> 'DJ',
        Dm = <any> 'DM',
        Do = <any> 'DO',
        Ec = <any> 'EC',
        Eg = <any> 'EG',
        Sv = <any> 'SV',
        Gq = <any> 'GQ',
        Er = <any> 'ER',
        Ee = <any> 'EE',
        Et = <any> 'ET',
        Fk = <any> 'FK',
        Fo = <any> 'FO',
        Fj = <any> 'FJ',
        Fi = <any> 'FI',
        Fr = <any> 'FR',
        Gf = <any> 'GF',
        Pf = <any> 'PF',
        Tf = <any> 'TF',
        Ga = <any> 'GA',
        Gm = <any> 'GM',
        Ge = <any> 'GE',
        De = <any> 'DE',
        Gh = <any> 'GH',
        Gi = <any> 'GI',
        Gr = <any> 'GR',
        Gl = <any> 'GL',
        Gd = <any> 'GD',
        Gp = <any> 'GP',
        Gu = <any> 'GU',
        Gt = <any> 'GT',
        Gg = <any> 'GG',
        Gn = <any> 'GN',
        Gw = <any> 'GW',
        Gy = <any> 'GY',
        Ht = <any> 'HT',
        Hm = <any> 'HM',
        Va = <any> 'VA',
        Hn = <any> 'HN',
        Hk = <any> 'HK',
        Hu = <any> 'HU',
        Is = <any> 'IS',
        In = <any> 'IN',
        Id = <any> 'ID',
        Ir = <any> 'IR',
        Iq = <any> 'IQ',
        Ie = <any> 'IE',
        Im = <any> 'IM',
        Il = <any> 'IL',
        It = <any> 'IT',
        Jm = <any> 'JM',
        Jp = <any> 'JP',
        Je = <any> 'JE',
        Jo = <any> 'JO',
        Kz = <any> 'KZ',
        Ke = <any> 'KE',
        Ki = <any> 'KI',
        Kp = <any> 'KP',
        Kr = <any> 'KR',
        Kw = <any> 'KW',
        Kg = <any> 'KG',
        La = <any> 'LA',
        Lv = <any> 'LV',
        Lb = <any> 'LB',
        Ls = <any> 'LS',
        Lr = <any> 'LR',
        Ly = <any> 'LY',
        Li = <any> 'LI',
        Lt = <any> 'LT',
        Lu = <any> 'LU',
        Mo = <any> 'MO',
        Mk = <any> 'MK',
        Mg = <any> 'MG',
        Mw = <any> 'MW',
        My = <any> 'MY',
        Mv = <any> 'MV',
        Ml = <any> 'ML',
        Mt = <any> 'MT',
        Mh = <any> 'MH',
        Mq = <any> 'MQ',
        Mr = <any> 'MR',
        Mu = <any> 'MU',
        Tn = <any> 'TN',
        Tr = <any> 'TR',
        Tm = <any> 'TM',
        Tc = <any> 'TC',
        Tv = <any> 'TV',
        Ug = <any> 'UG',
        Ua = <any> 'UA',
        Ae = <any> 'AE',
        Gb = <any> 'GB',
        Us = <any> 'US',
        Um = <any> 'UM',
        Uy = <any> 'UY',
        Uz = <any> 'UZ',
        Vu = <any> 'VU',
        Ve = <any> 'VE',
        Vn = <any> 'VN',
        Vg = <any> 'VG',
        Vi = <any> 'VI',
        Wf = <any> 'WF',
        Eh = <any> 'EH',
        Ye = <any> 'YE',
        Zm = <any> 'ZM',
        Zw = <any> 'ZW',
        Yt = <any> 'YT',
        Mx = <any> 'MX',
        Fm = <any> 'FM',
        Md = <any> 'MD',
        Mc = <any> 'MC',
        Mn = <any> 'MN',
        Me = <any> 'ME',
        Ms = <any> 'MS',
        Ma = <any> 'MA',
        Mz = <any> 'MZ',
        Mm = <any> 'MM',
        Na = <any> 'NA',
        Nr = <any> 'NR',
        Np = <any> 'NP',
        Nl = <any> 'NL',
        Nc = <any> 'NC',
        Nz = <any> 'NZ',
        Ni = <any> 'NI',
        Ne = <any> 'NE',
        Ng = <any> 'NG',
        Nu = <any> 'NU',
        Nf = <any> 'NF',
        Mp = <any> 'MP',
        No = <any> 'NO',
        Om = <any> 'OM',
        Pk = <any> 'PK',
        Pw = <any> 'PW',
        Ps = <any> 'PS',
        Pa = <any> 'PA',
        Pg = <any> 'PG',
        Py = <any> 'PY',
        Pe = <any> 'PE',
        Ph = <any> 'PH',
        Pn = <any> 'PN',
        Pl = <any> 'PL',
        Pt = <any> 'PT',
        Pr = <any> 'PR',
        Qa = <any> 'QA',
        Re = <any> 'RE',
        Ro = <any> 'RO',
        Ru = <any> 'RU',
        Rw = <any> 'RW',
        Bl = <any> 'BL',
        Sh = <any> 'SH',
        Kn = <any> 'KN',
        Lc = <any> 'LC',
        Mf = <any> 'MF',
        Pm = <any> 'PM',
        Vc = <any> 'VC',
        Ws = <any> 'WS',
        Sm = <any> 'SM',
        St = <any> 'ST',
        Sa = <any> 'SA',
        Sn = <any> 'SN',
        Rs = <any> 'RS',
        Sc = <any> 'SC',
        Sl = <any> 'SL',
        Sg = <any> 'SG',
        Sx = <any> 'SX',
        Sk = <any> 'SK',
        Si = <any> 'SI',
        Sb = <any> 'SB',
        So = <any> 'SO',
        Za = <any> 'ZA',
        Gs = <any> 'GS',
        Ss = <any> 'SS',
        Es = <any> 'ES',
        Lk = <any> 'LK',
        Sd = <any> 'SD',
        Sr = <any> 'SR',
        Sj = <any> 'SJ',
        Sz = <any> 'SZ',
        Se = <any> 'SE',
        Ch = <any> 'CH',
        Sy = <any> 'SY',
        Tw = <any> 'TW',
        Tj = <any> 'TJ',
        Tz = <any> 'TZ',
        Th = <any> 'TH',
        Tl = <any> 'TL',
        Tg = <any> 'TG',
        Tk = <any> 'TK',
        To = <any> 'TO',
        Tt = <any> 'TT'
    }
    export enum TechContactCountryPresenceEnum {
        Af = <any> 'AF',
        Al = <any> 'AL',
        Dz = <any> 'DZ',
        As = <any> 'AS',
        Ad = <any> 'AD',
        Ao = <any> 'AO',
        Ai = <any> 'AI',
        Aq = <any> 'AQ',
        Ag = <any> 'AG',
        Ar = <any> 'AR',
        Am = <any> 'AM',
        Aw = <any> 'AW',
        Au = <any> 'AU',
        At = <any> 'AT',
        Az = <any> 'AZ',
        Bs = <any> 'BS',
        Bh = <any> 'BH',
        Bd = <any> 'BD',
        Bb = <any> 'BB',
        By = <any> 'BY',
        Be = <any> 'BE',
        Bz = <any> 'BZ',
        Bj = <any> 'BJ',
        Bm = <any> 'BM',
        Bt = <any> 'BT',
        Bo = <any> 'BO',
        Bq = <any> 'BQ',
        Ba = <any> 'BA',
        Bw = <any> 'BW',
        Bv = <any> 'BV',
        Br = <any> 'BR',
        Io = <any> 'IO',
        Bn = <any> 'BN',
        Bg = <any> 'BG',
        Bf = <any> 'BF',
        Bi = <any> 'BI',
        Kh = <any> 'KH',
        Cm = <any> 'CM',
        Ca = <any> 'CA',
        Cv = <any> 'CV',
        Ky = <any> 'KY',
        Cf = <any> 'CF',
        Td = <any> 'TD',
        Cl = <any> 'CL',
        Cn = <any> 'CN',
        Cx = <any> 'CX',
        Cc = <any> 'CC',
        Co = <any> 'CO',
        Km = <any> 'KM',
        Cg = <any> 'CG',
        Cd = <any> 'CD',
        Ck = <any> 'CK',
        Cr = <any> 'CR',
        Ci = <any> 'CI',
        Hr = <any> 'HR',
        Cu = <any> 'CU',
        Cw = <any> 'CW',
        Cy = <any> 'CY',
        Cz = <any> 'CZ',
        Dk = <any> 'DK',
        Dj = <any> 'DJ',
        Dm = <any> 'DM',
        Do = <any> 'DO',
        Ec = <any> 'EC',
        Eg = <any> 'EG',
        Sv = <any> 'SV',
        Gq = <any> 'GQ',
        Er = <any> 'ER',
        Ee = <any> 'EE',
        Et = <any> 'ET',
        Fk = <any> 'FK',
        Fo = <any> 'FO',
        Fj = <any> 'FJ',
        Fi = <any> 'FI',
        Fr = <any> 'FR',
        Gf = <any> 'GF',
        Pf = <any> 'PF',
        Tf = <any> 'TF',
        Ga = <any> 'GA',
        Gm = <any> 'GM',
        Ge = <any> 'GE',
        De = <any> 'DE',
        Gh = <any> 'GH',
        Gi = <any> 'GI',
        Gr = <any> 'GR',
        Gl = <any> 'GL',
        Gd = <any> 'GD',
        Gp = <any> 'GP',
        Gu = <any> 'GU',
        Gt = <any> 'GT',
        Gg = <any> 'GG',
        Gn = <any> 'GN',
        Gw = <any> 'GW',
        Gy = <any> 'GY',
        Ht = <any> 'HT',
        Hm = <any> 'HM',
        Va = <any> 'VA',
        Hn = <any> 'HN',
        Hk = <any> 'HK',
        Hu = <any> 'HU',
        Is = <any> 'IS',
        In = <any> 'IN',
        Id = <any> 'ID',
        Ir = <any> 'IR',
        Iq = <any> 'IQ',
        Ie = <any> 'IE',
        Im = <any> 'IM',
        Il = <any> 'IL',
        It = <any> 'IT',
        Jm = <any> 'JM',
        Jp = <any> 'JP',
        Je = <any> 'JE',
        Jo = <any> 'JO',
        Kz = <any> 'KZ',
        Ke = <any> 'KE',
        Ki = <any> 'KI',
        Kp = <any> 'KP',
        Kr = <any> 'KR',
        Kw = <any> 'KW',
        Kg = <any> 'KG',
        La = <any> 'LA',
        Lv = <any> 'LV',
        Lb = <any> 'LB',
        Ls = <any> 'LS',
        Lr = <any> 'LR',
        Ly = <any> 'LY',
        Li = <any> 'LI',
        Lt = <any> 'LT',
        Lu = <any> 'LU',
        Mo = <any> 'MO',
        Mk = <any> 'MK',
        Mg = <any> 'MG',
        Mw = <any> 'MW',
        My = <any> 'MY',
        Mv = <any> 'MV',
        Ml = <any> 'ML',
        Mt = <any> 'MT',
        Mh = <any> 'MH',
        Mq = <any> 'MQ',
        Mr = <any> 'MR',
        Mu = <any> 'MU',
        Tn = <any> 'TN',
        Tr = <any> 'TR',
        Tm = <any> 'TM',
        Tc = <any> 'TC',
        Tv = <any> 'TV',
        Ug = <any> 'UG',
        Ua = <any> 'UA',
        Ae = <any> 'AE',
        Gb = <any> 'GB',
        Us = <any> 'US',
        Um = <any> 'UM',
        Uy = <any> 'UY',
        Uz = <any> 'UZ',
        Vu = <any> 'VU',
        Ve = <any> 'VE',
        Vn = <any> 'VN',
        Vg = <any> 'VG',
        Vi = <any> 'VI',
        Wf = <any> 'WF',
        Eh = <any> 'EH',
        Ye = <any> 'YE',
        Zm = <any> 'ZM',
        Zw = <any> 'ZW',
        Yt = <any> 'YT',
        Mx = <any> 'MX',
        Fm = <any> 'FM',
        Md = <any> 'MD',
        Mc = <any> 'MC',
        Mn = <any> 'MN',
        Me = <any> 'ME',
        Ms = <any> 'MS',
        Ma = <any> 'MA',
        Mz = <any> 'MZ',
        Mm = <any> 'MM',
        Na = <any> 'NA',
        Nr = <any> 'NR',
        Np = <any> 'NP',
        Nl = <any> 'NL',
        Nc = <any> 'NC',
        Nz = <any> 'NZ',
        Ni = <any> 'NI',
        Ne = <any> 'NE',
        Ng = <any> 'NG',
        Nu = <any> 'NU',
        Nf = <any> 'NF',
        Mp = <any> 'MP',
        No = <any> 'NO',
        Om = <any> 'OM',
        Pk = <any> 'PK',
        Pw = <any> 'PW',
        Ps = <any> 'PS',
        Pa = <any> 'PA',
        Pg = <any> 'PG',
        Py = <any> 'PY',
        Pe = <any> 'PE',
        Ph = <any> 'PH',
        Pn = <any> 'PN',
        Pl = <any> 'PL',
        Pt = <any> 'PT',
        Pr = <any> 'PR',
        Qa = <any> 'QA',
        Re = <any> 'RE',
        Ro = <any> 'RO',
        Ru = <any> 'RU',
        Rw = <any> 'RW',
        Bl = <any> 'BL',
        Sh = <any> 'SH',
        Kn = <any> 'KN',
        Lc = <any> 'LC',
        Mf = <any> 'MF',
        Pm = <any> 'PM',
        Vc = <any> 'VC',
        Ws = <any> 'WS',
        Sm = <any> 'SM',
        St = <any> 'ST',
        Sa = <any> 'SA',
        Sn = <any> 'SN',
        Rs = <any> 'RS',
        Sc = <any> 'SC',
        Sl = <any> 'SL',
        Sg = <any> 'SG',
        Sx = <any> 'SX',
        Sk = <any> 'SK',
        Si = <any> 'SI',
        Sb = <any> 'SB',
        So = <any> 'SO',
        Za = <any> 'ZA',
        Gs = <any> 'GS',
        Ss = <any> 'SS',
        Es = <any> 'ES',
        Lk = <any> 'LK',
        Sd = <any> 'SD',
        Sr = <any> 'SR',
        Sj = <any> 'SJ',
        Sz = <any> 'SZ',
        Se = <any> 'SE',
        Ch = <any> 'CH',
        Sy = <any> 'SY',
        Tw = <any> 'TW',
        Tj = <any> 'TJ',
        Tz = <any> 'TZ',
        Th = <any> 'TH',
        Tl = <any> 'TL',
        Tg = <any> 'TG',
        Tk = <any> 'TK',
        To = <any> 'TO',
        Tt = <any> 'TT'
    }
    export enum BillingContactCountryPresenceEnum {
        Af = <any> 'AF',
        Al = <any> 'AL',
        Dz = <any> 'DZ',
        As = <any> 'AS',
        Ad = <any> 'AD',
        Ao = <any> 'AO',
        Ai = <any> 'AI',
        Aq = <any> 'AQ',
        Ag = <any> 'AG',
        Ar = <any> 'AR',
        Am = <any> 'AM',
        Aw = <any> 'AW',
        Au = <any> 'AU',
        At = <any> 'AT',
        Az = <any> 'AZ',
        Bs = <any> 'BS',
        Bh = <any> 'BH',
        Bd = <any> 'BD',
        Bb = <any> 'BB',
        By = <any> 'BY',
        Be = <any> 'BE',
        Bz = <any> 'BZ',
        Bj = <any> 'BJ',
        Bm = <any> 'BM',
        Bt = <any> 'BT',
        Bo = <any> 'BO',
        Bq = <any> 'BQ',
        Ba = <any> 'BA',
        Bw = <any> 'BW',
        Bv = <any> 'BV',
        Br = <any> 'BR',
        Io = <any> 'IO',
        Bn = <any> 'BN',
        Bg = <any> 'BG',
        Bf = <any> 'BF',
        Bi = <any> 'BI',
        Kh = <any> 'KH',
        Cm = <any> 'CM',
        Ca = <any> 'CA',
        Cv = <any> 'CV',
        Ky = <any> 'KY',
        Cf = <any> 'CF',
        Td = <any> 'TD',
        Cl = <any> 'CL',
        Cn = <any> 'CN',
        Cx = <any> 'CX',
        Cc = <any> 'CC',
        Co = <any> 'CO',
        Km = <any> 'KM',
        Cg = <any> 'CG',
        Cd = <any> 'CD',
        Ck = <any> 'CK',
        Cr = <any> 'CR',
        Ci = <any> 'CI',
        Hr = <any> 'HR',
        Cu = <any> 'CU',
        Cw = <any> 'CW',
        Cy = <any> 'CY',
        Cz = <any> 'CZ',
        Dk = <any> 'DK',
        Dj = <any> 'DJ',
        Dm = <any> 'DM',
        Do = <any> 'DO',
        Ec = <any> 'EC',
        Eg = <any> 'EG',
        Sv = <any> 'SV',
        Gq = <any> 'GQ',
        Er = <any> 'ER',
        Ee = <any> 'EE',
        Et = <any> 'ET',
        Fk = <any> 'FK',
        Fo = <any> 'FO',
        Fj = <any> 'FJ',
        Fi = <any> 'FI',
        Fr = <any> 'FR',
        Gf = <any> 'GF',
        Pf = <any> 'PF',
        Tf = <any> 'TF',
        Ga = <any> 'GA',
        Gm = <any> 'GM',
        Ge = <any> 'GE',
        De = <any> 'DE',
        Gh = <any> 'GH',
        Gi = <any> 'GI',
        Gr = <any> 'GR',
        Gl = <any> 'GL',
        Gd = <any> 'GD',
        Gp = <any> 'GP',
        Gu = <any> 'GU',
        Gt = <any> 'GT',
        Gg = <any> 'GG',
        Gn = <any> 'GN',
        Gw = <any> 'GW',
        Gy = <any> 'GY',
        Ht = <any> 'HT',
        Hm = <any> 'HM',
        Va = <any> 'VA',
        Hn = <any> 'HN',
        Hk = <any> 'HK',
        Hu = <any> 'HU',
        Is = <any> 'IS',
        In = <any> 'IN',
        Id = <any> 'ID',
        Ir = <any> 'IR',
        Iq = <any> 'IQ',
        Ie = <any> 'IE',
        Im = <any> 'IM',
        Il = <any> 'IL',
        It = <any> 'IT',
        Jm = <any> 'JM',
        Jp = <any> 'JP',
        Je = <any> 'JE',
        Jo = <any> 'JO',
        Kz = <any> 'KZ',
        Ke = <any> 'KE',
        Ki = <any> 'KI',
        Kp = <any> 'KP',
        Kr = <any> 'KR',
        Kw = <any> 'KW',
        Kg = <any> 'KG',
        La = <any> 'LA',
        Lv = <any> 'LV',
        Lb = <any> 'LB',
        Ls = <any> 'LS',
        Lr = <any> 'LR',
        Ly = <any> 'LY',
        Li = <any> 'LI',
        Lt = <any> 'LT',
        Lu = <any> 'LU',
        Mo = <any> 'MO',
        Mk = <any> 'MK',
        Mg = <any> 'MG',
        Mw = <any> 'MW',
        My = <any> 'MY',
        Mv = <any> 'MV',
        Ml = <any> 'ML',
        Mt = <any> 'MT',
        Mh = <any> 'MH',
        Mq = <any> 'MQ',
        Mr = <any> 'MR',
        Mu = <any> 'MU',
        Tn = <any> 'TN',
        Tr = <any> 'TR',
        Tm = <any> 'TM',
        Tc = <any> 'TC',
        Tv = <any> 'TV',
        Ug = <any> 'UG',
        Ua = <any> 'UA',
        Ae = <any> 'AE',
        Gb = <any> 'GB',
        Us = <any> 'US',
        Um = <any> 'UM',
        Uy = <any> 'UY',
        Uz = <any> 'UZ',
        Vu = <any> 'VU',
        Ve = <any> 'VE',
        Vn = <any> 'VN',
        Vg = <any> 'VG',
        Vi = <any> 'VI',
        Wf = <any> 'WF',
        Eh = <any> 'EH',
        Ye = <any> 'YE',
        Zm = <any> 'ZM',
        Zw = <any> 'ZW',
        Yt = <any> 'YT',
        Mx = <any> 'MX',
        Fm = <any> 'FM',
        Md = <any> 'MD',
        Mc = <any> 'MC',
        Mn = <any> 'MN',
        Me = <any> 'ME',
        Ms = <any> 'MS',
        Ma = <any> 'MA',
        Mz = <any> 'MZ',
        Mm = <any> 'MM',
        Na = <any> 'NA',
        Nr = <any> 'NR',
        Np = <any> 'NP',
        Nl = <any> 'NL',
        Nc = <any> 'NC',
        Nz = <any> 'NZ',
        Ni = <any> 'NI',
        Ne = <any> 'NE',
        Ng = <any> 'NG',
        Nu = <any> 'NU',
        Nf = <any> 'NF',
        Mp = <any> 'MP',
        No = <any> 'NO',
        Om = <any> 'OM',
        Pk = <any> 'PK',
        Pw = <any> 'PW',
        Ps = <any> 'PS',
        Pa = <any> 'PA',
        Pg = <any> 'PG',
        Py = <any> 'PY',
        Pe = <any> 'PE',
        Ph = <any> 'PH',
        Pn = <any> 'PN',
        Pl = <any> 'PL',
        Pt = <any> 'PT',
        Pr = <any> 'PR',
        Qa = <any> 'QA',
        Re = <any> 'RE',
        Ro = <any> 'RO',
        Ru = <any> 'RU',
        Rw = <any> 'RW',
        Bl = <any> 'BL',
        Sh = <any> 'SH',
        Kn = <any> 'KN',
        Lc = <any> 'LC',
        Mf = <any> 'MF',
        Pm = <any> 'PM',
        Vc = <any> 'VC',
        Ws = <any> 'WS',
        Sm = <any> 'SM',
        St = <any> 'ST',
        Sa = <any> 'SA',
        Sn = <any> 'SN',
        Rs = <any> 'RS',
        Sc = <any> 'SC',
        Sl = <any> 'SL',
        Sg = <any> 'SG',
        Sx = <any> 'SX',
        Sk = <any> 'SK',
        Si = <any> 'SI',
        Sb = <any> 'SB',
        So = <any> 'SO',
        Za = <any> 'ZA',
        Gs = <any> 'GS',
        Ss = <any> 'SS',
        Es = <any> 'ES',
        Lk = <any> 'LK',
        Sd = <any> 'SD',
        Sr = <any> 'SR',
        Sj = <any> 'SJ',
        Sz = <any> 'SZ',
        Se = <any> 'SE',
        Ch = <any> 'CH',
        Sy = <any> 'SY',
        Tw = <any> 'TW',
        Tj = <any> 'TJ',
        Tz = <any> 'TZ',
        Th = <any> 'TH',
        Tl = <any> 'TL',
        Tg = <any> 'TG',
        Tk = <any> 'TK',
        To = <any> 'TO',
        Tt = <any> 'TT'
    }
    export enum RegistrationPeriodAfterTransferEnum {
        Unchanged = <any> 'UNCHANGED',
        Extends = <any> 'EXTENDS',
        Restarts = <any> 'RESTARTS'
    }
    export enum SupportedDurationsEnum {
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _6 = <any> '6',
        _7 = <any> '7',
        _8 = <any> '8',
        _9 = <any> '9',
        _10 = <any> '10',
        _11 = <any> '11',
        _12 = <any> '12',
        _24 = <any> '24',
        _36 = <any> '36',
        _48 = <any> '48',
        _60 = <any> '60',
        _72 = <any> '72',
        _84 = <any> '84',
        _96 = <any> '96',
        _108 = <any> '108',
        _120 = <any> '120'
    }
    export enum DomainAdditionalDataEnum {
        CatParameter = <any> 'CAT_PARAMETER',
        ChallengeParameter = <any> 'CHALLENGE_PARAMETER',
        ClaimsToken = <any> 'CLAIMS_TOKEN',
        DonutsPriceCategory = <any> 'DONUTS_PRICE_CATEGORY',
        IntentedUse = <any> 'INTENTED_USE',
        PremiumPriceCategory = <any> 'PREMIUM_PRICE_CATEGORY',
        ProxyService = <any> 'PROXY_SERVICE',
        Sunrise = <any> 'SUNRISE',
        UkDirect = <any> 'UK_DIRECT',
        XxxMember = <any> 'XXX_MEMBER'
    }
    export enum ContactAdditionalDataEnum {
        Afnic = <any> 'AFNIC',
        Cat = <any> 'CAT',
        De = <any> 'DE',
        Es = <any> 'ES',
        Eu = <any> 'EU',
        It = <any> 'IT',
        Lv = <any> 'LV',
        Nl = <any> 'NL',
        Pro = <any> 'PRO',
        Uk = <any> 'UK',
        Us = <any> 'US'
    }
}
