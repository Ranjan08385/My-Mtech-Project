/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #43
// Input
// {
//   "custId": 40769470089,
//  }
// Output
// {
//   "status":"success",
//   "result":[
//      {"SRNO":"100171239","NAME":"SAI MAMNU","BANKNAME":"ICICI BANK","ACCOUNTNUMBER":"019107777104",
//        "AMOUNT":"14000","M2ISTATUS":"Money transfer initiated","PURPOSE":"Hey, money has been succesful"}],
//  }

export const GetMyRecipienRequesttList = (loginId, countryId) => {
  const myRecipientList = {
    loginId,
    countryId,
  };

  return {
    url: '/managerecipients/myRecReqList',
    payload: myRecipientList,
    type: Types.POST,
    tag: ApiTag.MY_RECIPIENT_REQUEST_LIST,
    headers: {},
  };
};
