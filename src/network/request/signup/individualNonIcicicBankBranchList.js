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
const IndividualNonICICIBankBranchList = (bankId, cityId) => {
  return {
    url: '/signup/NonIBankBranchList',
    payload: { bankId, cityId },
    type: Types.POST,
    tag: ApiTag.INDIVIDUAL_NON_ICICI_BANK_BRANCH_LIST,
    headers: {},
  };
};

export default IndividualNonICICIBankBranchList;
