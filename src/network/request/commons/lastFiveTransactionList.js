/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #38
// -Input
// {
// 	"custId": "",
// 	"resCountryId": ""
// }
// -Output :
//    pending
export const getLastFiveTransactionList = (custId, resCountryId) => {
  return {
    url: '/commons/LastFiveTransactionService',
    payload: { custId, resCountryId },
    type: Types.POST,
    tag: ApiTag.RECENT_FAV_TRANSACTION,
    headers: {}
  };
};
