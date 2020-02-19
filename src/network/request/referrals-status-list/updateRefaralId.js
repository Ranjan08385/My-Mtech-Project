/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #57
// Input
//  {
//    "custId": ""
//  }
// Output
//  pending
const UpdateRefarralId = (authKey, customerDetails) => {
  return {
    url: '/referralsStatusList/updateRefaralId',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.UPDATE_REFARRAL_ID,
    headers: { authKey },
  };
};

export default UpdateRefarralId;
