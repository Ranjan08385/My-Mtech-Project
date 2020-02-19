/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #107
// Sample Input:
// {
//    "custregbeneid":7153156097
// }

export const OnContinueButton = beneId => {
  return {
    url: '/payBills/onContinueButton',
    payload: beneId,
    type: Types.POST,
    tag: ApiTag.BILLING_STATUS_VIEW_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};
