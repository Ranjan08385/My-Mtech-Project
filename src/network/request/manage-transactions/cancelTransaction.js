/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const CancelTransactions = (
  trackno,
  custId,
  instId,
  mailSetupFlag,
  type = '',
) => {
  const customerDetails = {
    trackno,
    custId,
    instId,
    mailSetupFlag,
    type,
  };

  return {
    url: 'managetransactions/cancelTransaction',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FAV_TRANSACTION,
    headers: {},
  };
};
