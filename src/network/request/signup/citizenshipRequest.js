/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #8
export const citizenship = () => {
  return {
    url: '/signup/CitizenshipList',
    payload: {},
    type: Types.POST,
    tag: ApiTag.RECIPIENT_ADDRESS_CITIZENSHIP,
    headers: {},
  };
};
