/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const getUSCity = stateId => {
  return {
    url: '/signup/UsCityList',
    payload: stateId,
    type: Types.POST,
    tag: ApiTag.US_CITY,
    headers: {},
  };
};
