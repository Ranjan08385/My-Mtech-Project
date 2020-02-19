/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const GetFavoriteTransactionList = (
  loginId,
  custId,
  instanceId,
  countryId,
  // loginId,
  // instanceId = '1000000001',
  // custId = '40769470089',
  // countryId = '77',
) => {
  const customerDetails = {
    custId,
    instanceId,
    loginId,
    countryId,
  };

  return {
    url: '/managetransactions/myFavouritesTransList',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FAV_TRANSACTION,
    headers: {},
  };
};
