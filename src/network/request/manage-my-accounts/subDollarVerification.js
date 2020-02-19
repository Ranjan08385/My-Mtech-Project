/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import { encodeBase64 } from '../../../utils/jsEncrypt';
import { Types } from '../../request';
import ApiTag from '../apiTags';
// API doc ref - #81
// -Input
// {"submitValue";"validate"
// "achIdsub";7254507522
// "login";" yji0aDSXW21exTtrV29q"
// "custId";40769476309
// "instId";1000000001
// "mailSetupFlag";"true"
// "credit1";"100"
// "credit2";"200"
// "bankNameVal";null
// "bankRefreshFlag";null
// "resCountryId";null
// "transferMode";null}
// -Output
// no output found in docs

export const subDollarVerification = (achIdsub, login, custId, instId, credit1, credit2) => {
  const form = {
    submitValue: 'validate',
    achIdsub: parseInt(achIdsub),
    login: encodeBase64(login),
    custId: parseInt(custId),
    instId: parseInt(instId),
    mailSetupFlag: 'true',
    credit1,
    credit2,
    bankNameVal: null,
    bankRefreshFlag: null,
    resCountryId: null,
    transferMode: null,
  };

  return {
    url: '/managemyaccounts/subDollarVerification',
    payload: form,
    type: Types.POST,
    tag: ApiTag.SUB_DOLLAR_VERIFICATION,
    headers: {},
  };
};
