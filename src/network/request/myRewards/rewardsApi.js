/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #51
// Input
// {
// "l_catgflag": true,
// "custId": 40769481992,
// "showUserFlag": "",
// "userFlag": "",
// "nextUserFlag": ""
// }

const MyRewardsAPI = data => {
  return {
    url: '/rewards/rewardsApi',
    payload: data,
    type: Types.POST,
    tag: ApiTag.MY_REWARDS_LIST,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default MyRewardsAPI;
