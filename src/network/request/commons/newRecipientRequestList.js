/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #36, 37
// -Input
// {
// 	"remitterEmail": "",
// 	"countryId": ""
// }
// -Output :
//    pending
const GetNewRecipientRequestList = authKey => {
  return {
    url: '/commons/NewRecipientRequestService',
    payload: {},
    type: Types.POST,
    tag: ApiTag.SOURCE_OF_FUND,
    headers: { authKey },
  };
};

export default GetNewRecipientRequestList;
