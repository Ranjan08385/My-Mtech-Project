/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #141, 143
// Input
// -- Reset using OTP->Send OTP or ResendOTP(141)
//  {
// 	  "submitValue": "verifyotp",
// 	  "enterUserId": "pshintre29@gmail.com",
// 	  "chkUserORpassFlag": "forUserId",
// 	  "enterOtp": "660287",
// 	  "chanelFlag": "ForgotUID",
// 	  "instId": 1000000001
//  }
// -- using userid/email-> submit(143)
//  {
//    "submitValue":"otpSecure",
//    "enterUserId":"pshintre29@gmail.com"
//  }
// Output
//  {"status":"success", "findForward":"success"}
export const ForgetPassword = customerDetails => {
  return {
    url: 'Unlock/forgotPassword',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FORGOT_PASSWORD,
    headers: {},
  };
};
