/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #58
// Input
// {
// "login": "zjCnaSSQNRYkyTCmyZ5gy20=",
// "custId": "40769470089",
// "instanceId": "1000000001",
// "uName": "raju ka",
// "resCountryId": "77",
// "invites": "null",
// "mode": "null",
// "emails": "shri3333@gmail.com",
// "actMode": "ADD",
// "actEmails": "shri3333@gmail.com"
//  }

// Output
// {"status":"success"}

const SendReferralRequest = customerDetails => {
  return {
    url: '/referralsStatusList/sendReferal',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.SEND_REFERRAL,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default SendReferralRequest;
