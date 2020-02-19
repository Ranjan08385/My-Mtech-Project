/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #129

export const uploadDocuments = payload => {
  return {
    url: '/profile/uploadDocuments',
    payload,
    type: Types.POST,
    tag: ApiTag.UPLOAD_DOCUMENTS,
    headers: {},
  };
};
