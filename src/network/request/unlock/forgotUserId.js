/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #139, 140
// Input
// -----send otp(139)
//  {
//    "mobileNo": "8850087709","submitValue":"otp_uid_mobile","chanelFlag":"ForgotUID",
//    "enterUserId":"pshintre29@gmail.com"
//  }
// ----submit otp(140)
//  {
// 	  "submitValue": "verifyotp",
// 	  "enterUserId": "pshintre29@gmail.com",
// 	  "chkUserORpassFlag": "forUserId",
// 	  "enterOtp": "660287",
// 	  "chanelFlag": "ForgotUID",
// 	  "instId": 1000000001
//  }
// Output
//  {"status":"success", "findForward":"success"}
export const forgotUserId = customerDetails => {
  return {
    url: 'Unlock/forgotUserId',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FORGOT_USERID,
    headers: {},
  };
};
