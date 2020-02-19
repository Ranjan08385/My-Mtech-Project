/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #8

export const transactionVerifyOtpRequest = data => {
  return {
    url: '/moneytransfer/VerifyOTPOthersSte5',
    payload: data,
    type: Types.POST,
    tag: ApiTag.TRANSACTION_VERIFY_OTP,
    headers: { 'Content-Type': 'application/json' }
  };
};
