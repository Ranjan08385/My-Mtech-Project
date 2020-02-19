/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #81
// -Input
//    {
//      "instanceId":"1000000001",
//      "custId":"40769452884",
//      "countryid":"77"
//    }
// -Output
//  {
//    "achAcc":[
//      {"ACHACNID":"3796082145","NICKNAME":"dada","ROUTINGNO":"311377901","STATCODE":"ONCREDITCONFIRM",
//        "BANKNAME":"BIG SPRING ED EMP CU","ACCOUNTNO":"245245245","CONFIRMDATE":"false",
//        "ACCOUNTTYPE":"CHECKING ACCOUNT","ACTDATE":"04-NOV-2019","LOC":"United States of America",
//        "ACTSTATUS":"1016","STATUSDESC":"Validate your account","REMARKS":" ","REJECTID":null,
//        "ORIGINALID":"-1","REREGISTER":"N","YODLEEDOCSTATUS":"4"},
//      {"ACHACNID":"3796082153","NICKNAME":"fddfdf","ROUTINGNO":"311377901","STATCODE":"ONCREDITCONFIRM",
//        "BANKNAME":"BIG SPRING ED EMP CU","ACCOUNTNO":"2345671","CONFIRMDATE":"false",
//        "ACCOUNTTYPE":"CHECKING ACCOUNT","ACTDATE":"30-OCT-2019","LOC":"United States of America",
//        "ACTSTATUS":"1016","STATUSDESC":"Validate your account","REMARKS":" ","REJECTID":null,
//         "ORIGINALID":"-1","REREGISTER":"N","YODLEEDOCSTATUS":"9"},
//      ...],
//    "bankAcc":[
//        {"REMACCOUNTNUMBER":"8453555","NICKNAME":"hgfvhj","REMBANKSORTNUMBER":"011000028",
//          "BANKNAME":"STATE STREET BANK AND TRUST COMPANY","ACTDATE":"01-MAR-2019",
//          "LOC":"United States of America","REMACCORIGINAL":"8453555"},
//        {"REMACCOUNTNUMBER":"00114477","NICKNAME":"kjk","REMBANKSORTNUMBER":"064000059",
//          "BANKNAME":"U.S. Bank","ACTDATE":"28-JAN-2019","LOC":"United States of America",
//          "REMACCORIGINAL":"00114477"},
//        ...]
//    "status": "success"
//  }
export const MyBankAccountList = payload => {
  return {
    url: '/managemyaccounts/myAccountsList ',
    payload,
    type: Types.POST,
    tag: ApiTag.MY_BANK_ACCOUNT_LIST,
    headers: {},
  };
};
