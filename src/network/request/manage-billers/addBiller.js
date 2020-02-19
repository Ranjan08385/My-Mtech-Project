/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #64,65
// -Input
// {}

export const addBiller = beneId => {
  return {
    url: '/makepayment/ActGetInputInfoService',
    payload: beneId,
    type: Types.POST,
    tag: ApiTag.ADD_BILLERS,
    headers: { 'Content-Type': 'application/json'},
  };
};
