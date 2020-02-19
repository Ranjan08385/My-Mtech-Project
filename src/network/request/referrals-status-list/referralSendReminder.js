/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #60
// {
//   "login": "rajuUSA@gmail.com", "custId": "40769470089", "instanceId": "1000000001",
//     "uName": "raju ka", "resCountryId": "77", "invites": "null",
//       "mode": "null", "emails": "shri3333@gmail.com", "actMode": "ADD", "actEmails": "shri3333@gmail.com"
// }

const SendReferralReminder = customerDetails => {
  return {
    url: 'referralsStatusList/ReferralSendReminder',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.SEND_REFERRAL_REMINDER,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default SendReferralReminder;
