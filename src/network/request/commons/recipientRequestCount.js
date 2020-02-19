/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #36 & 37
// -Input
// {
// 	"remitterEmail": "",
// 	"countryId": ""
// }
// -Output :
//    pending
export const getRecipientRequestCount = (remitterEmail, countryId) => {
  return {
    url: '/commons/NewRecipientRequestService',
    payload: { remitterEmail, countryId },
    type: Types.POST,
    tag: ApiTag.RECIPIENT_REQUEST_COUNT,
    headers: {}
  };
};
