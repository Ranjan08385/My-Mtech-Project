/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #26
// -Input
//    {
//      "trnsfrMode" : "1",
//      "login" : "WDSizDCoJRYkyTCmyZ5gy20=",
//      "custId" : 40769474002,
//      "instId" : 1000000001,
//      "resCountryId" : 77,
//      "accntNo" : "KgV0KQN1KAR0Kd==",
//      "confirmAccNo" : "KgV0KQN1KAR0Kd==",
//      "transferMode" : "100002",
//      "ssNo" : "",
//      "siNo" : "",
//      "achFlag" : "false",
//      "accntType" : "2",
//      "abaRTNo" : "JQFvJQX1JQR1",
//      "accntNickName" : "pratham",
//      "currencyID" : "99",
//      "remBankName" : "",
//      "bankName" : "U.S. Bank",
//      "yodleeFlag1" : "Y",
//      "remBankNameother" : "",
//      "modePage" : "",
//      "remBankSort" : "",
//      "remBankCountryIsoCode" : "",
//      "remIban" : "",
//      "remAccNumber" : "",
//      "remCompFlag" : "",
//      "duplicate" : "",
//      "tempformBean" : "",
//      "beanObj" : null
//    }
// -Output
//    {
//      "othervarname":"",  "currencyID":"99",  "accntType":"2",  "accntNo":"6645454546",
//      "ssNo":"",  "siNo":"",  "abaRTNo":"122105155",  "accntNickName":"pratham",
//      "transferMode":"100002",  "achFlag":"false",  "remBankSort":"", "remBankName":"",
//      "bankName":"U.S. Bank", "remBankCountryIsoCode":"", "remIban":"", "remAccNumber":"",
//      "remCompFlag":"N",  "pageMode":"", "message":"YES##Account Added Successfully.##true",
//      "tempformBean":"com.cashtech.m2w.myaccount.addMyBankAccount.dto.ActAddMyBankAccountVerifyDataDTO@40d0eed0",
//      "status":"Success"
//    }
const AddBankDetails = bankDetails => {
  return {
    url: '/moneytransfer/verifyData',
    payload: bankDetails,
    type: Types.POST,
    tag: ApiTag.VERIFY_BANK_DETAILS,
    headers: {},
  };
};

export default AddBankDetails;
