/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const confirmOtp = customerDetails => {
  return {
    url: '/moneytransfer/SendOTPOthersStep5',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.CONFIRM_PAY_OTP,
    headers: {},
  };
};
