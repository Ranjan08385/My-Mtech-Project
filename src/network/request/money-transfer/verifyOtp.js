/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const verifyOtp = customerDetails => {
  return {
    url: '/moneytransfer/VerifyOTPOthersSte5',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.VERIFY_PAY_OTP,
    headers: {},
  };
};
