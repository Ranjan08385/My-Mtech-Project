/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #34
//  {
//    "productId":"100002",
//    "custId":"40769474002",
//    "instanceId":"1000000001",
//    "resCountryId":"77"
//   }
// Output
//  {
//    "status":"success",
//    "result":[
//        {"LNSTATUSEQUI":"PENDING","EQUIFAXSTATUS":"P","M2IPODIDEQUI":100002,"M2IBENETYPEEQUI":"INDIVIDUAL",
//          "BENEID":"P502956067276","DELIVERYMODEID":"200001","BENENAME":"Shreyas Shoney A/c No. XXXXXXXX5656",
//          "PINCODE":"565655","bntp":"INDIVIDUAL","IE_CODE":null,"exOrNonExpress":"Individual Beneficiary"},
//        {"LNSTATUSEQUI":"PENDING","EQUIFAXSTATUS":"P","M2IPODIDEQUI":100002,"M2IBENETYPEEQUI":"INDIVIDUAL",
//          "BENEID":"P502956067373","DELIVERYMODEID":"200001","BENENAME":"Shridhar Acharya A/c No. XXXXXXXX9655",
//          "PINCODE":"984567","bntp":"INDIVIDUAL","IE_CODE":null,"exOrNonExpress":"Individual Beneficiary"}]
//  }

// export const SelectRecipientList = (
//   productId,
//   custId,
//   instanceId,
//   resCountryId
// ) => {
//   return {
//     url: '/moneytransfer/selectRecipientList',
//     payload: { productId, custId, instanceId, resCountryId },
//     type: Types.POST,
//     tag: ApiTag.SELECT_RECIPIENT_LIST,
//     headers: { 'Content-Type': 'application/json' }
//   };
// };

const SelectRecipientList = (productId, custId, instanceId, resCountryId) => {
  return {
    url: '/moneytransfer/selectRecipientList',
    payload: {
      productId,
      custId,
      instanceId,
      resCountryId
    },
    type: Types.POST,
    tag: ApiTag.SELECT_RECIPIENT_LIST,
    headers: { 'Content-Type': 'application/json' }
  };
};

export default SelectRecipientList;
