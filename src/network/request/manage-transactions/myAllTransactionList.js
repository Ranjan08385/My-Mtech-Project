/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #87
// -Input
// {}

export const GetAllTransactionList = (
  loginId,
  custId,
  instanceId,
  countryId,
  // loginId,
  // instanceId = '1000000001',
  // custId = '40769470089',
  // countryId = '77'
) => {
  const myAllTransList = {
    instanceId,
    custId,
    loginId,
    countryId,
  };

  return {
    url: '/managetransactions/myAllTransList',
    payload: myAllTransList,
    type: Types.POST,
    tag: ApiTag.ALL_TRANSACTION_LIST,
    headers: {},
  };
};
