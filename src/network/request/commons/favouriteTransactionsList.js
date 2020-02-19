/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #39
// -Input
// {
// 	"custId": "",
// 	"resCountryId": ""
// }
// -Output :
//    pending
export const getFavouriteTransactionList = (custId, resCountryId) => {
  return {
    url: '/commons/FavourateTransactionListService',
    payload: { custId, resCountryId },
    type: Types.POST,
    tag: ApiTag.LAST_FIVE_TRANSACTION,
    headers: {}
  };
};
