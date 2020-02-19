/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const getUSState = () => {
  return {
    url: '/signup/UsStatesList',
    payload: {},
    type: Types.POST,
    tag: ApiTag.US_STATE,
    headers: {},
  };
};
