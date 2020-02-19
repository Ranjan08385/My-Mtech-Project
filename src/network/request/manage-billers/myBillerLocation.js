/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #67,68
// -Input
// {}

export const myBillerLocation = billerDetail => {
  return {
    url: '/managebillers/myBillerLocation',
    payload: billerDetail,
    type: Types.POST,
    tag: ApiTag.MY_BILLER_LIST,
    headers: {},
  };
};
