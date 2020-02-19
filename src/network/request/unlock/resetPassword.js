/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #142
// Input
// {
// 	"otp": "q+DVncQSjEQ=",
// 	"chnagePwdBy": "null",
// 	"valid": "true",
// 	"secureId": "null",
// 	"id": "pshintre29@gmail.com"
//  }
// Output
//  {"status":"success", "findForward":"success"}
export const resetPassword = customerDetails => {
  return {
    url: 'Unlock/resetPass',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.RESET_PASSWORD,
    headers: { 'Content-Type': 'application/json' },
  };
};
