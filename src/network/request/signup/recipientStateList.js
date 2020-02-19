/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const getRecipientState = countryId => {
  return {
    url: '/commons/StateListService',
    payload: { countryId },
    type: Types.POST,
    tag: ApiTag.US_STATE,
    headers: {},
  };
};
