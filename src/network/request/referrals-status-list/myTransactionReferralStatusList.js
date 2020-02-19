/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #59
// Input
//  {
// 	  "loginId":"SAI111@US.COM",
// 	  "countryId":"77"
//  }
// Output
//  {
//    "status":"success"
//    "result":[
//      {"M2ICUSTREFID":"4186439681","M2ICUSTID":"40769470089","FIRSTNAME":null,"LASTNAME":null,
//        "REFEMAIL":"SARITADEVI.TIWARI@ICICIBANK.COM","EMAILPROCESSED":"E","REFDATE":"2019-05-08 00:00:00.0",
//        "STATUS":"2","VERSION":"1","MAKER":"AUTOEOD","MAKERSTAMP":"2017-02-01 17:16:42.0",
//        "UPDSTAMP":"2018-09-25 16:05:51.0","CUST_ID":null,"REGISTERED_FLAG":"Y","FRIEND_CUST_CODE":null,
//        "GENFRIENDID":"REF18425","QUALIFICATIONSTATUSFLAG":"1","REM_FLAG":"N","TRACKNO":"M2X10720476",
//        "QUALIFYDATE":"2018-09-25 00:00:00.0","PBOEMPID":null,"CHANNEL":"REVAMP","DTOFREMCONSENT":null}]
//   }
const GetMyTransactionReferralsStatusList = customerDetails => {
  return {
    url: 'referralsStatusList/myTxnReferralsStatusList',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.MY_TRANSACTION_REFERRALS_STATUS_LIST,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default GetMyTransactionReferralsStatusList;
