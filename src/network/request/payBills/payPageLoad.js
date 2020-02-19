/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #107
// Sample Input:
// {
//    "custregbeneid":7153156097
// }

export const payPageLoad = beneId => {
  const paymentDetails = {
    beneId,
  };

  return {
    url: '/payBills/otherBillers',
    payload: paymentDetails,
    type: Types.POST,
    tag: ApiTag.BILLING_STATUS_VIEW_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};
