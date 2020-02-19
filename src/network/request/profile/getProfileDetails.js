/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #53
// -Input
//  {
//    "submitValue":"",
//    "LOGIN":"",
//    "RESCOUNTRYID":""
//  }
// -Output
//    pending
const GetProfileDetails = customerDetails => {
  return {
    url: '/profile/getProfileDetails',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.GET_PROFILE_DETAILS,
    headers: { 'Content-Type': 'application/json' }
  };
};

export default GetProfileDetails;
