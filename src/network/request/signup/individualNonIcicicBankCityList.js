/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #16
// -Input
//    {
//       "countryId":751477,
//       "bankId":335970342
//    }
// -Output
//    {
//      "status":"success"
//      "result":[
//          {"CITYID":"750781","CITYCODE":"ADIPU","CITYDESC":"ADIPUR"},
//          {"CITYID":"750176","CITYCODE":"ACR","CITYDESC":"AGRA"},
//          {"CITYID":"750096","CITYCODE":"AJR","CITYDESC":"AJMER"},
//          {"CITYID":"750629","CITYCODE":"AK","CITYDESC":"AKOLA"}, ...]
//    }
const IndividualNonICICIBankCityList = ( countryId, bankId) => {
  return {
    url: '/signup/NonIBankCityList',
    payload: {countryId,bankId},
    type: Types.POST,
    tag: ApiTag.INDIVIDUAL_NON_ICICI_BANK_CITY_LIST,
    headers: {},
  };
};

export default IndividualNonICICIBankCityList;
