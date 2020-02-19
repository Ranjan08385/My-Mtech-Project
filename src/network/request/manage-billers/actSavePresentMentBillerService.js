/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #71.a
// Sample Input:
// {
//   "custId": "40769474002",
//   "nickNameAdd": "tikki",
//   "agreeTermsPhonesSave": "on",
//   "beneId": "3132882951",
//   "login": "deepak1@gmail.com",
//   "instId": "1000000001",
//   "regPhoneDet": "none",
//   "pOperator": null,
//   "nickname": null,
//   "searchstate": 750077,
//   "searchOperator": 3111780354,
//   "field5": 4748374837,
//   "field4": 8457878458,
//   "txnAmount": 2168.88,
//   "txnFixedAmount": 150000.0,
//   "radioButton": "on",
//   "regBillerCode": null,
//   "searchcat": "4813",
//   "billAmount": null,
//   "remType": null,
//   "reqtrack": null,
//   "reqtrackNext": null,
//   "beneIdPsnt": null,
//   "nicknamePsnt": null,
//   "dueamountPsnt": null,
//   "billduedate": null,
//   "dueDispAmount": null,
//   "consumerNo": null,
//   "billNo": null,
//   "scheduleId": null,
//   "rejTimeStamp": null,
//   "field3": null,
//   "field2": null
// }

export const ActSavePresentMentBillerService = data => {
  return {
    url: '/makepayment/ActSavePresentMentBillerService',
    payload: data,
    type: Types.POST,
    tag: ApiTag.SAVE_PRESENTMENT_BILLER,
    headers: { 'Content-Type': 'application/json' },
  };
};
