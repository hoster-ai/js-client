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
exports.DomainContactDto = void 0;
class DomainContactDto {
    static getAttributeTypeMap() {
        return DomainContactDto.attributeTypeMap;
    }
}
exports.DomainContactDto = DomainContactDto;
DomainContactDto.discriminator = undefined;
DomainContactDto.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "contactCode",
        "baseName": "contactCode",
        "type": "string"
    },
    {
        "name": "integrationId",
        "baseName": "integrationId",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "organization",
        "baseName": "organization",
        "type": "string"
    },
    {
        "name": "street1",
        "baseName": "street1",
        "type": "string"
    },
    {
        "name": "street2",
        "baseName": "street2",
        "type": "string"
    },
    {
        "name": "street3",
        "baseName": "street3",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "postcode",
        "baseName": "postcode",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "DomainContactDto.CountryCodeEnum"
    },
    {
        "name": "telephone",
        "baseName": "telephone",
        "type": "string"
    },
    {
        "name": "fax",
        "baseName": "fax",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "contactType",
        "baseName": "contactType",
        "type": "DomainContactDto.ContactTypeEnum"
    },
    {
        "name": "additional",
        "baseName": "additional",
        "type": "ContactAdditionalDto"
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
(function (DomainContactDto) {
    let CountryCodeEnum;
    (function (CountryCodeEnum) {
        CountryCodeEnum[CountryCodeEnum["Af"] = 'AF'] = "Af";
        CountryCodeEnum[CountryCodeEnum["Al"] = 'AL'] = "Al";
        CountryCodeEnum[CountryCodeEnum["Dz"] = 'DZ'] = "Dz";
        CountryCodeEnum[CountryCodeEnum["As"] = 'AS'] = "As";
        CountryCodeEnum[CountryCodeEnum["Ad"] = 'AD'] = "Ad";
        CountryCodeEnum[CountryCodeEnum["Ao"] = 'AO'] = "Ao";
        CountryCodeEnum[CountryCodeEnum["Ai"] = 'AI'] = "Ai";
        CountryCodeEnum[CountryCodeEnum["Aq"] = 'AQ'] = "Aq";
        CountryCodeEnum[CountryCodeEnum["Ag"] = 'AG'] = "Ag";
        CountryCodeEnum[CountryCodeEnum["Ar"] = 'AR'] = "Ar";
        CountryCodeEnum[CountryCodeEnum["Am"] = 'AM'] = "Am";
        CountryCodeEnum[CountryCodeEnum["Aw"] = 'AW'] = "Aw";
        CountryCodeEnum[CountryCodeEnum["Au"] = 'AU'] = "Au";
        CountryCodeEnum[CountryCodeEnum["At"] = 'AT'] = "At";
        CountryCodeEnum[CountryCodeEnum["Az"] = 'AZ'] = "Az";
        CountryCodeEnum[CountryCodeEnum["Bs"] = 'BS'] = "Bs";
        CountryCodeEnum[CountryCodeEnum["Bh"] = 'BH'] = "Bh";
        CountryCodeEnum[CountryCodeEnum["Bd"] = 'BD'] = "Bd";
        CountryCodeEnum[CountryCodeEnum["Bb"] = 'BB'] = "Bb";
        CountryCodeEnum[CountryCodeEnum["By"] = 'BY'] = "By";
        CountryCodeEnum[CountryCodeEnum["Be"] = 'BE'] = "Be";
        CountryCodeEnum[CountryCodeEnum["Bz"] = 'BZ'] = "Bz";
        CountryCodeEnum[CountryCodeEnum["Bj"] = 'BJ'] = "Bj";
        CountryCodeEnum[CountryCodeEnum["Bm"] = 'BM'] = "Bm";
        CountryCodeEnum[CountryCodeEnum["Bt"] = 'BT'] = "Bt";
        CountryCodeEnum[CountryCodeEnum["Bo"] = 'BO'] = "Bo";
        CountryCodeEnum[CountryCodeEnum["Bq"] = 'BQ'] = "Bq";
        CountryCodeEnum[CountryCodeEnum["Ba"] = 'BA'] = "Ba";
        CountryCodeEnum[CountryCodeEnum["Bw"] = 'BW'] = "Bw";
        CountryCodeEnum[CountryCodeEnum["Bv"] = 'BV'] = "Bv";
        CountryCodeEnum[CountryCodeEnum["Br"] = 'BR'] = "Br";
        CountryCodeEnum[CountryCodeEnum["Io"] = 'IO'] = "Io";
        CountryCodeEnum[CountryCodeEnum["Bn"] = 'BN'] = "Bn";
        CountryCodeEnum[CountryCodeEnum["Bg"] = 'BG'] = "Bg";
        CountryCodeEnum[CountryCodeEnum["Bf"] = 'BF'] = "Bf";
        CountryCodeEnum[CountryCodeEnum["Bi"] = 'BI'] = "Bi";
        CountryCodeEnum[CountryCodeEnum["Kh"] = 'KH'] = "Kh";
        CountryCodeEnum[CountryCodeEnum["Cm"] = 'CM'] = "Cm";
        CountryCodeEnum[CountryCodeEnum["Ca"] = 'CA'] = "Ca";
        CountryCodeEnum[CountryCodeEnum["Cv"] = 'CV'] = "Cv";
        CountryCodeEnum[CountryCodeEnum["Ky"] = 'KY'] = "Ky";
        CountryCodeEnum[CountryCodeEnum["Cf"] = 'CF'] = "Cf";
        CountryCodeEnum[CountryCodeEnum["Td"] = 'TD'] = "Td";
        CountryCodeEnum[CountryCodeEnum["Cl"] = 'CL'] = "Cl";
        CountryCodeEnum[CountryCodeEnum["Cn"] = 'CN'] = "Cn";
        CountryCodeEnum[CountryCodeEnum["Cx"] = 'CX'] = "Cx";
        CountryCodeEnum[CountryCodeEnum["Cc"] = 'CC'] = "Cc";
        CountryCodeEnum[CountryCodeEnum["Co"] = 'CO'] = "Co";
        CountryCodeEnum[CountryCodeEnum["Km"] = 'KM'] = "Km";
        CountryCodeEnum[CountryCodeEnum["Cg"] = 'CG'] = "Cg";
        CountryCodeEnum[CountryCodeEnum["Cd"] = 'CD'] = "Cd";
        CountryCodeEnum[CountryCodeEnum["Ck"] = 'CK'] = "Ck";
        CountryCodeEnum[CountryCodeEnum["Cr"] = 'CR'] = "Cr";
        CountryCodeEnum[CountryCodeEnum["Ci"] = 'CI'] = "Ci";
        CountryCodeEnum[CountryCodeEnum["Hr"] = 'HR'] = "Hr";
        CountryCodeEnum[CountryCodeEnum["Cu"] = 'CU'] = "Cu";
        CountryCodeEnum[CountryCodeEnum["Cw"] = 'CW'] = "Cw";
        CountryCodeEnum[CountryCodeEnum["Cy"] = 'CY'] = "Cy";
        CountryCodeEnum[CountryCodeEnum["Cz"] = 'CZ'] = "Cz";
        CountryCodeEnum[CountryCodeEnum["Dk"] = 'DK'] = "Dk";
        CountryCodeEnum[CountryCodeEnum["Dj"] = 'DJ'] = "Dj";
        CountryCodeEnum[CountryCodeEnum["Dm"] = 'DM'] = "Dm";
        CountryCodeEnum[CountryCodeEnum["Do"] = 'DO'] = "Do";
        CountryCodeEnum[CountryCodeEnum["Ec"] = 'EC'] = "Ec";
        CountryCodeEnum[CountryCodeEnum["Eg"] = 'EG'] = "Eg";
        CountryCodeEnum[CountryCodeEnum["Sv"] = 'SV'] = "Sv";
        CountryCodeEnum[CountryCodeEnum["Gq"] = 'GQ'] = "Gq";
        CountryCodeEnum[CountryCodeEnum["Er"] = 'ER'] = "Er";
        CountryCodeEnum[CountryCodeEnum["Ee"] = 'EE'] = "Ee";
        CountryCodeEnum[CountryCodeEnum["Et"] = 'ET'] = "Et";
        CountryCodeEnum[CountryCodeEnum["Fk"] = 'FK'] = "Fk";
        CountryCodeEnum[CountryCodeEnum["Fo"] = 'FO'] = "Fo";
        CountryCodeEnum[CountryCodeEnum["Fj"] = 'FJ'] = "Fj";
        CountryCodeEnum[CountryCodeEnum["Fi"] = 'FI'] = "Fi";
        CountryCodeEnum[CountryCodeEnum["Fr"] = 'FR'] = "Fr";
        CountryCodeEnum[CountryCodeEnum["Gf"] = 'GF'] = "Gf";
        CountryCodeEnum[CountryCodeEnum["Pf"] = 'PF'] = "Pf";
        CountryCodeEnum[CountryCodeEnum["Tf"] = 'TF'] = "Tf";
        CountryCodeEnum[CountryCodeEnum["Ga"] = 'GA'] = "Ga";
        CountryCodeEnum[CountryCodeEnum["Gm"] = 'GM'] = "Gm";
        CountryCodeEnum[CountryCodeEnum["Ge"] = 'GE'] = "Ge";
        CountryCodeEnum[CountryCodeEnum["De"] = 'DE'] = "De";
        CountryCodeEnum[CountryCodeEnum["Gh"] = 'GH'] = "Gh";
        CountryCodeEnum[CountryCodeEnum["Gi"] = 'GI'] = "Gi";
        CountryCodeEnum[CountryCodeEnum["Gr"] = 'GR'] = "Gr";
        CountryCodeEnum[CountryCodeEnum["Gl"] = 'GL'] = "Gl";
        CountryCodeEnum[CountryCodeEnum["Gd"] = 'GD'] = "Gd";
        CountryCodeEnum[CountryCodeEnum["Gp"] = 'GP'] = "Gp";
        CountryCodeEnum[CountryCodeEnum["Gu"] = 'GU'] = "Gu";
        CountryCodeEnum[CountryCodeEnum["Gt"] = 'GT'] = "Gt";
        CountryCodeEnum[CountryCodeEnum["Gg"] = 'GG'] = "Gg";
        CountryCodeEnum[CountryCodeEnum["Gn"] = 'GN'] = "Gn";
        CountryCodeEnum[CountryCodeEnum["Gw"] = 'GW'] = "Gw";
        CountryCodeEnum[CountryCodeEnum["Gy"] = 'GY'] = "Gy";
        CountryCodeEnum[CountryCodeEnum["Ht"] = 'HT'] = "Ht";
        CountryCodeEnum[CountryCodeEnum["Hm"] = 'HM'] = "Hm";
        CountryCodeEnum[CountryCodeEnum["Va"] = 'VA'] = "Va";
        CountryCodeEnum[CountryCodeEnum["Hn"] = 'HN'] = "Hn";
        CountryCodeEnum[CountryCodeEnum["Hk"] = 'HK'] = "Hk";
        CountryCodeEnum[CountryCodeEnum["Hu"] = 'HU'] = "Hu";
        CountryCodeEnum[CountryCodeEnum["Is"] = 'IS'] = "Is";
        CountryCodeEnum[CountryCodeEnum["In"] = 'IN'] = "In";
        CountryCodeEnum[CountryCodeEnum["Id"] = 'ID'] = "Id";
        CountryCodeEnum[CountryCodeEnum["Ir"] = 'IR'] = "Ir";
        CountryCodeEnum[CountryCodeEnum["Iq"] = 'IQ'] = "Iq";
        CountryCodeEnum[CountryCodeEnum["Ie"] = 'IE'] = "Ie";
        CountryCodeEnum[CountryCodeEnum["Im"] = 'IM'] = "Im";
        CountryCodeEnum[CountryCodeEnum["Il"] = 'IL'] = "Il";
        CountryCodeEnum[CountryCodeEnum["It"] = 'IT'] = "It";
        CountryCodeEnum[CountryCodeEnum["Jm"] = 'JM'] = "Jm";
        CountryCodeEnum[CountryCodeEnum["Jp"] = 'JP'] = "Jp";
        CountryCodeEnum[CountryCodeEnum["Je"] = 'JE'] = "Je";
        CountryCodeEnum[CountryCodeEnum["Jo"] = 'JO'] = "Jo";
        CountryCodeEnum[CountryCodeEnum["Kz"] = 'KZ'] = "Kz";
        CountryCodeEnum[CountryCodeEnum["Ke"] = 'KE'] = "Ke";
        CountryCodeEnum[CountryCodeEnum["Ki"] = 'KI'] = "Ki";
        CountryCodeEnum[CountryCodeEnum["Kp"] = 'KP'] = "Kp";
        CountryCodeEnum[CountryCodeEnum["Kr"] = 'KR'] = "Kr";
        CountryCodeEnum[CountryCodeEnum["Kw"] = 'KW'] = "Kw";
        CountryCodeEnum[CountryCodeEnum["Kg"] = 'KG'] = "Kg";
        CountryCodeEnum[CountryCodeEnum["La"] = 'LA'] = "La";
        CountryCodeEnum[CountryCodeEnum["Lv"] = 'LV'] = "Lv";
        CountryCodeEnum[CountryCodeEnum["Lb"] = 'LB'] = "Lb";
        CountryCodeEnum[CountryCodeEnum["Ls"] = 'LS'] = "Ls";
        CountryCodeEnum[CountryCodeEnum["Lr"] = 'LR'] = "Lr";
        CountryCodeEnum[CountryCodeEnum["Ly"] = 'LY'] = "Ly";
        CountryCodeEnum[CountryCodeEnum["Li"] = 'LI'] = "Li";
        CountryCodeEnum[CountryCodeEnum["Lt"] = 'LT'] = "Lt";
        CountryCodeEnum[CountryCodeEnum["Lu"] = 'LU'] = "Lu";
        CountryCodeEnum[CountryCodeEnum["Mo"] = 'MO'] = "Mo";
        CountryCodeEnum[CountryCodeEnum["Mk"] = 'MK'] = "Mk";
        CountryCodeEnum[CountryCodeEnum["Mg"] = 'MG'] = "Mg";
        CountryCodeEnum[CountryCodeEnum["Mw"] = 'MW'] = "Mw";
        CountryCodeEnum[CountryCodeEnum["My"] = 'MY'] = "My";
        CountryCodeEnum[CountryCodeEnum["Mv"] = 'MV'] = "Mv";
        CountryCodeEnum[CountryCodeEnum["Ml"] = 'ML'] = "Ml";
        CountryCodeEnum[CountryCodeEnum["Mt"] = 'MT'] = "Mt";
        CountryCodeEnum[CountryCodeEnum["Mh"] = 'MH'] = "Mh";
        CountryCodeEnum[CountryCodeEnum["Mq"] = 'MQ'] = "Mq";
        CountryCodeEnum[CountryCodeEnum["Mr"] = 'MR'] = "Mr";
        CountryCodeEnum[CountryCodeEnum["Mu"] = 'MU'] = "Mu";
        CountryCodeEnum[CountryCodeEnum["Tn"] = 'TN'] = "Tn";
        CountryCodeEnum[CountryCodeEnum["Tr"] = 'TR'] = "Tr";
        CountryCodeEnum[CountryCodeEnum["Tm"] = 'TM'] = "Tm";
        CountryCodeEnum[CountryCodeEnum["Tc"] = 'TC'] = "Tc";
        CountryCodeEnum[CountryCodeEnum["Tv"] = 'TV'] = "Tv";
        CountryCodeEnum[CountryCodeEnum["Ug"] = 'UG'] = "Ug";
        CountryCodeEnum[CountryCodeEnum["Ua"] = 'UA'] = "Ua";
        CountryCodeEnum[CountryCodeEnum["Ae"] = 'AE'] = "Ae";
        CountryCodeEnum[CountryCodeEnum["Gb"] = 'GB'] = "Gb";
        CountryCodeEnum[CountryCodeEnum["Us"] = 'US'] = "Us";
        CountryCodeEnum[CountryCodeEnum["Um"] = 'UM'] = "Um";
        CountryCodeEnum[CountryCodeEnum["Uy"] = 'UY'] = "Uy";
        CountryCodeEnum[CountryCodeEnum["Uz"] = 'UZ'] = "Uz";
        CountryCodeEnum[CountryCodeEnum["Vu"] = 'VU'] = "Vu";
        CountryCodeEnum[CountryCodeEnum["Ve"] = 'VE'] = "Ve";
        CountryCodeEnum[CountryCodeEnum["Vn"] = 'VN'] = "Vn";
        CountryCodeEnum[CountryCodeEnum["Vg"] = 'VG'] = "Vg";
        CountryCodeEnum[CountryCodeEnum["Vi"] = 'VI'] = "Vi";
        CountryCodeEnum[CountryCodeEnum["Wf"] = 'WF'] = "Wf";
        CountryCodeEnum[CountryCodeEnum["Eh"] = 'EH'] = "Eh";
        CountryCodeEnum[CountryCodeEnum["Ye"] = 'YE'] = "Ye";
        CountryCodeEnum[CountryCodeEnum["Zm"] = 'ZM'] = "Zm";
        CountryCodeEnum[CountryCodeEnum["Zw"] = 'ZW'] = "Zw";
        CountryCodeEnum[CountryCodeEnum["Yt"] = 'YT'] = "Yt";
        CountryCodeEnum[CountryCodeEnum["Mx"] = 'MX'] = "Mx";
        CountryCodeEnum[CountryCodeEnum["Fm"] = 'FM'] = "Fm";
        CountryCodeEnum[CountryCodeEnum["Md"] = 'MD'] = "Md";
        CountryCodeEnum[CountryCodeEnum["Mc"] = 'MC'] = "Mc";
        CountryCodeEnum[CountryCodeEnum["Mn"] = 'MN'] = "Mn";
        CountryCodeEnum[CountryCodeEnum["Me"] = 'ME'] = "Me";
        CountryCodeEnum[CountryCodeEnum["Ms"] = 'MS'] = "Ms";
        CountryCodeEnum[CountryCodeEnum["Ma"] = 'MA'] = "Ma";
        CountryCodeEnum[CountryCodeEnum["Mz"] = 'MZ'] = "Mz";
        CountryCodeEnum[CountryCodeEnum["Mm"] = 'MM'] = "Mm";
        CountryCodeEnum[CountryCodeEnum["Na"] = 'NA'] = "Na";
        CountryCodeEnum[CountryCodeEnum["Nr"] = 'NR'] = "Nr";
        CountryCodeEnum[CountryCodeEnum["Np"] = 'NP'] = "Np";
        CountryCodeEnum[CountryCodeEnum["Nl"] = 'NL'] = "Nl";
        CountryCodeEnum[CountryCodeEnum["Nc"] = 'NC'] = "Nc";
        CountryCodeEnum[CountryCodeEnum["Nz"] = 'NZ'] = "Nz";
        CountryCodeEnum[CountryCodeEnum["Ni"] = 'NI'] = "Ni";
        CountryCodeEnum[CountryCodeEnum["Ne"] = 'NE'] = "Ne";
        CountryCodeEnum[CountryCodeEnum["Ng"] = 'NG'] = "Ng";
        CountryCodeEnum[CountryCodeEnum["Nu"] = 'NU'] = "Nu";
        CountryCodeEnum[CountryCodeEnum["Nf"] = 'NF'] = "Nf";
        CountryCodeEnum[CountryCodeEnum["Mp"] = 'MP'] = "Mp";
        CountryCodeEnum[CountryCodeEnum["No"] = 'NO'] = "No";
        CountryCodeEnum[CountryCodeEnum["Om"] = 'OM'] = "Om";
        CountryCodeEnum[CountryCodeEnum["Pk"] = 'PK'] = "Pk";
        CountryCodeEnum[CountryCodeEnum["Pw"] = 'PW'] = "Pw";
        CountryCodeEnum[CountryCodeEnum["Ps"] = 'PS'] = "Ps";
        CountryCodeEnum[CountryCodeEnum["Pa"] = 'PA'] = "Pa";
        CountryCodeEnum[CountryCodeEnum["Pg"] = 'PG'] = "Pg";
        CountryCodeEnum[CountryCodeEnum["Py"] = 'PY'] = "Py";
        CountryCodeEnum[CountryCodeEnum["Pe"] = 'PE'] = "Pe";
        CountryCodeEnum[CountryCodeEnum["Ph"] = 'PH'] = "Ph";
        CountryCodeEnum[CountryCodeEnum["Pn"] = 'PN'] = "Pn";
        CountryCodeEnum[CountryCodeEnum["Pl"] = 'PL'] = "Pl";
        CountryCodeEnum[CountryCodeEnum["Pt"] = 'PT'] = "Pt";
        CountryCodeEnum[CountryCodeEnum["Pr"] = 'PR'] = "Pr";
        CountryCodeEnum[CountryCodeEnum["Qa"] = 'QA'] = "Qa";
        CountryCodeEnum[CountryCodeEnum["Re"] = 'RE'] = "Re";
        CountryCodeEnum[CountryCodeEnum["Ro"] = 'RO'] = "Ro";
        CountryCodeEnum[CountryCodeEnum["Ru"] = 'RU'] = "Ru";
        CountryCodeEnum[CountryCodeEnum["Rw"] = 'RW'] = "Rw";
        CountryCodeEnum[CountryCodeEnum["Bl"] = 'BL'] = "Bl";
        CountryCodeEnum[CountryCodeEnum["Sh"] = 'SH'] = "Sh";
        CountryCodeEnum[CountryCodeEnum["Kn"] = 'KN'] = "Kn";
        CountryCodeEnum[CountryCodeEnum["Lc"] = 'LC'] = "Lc";
        CountryCodeEnum[CountryCodeEnum["Mf"] = 'MF'] = "Mf";
        CountryCodeEnum[CountryCodeEnum["Pm"] = 'PM'] = "Pm";
        CountryCodeEnum[CountryCodeEnum["Vc"] = 'VC'] = "Vc";
        CountryCodeEnum[CountryCodeEnum["Ws"] = 'WS'] = "Ws";
        CountryCodeEnum[CountryCodeEnum["Sm"] = 'SM'] = "Sm";
        CountryCodeEnum[CountryCodeEnum["St"] = 'ST'] = "St";
        CountryCodeEnum[CountryCodeEnum["Sa"] = 'SA'] = "Sa";
        CountryCodeEnum[CountryCodeEnum["Sn"] = 'SN'] = "Sn";
        CountryCodeEnum[CountryCodeEnum["Rs"] = 'RS'] = "Rs";
        CountryCodeEnum[CountryCodeEnum["Sc"] = 'SC'] = "Sc";
        CountryCodeEnum[CountryCodeEnum["Sl"] = 'SL'] = "Sl";
        CountryCodeEnum[CountryCodeEnum["Sg"] = 'SG'] = "Sg";
        CountryCodeEnum[CountryCodeEnum["Sx"] = 'SX'] = "Sx";
        CountryCodeEnum[CountryCodeEnum["Sk"] = 'SK'] = "Sk";
        CountryCodeEnum[CountryCodeEnum["Si"] = 'SI'] = "Si";
        CountryCodeEnum[CountryCodeEnum["Sb"] = 'SB'] = "Sb";
        CountryCodeEnum[CountryCodeEnum["So"] = 'SO'] = "So";
        CountryCodeEnum[CountryCodeEnum["Za"] = 'ZA'] = "Za";
        CountryCodeEnum[CountryCodeEnum["Gs"] = 'GS'] = "Gs";
        CountryCodeEnum[CountryCodeEnum["Ss"] = 'SS'] = "Ss";
        CountryCodeEnum[CountryCodeEnum["Es"] = 'ES'] = "Es";
        CountryCodeEnum[CountryCodeEnum["Lk"] = 'LK'] = "Lk";
        CountryCodeEnum[CountryCodeEnum["Sd"] = 'SD'] = "Sd";
        CountryCodeEnum[CountryCodeEnum["Sr"] = 'SR'] = "Sr";
        CountryCodeEnum[CountryCodeEnum["Sj"] = 'SJ'] = "Sj";
        CountryCodeEnum[CountryCodeEnum["Sz"] = 'SZ'] = "Sz";
        CountryCodeEnum[CountryCodeEnum["Se"] = 'SE'] = "Se";
        CountryCodeEnum[CountryCodeEnum["Ch"] = 'CH'] = "Ch";
        CountryCodeEnum[CountryCodeEnum["Sy"] = 'SY'] = "Sy";
        CountryCodeEnum[CountryCodeEnum["Tw"] = 'TW'] = "Tw";
        CountryCodeEnum[CountryCodeEnum["Tj"] = 'TJ'] = "Tj";
        CountryCodeEnum[CountryCodeEnum["Tz"] = 'TZ'] = "Tz";
        CountryCodeEnum[CountryCodeEnum["Th"] = 'TH'] = "Th";
        CountryCodeEnum[CountryCodeEnum["Tl"] = 'TL'] = "Tl";
        CountryCodeEnum[CountryCodeEnum["Tg"] = 'TG'] = "Tg";
        CountryCodeEnum[CountryCodeEnum["Tk"] = 'TK'] = "Tk";
        CountryCodeEnum[CountryCodeEnum["To"] = 'TO'] = "To";
        CountryCodeEnum[CountryCodeEnum["Tt"] = 'TT'] = "Tt";
    })(CountryCodeEnum = DomainContactDto.CountryCodeEnum || (DomainContactDto.CountryCodeEnum = {}));
    let ContactTypeEnum;
    (function (ContactTypeEnum) {
        ContactTypeEnum[ContactTypeEnum["Admin"] = 'ADMIN'] = "Admin";
        ContactTypeEnum[ContactTypeEnum["Billing"] = 'BILLING'] = "Billing";
        ContactTypeEnum[ContactTypeEnum["Tech"] = 'TECH'] = "Tech";
        ContactTypeEnum[ContactTypeEnum["Registrant"] = 'REGISTRANT'] = "Registrant";
    })(ContactTypeEnum = DomainContactDto.ContactTypeEnum || (DomainContactDto.ContactTypeEnum = {}));
})(DomainContactDto || (exports.DomainContactDto = DomainContactDto = {}));