/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #57a
// Input
//  {
//    "custId":"40769470089"
//  }
// Output
//  {
//    "status":"success",
//    "result":[
//        {"REFERCODE":"REF17961","EMAILID":"raju.kamoji@ext.icicibank.com","REGDATE":"2015-10-12 00:00:00.0"}
//       ]}
const GetReferralStatusList = customerDetails => {
  return {
    url: '/referralsStatusList/myReferralsUniqueCode',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.REFERRAL_STATUS_LIST,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default GetReferralStatusList;
