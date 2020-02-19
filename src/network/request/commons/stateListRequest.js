/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #20
// Input
//  {
// 	  "countryId":"751477"
//  }
// Output
//  {
//   "status": "success",
//   "result": [
//   {"STATEID":"2744647681","STATEDESC":"All India"},{"STATEID":"750091","STATEDESC":"Andaman & Nicobar"}, ... ]}
export const getStateListFromCounty = countryId => {
  return {
    url: '/commons/StateListService',
    payload: countryId,
    type: Types.POST,
    tag: ApiTag.STATE_LIST_FROM_COUNTRY,
    headers: {},
  };
};
