/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #158
// Input
//  {
//  }
// Output
//  {"OTPENABLEFLAG":"true","status":"success","description":"success"}

export const otpStatus = data => {
  return {
    url: '/commons/CheckOtpEnable',
    payload: data,
    type: Types.POST,
    tag: ApiTag.OTP_STATUS,
    headers: {}
  };
};
