/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #26
// -Input
//    {
//      "login":"","custId":"","reCountryId":"","instanceId":"","yodleemode":"",
//      "transferMode":"","accntNo":"","accntType":"","abaRTNo":"","accntNickName":"",
//      "currencyID":"","remBankName":"","bankName":"","yodleeFlag1":""
//    }
// -Output
//    pending
const VerifyBankDetails = bankDetails => {
  return {
    url: '/moneytransfer/verifyBankDetails',
    payload: bankDetails,
    type: Types.POST,
    tag: ApiTag.VERIFY_BANK_DETAILS,
    headers: {},
  };
};

export default VerifyBankDetails;
