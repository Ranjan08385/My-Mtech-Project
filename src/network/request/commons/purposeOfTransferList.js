/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #27
// -Input
// {
// 	"accType": "",
// 	"productId": "100002",
// 	"remitCountry": "77",
// 	"instId": "1000000001"
// }
// -Output :
// --Success
//    {
//      "status":"success",
//      "description":"success",
//      "result": [
//        {"PURPOSEID":"1551400961","PURPOSEDESCRIPTION":"Donations to private religious and charitable institutions"},
//        {"PURPOSEID":"1916862466","PURPOSEDESCRIPTION":"Grants/Donations to government and charitable institutions established by the government"},
//      ]}
const GetPurposeOfTransferList = (accType, productId, remitCountry, instId) => {
  return {
    url: '/commons/PurposeOfTransferList',
    payload: { accType, productId, remitCountry, instId },
    type: Types.POST,
    tag: ApiTag.PURPOSE_OF_TRANSFER,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default GetPurposeOfTransferList;
