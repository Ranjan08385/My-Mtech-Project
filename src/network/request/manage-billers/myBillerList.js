/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #64,65
// -Input
// {}

export const myBillerList = (instanceId, custId, loginId, countryId) => {
  return {
    url: '/managebillers/myBillerList',
    payload: { instanceId, custId, loginId, countryId },
    type: Types.POST,
    tag: ApiTag.MY_BILLER_LIST,
    headers: {},
  };
};
