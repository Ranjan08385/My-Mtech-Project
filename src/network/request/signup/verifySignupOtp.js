/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';
import { encodeBase64 } from '../../../utils/jsEncrypt';

export const signupVerifyOTP = (sessionId, OTP, userId, regFlag) => {
  const otp = encodeBase64(OTP);
  return {
    url: '/signup/verifyOTPOthers',
    payload: { sessionId, otp, userId, regFlag },
    type: Types.POST,
    tag: ApiTag.SIGNUP_OTP_VERIFY,
    headers: { 'Content-Type': 'application/json' },
  };
};
