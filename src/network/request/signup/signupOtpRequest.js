/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const signupOtp = (sessionId, mobileNo, custname, email, country, userId, regFlag) => {
  return {
    url: '/signup/OtpSendWithEncryptToOthers',
    payload: { sessionId, mobileNo, custname, email, country, userId, regFlag },
    type: Types.POST,
    tag: ApiTag.SIGNUP_OTP,
    headers: {},
    authRequired: false,
  };
};
