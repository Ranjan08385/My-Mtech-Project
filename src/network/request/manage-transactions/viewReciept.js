/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #17
// -Input
//    {
//      "bankId":335970342,
//      "cityId":750109
//    }
// -Output
//    {
//      "status":"success"
//      "result":[
//          {"BRANCHID":"337478606","BRANCHDESC":"ANDHERI (AND)","FTTYPE":"NEFT","MICRCODE":"BKDN0460043","ADDRESS":null},
//          {"BRANCHID":"928318670","BRANCHDESC":"ANDHERI (WEST)","FTTYPE":"NEFT","MICRCODE":"BKDN0460043","ADDRESS":null}, ...]
//    }
const viewReciept = dataDetails => {
  return {
    url: 'managetransactions/viewReceipt',
    payload: dataDetails,
    type: Types.POST,
    tag: ApiTag.View_Reciept,
    headers: { 'Content-Type': 'application/json' },
  };
};
export default viewReciept;
