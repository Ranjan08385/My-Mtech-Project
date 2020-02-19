/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #8

export const transactionSendOtpRequest = data => {
  return {
    url: '/moneytransfer/SendOTPOthersStep5',
    payload: data,
    type: Types.POST,
    tag: ApiTag.TRANSACTION_SEND_OTP,
    headers: { 'Content-Type': 'application/json' }
  };
};
