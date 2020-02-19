/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #22
// -Input
// {}

export const DDPayableList = () => {
  return {
    url: '/moneytransfer/DDPayableList',
    payload: {},
    type: Types.POST,
    tag: ApiTag.DD_PAYABLE_LIST,
    headers: {},
  };
};
