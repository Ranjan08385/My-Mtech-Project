/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #8

// export const confirmTransaction = data => {
//   return {
//     url: '/signup/confirmTransaction',
//     payload: data,
//     type: Types.POST,
//     tag: ApiTag.CONFIRM_TRANSACTION,
//     headers: { 'Content-Type': 'application/json' }
//   };
// };
export const confirmTransaction = data => {
  return {
    url: '/signup/confirmTransaction',
    payload: data,
    type: Types.POST,
    tag: ApiTag.CONFIRM_TRANSACTION,
    headers: {}
  };
};
