/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #71
// Sample Input:
// For Presentment:
// {
//   "beneId": "3121971201"
// }

// For Payment:
// {
//   "beneId": "2744713219"
// }

export const ActGetSubmitRegDataService = beneId => {
  return {
    url: '/makepayment/ActGetSubmitRegDataService',
    payload: beneId,
    type: Types.POST,
    tag: ApiTag.ADD_LANDLINE,
    headers: { 'Content-Type': 'application/json' },
  };
};
