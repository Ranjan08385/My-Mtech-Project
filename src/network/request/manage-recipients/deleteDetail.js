/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #40
// Input
// {
//   "custId":"40769474002",
//   "instanceId":"1000000001"
//  }
// Output
// {
//  "status":"success",
//  "result":[
//    {"BENENAME":"Shreyas Shoney","BENEID":"502956067276","DELIVERYMODEDESC":"ICICI Bank A/c",
//      "DELIVERYMODECODE":"AT","DELIVERYMODEID":"200001","BANK":"ICICI Bank","BENESTATUS":"3",
//      "NICKNAME":"Shru","ACCNO":"015201895656","DDLOCATION":"NA","BENETYPE":"P","PELICAN_FLAG":"PENDING",
//      "BENE_STATUS":"ACCEPTED","POLICY":null},
//    {"BENENAME":"Shridhar Acharya","BENEID":"502956067373","DELIVERYMODEDESC":"ICICI Bank A/c",
//      "DELIVERYMODECODE":"AT","DELIVERYMODEID":"200001","BANK":"ICICI Bank","BENESTATUS":"3",
//      "NICKNAME":"Shridhu","ACCNO":"015201789655","DDLOCATION":"NA","BENETYPE":"P","PELICAN_FLAG":"PENDING",
//      "BENE_STATUS":"ACCEPTED","POLICY":null}],
//  }

export const deleteDetails = (perBeneId, beneType, custId) => {
  console.log('cust id here', custId);
  const myRecipientList = {
    perBeneId,
    beneType,
    custId,
  };

  return {
    url: '/managerecipients/actRemoveBene',
    payload: myRecipientList,
    type: Types.POST,
    tag: ApiTag.MY_RECIPIENT_LIST,
    headers: {},
  };
};
