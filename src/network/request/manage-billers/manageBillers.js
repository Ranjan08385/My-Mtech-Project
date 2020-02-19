/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #22
// -Input
// {}

export const manageBillers = billerDetails => {
  return {
    url: '/managebillers/myBillerLandlineProviderList',
    payload: billerDetails,
    type: Types.POST,
    tag: ApiTag.DD_PAYABLE_LIST,
    headers: { 'Content-Type': 'application/json' },
  };
};
