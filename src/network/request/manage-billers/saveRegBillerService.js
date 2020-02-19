/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #71.b
// Sample Input:
// {
//   "custId": '40769474002',
//   "nickNameAdd": "Chozz",
//   "agreeTermsPhonesSave": "on",
//   "beneId": "2688024584",
//   "login": "WDSizDCoJRYkyTCmyZ5gy20=",
//   "instId": "1000000001",
//   "regPhoneDet": "none",
//   "pOperator": null,
//   "nickname": null,
//   "searchstate": "750060",
//   "searchOperator": "2688024584",
//   "field5": "7438473843843",
//   "field4": "7545454093",
//   "field3": "chozz",
//   "txnAmount": 2168.88,
//   "txnFixedAmount": 150000.0,
//   "radioButton": "on",
//   "regBillerCode": null,
//   "searchcat": 4813,
//   "billAmount": null,
//   "remType": null,
//   "reqtrack": null,
//   "reqtrackNext": null,
//   "beneIdPsnt": null,
//   "dueamountPsnt": null,
//   "billduedate": null,
//   "dueDispAmount": null,
//   "consumerNo": null,
//   "billNo": null,
//   "scheduleId": null,
//   "rejTimeStamp": null
// }

export const SaveRegBillerService = data => {
  return {
    url: '/makepayment/SaveRegBillerService',
    payload: data,
    type: Types.POST,
    tag: ApiTag.SAVE_REGISTERED_BILLER,
    headers: { 'Content-Type': 'application/json' },
  };
};
