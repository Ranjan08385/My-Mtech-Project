/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #107
// Sample Input:
// {
//    "custregbeneid":7153156097
// }

export const pay = data => {
  return {
    url: '/payBills/onProceedToButton',
    payload: data,
    type: Types.POST,
    tag: ApiTag.BILLING_STATUS_VIEW_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};
