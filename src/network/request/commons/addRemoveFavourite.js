/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #31
// -Input
// {
//   "trackNo":"M2A03619017",
//   "addToFavourate": true
// }

export const addRemoveFavourite = (trackNo, addToFavourate) => {
  return {
    url: '/moneytransfer/AddToFavourate',
    payload: { trackNo, addToFavourate },
    type: Types.POST,
    tag: ApiTag.ADD_REMOVE_FAVOURITE,
    headers: {},
  };
};
