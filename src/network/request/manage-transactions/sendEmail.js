/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const SendEmail = (
  fromDate,
  toDate,
  custId,
  userId,
  instId,
  emailId,

  // fromDate = '01/07/2019',
  // toDate = '18/12/2019',
  // custId = 40769470089,
  // userId = 'rajuusa@gmail.com',
  // instId = 1000000001,
  // emailId = 'RAJUUSA@GMAIL.COM',
) => {
  const customerDetails = {
    fromDate,
    toDate,
    custId,
    instId,
    userId,
    emailId,
  };

  return {
    url: 'submitTransaction/submitTrans',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FAV_TRANSACTION,
    headers: {},
  };
};
