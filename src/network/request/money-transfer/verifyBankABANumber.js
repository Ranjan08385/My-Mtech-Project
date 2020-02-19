/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #24
// -Input
// {
//   "abaRoutingNo":"122105155"
//   "countryCode":"USA"
// }
// -Output
// --Success
// {"bankName":"U.S. Bank","yodleeFlag1":"Y","status":"success"}
// --If No bank Found
// {"bankName":"NA","status":"success"}
const VerifyBankABANumber = bankDetails => {
  return {
    url: '/moneytransfer/RetrieveBankNameByRtnoService',
    payload: bankDetails,
    type: Types.POST,
    tag: ApiTag.VERIFY_BANK_ABA_NUMBER,
    headers: {},
  };
};

export default VerifyBankABANumber;
