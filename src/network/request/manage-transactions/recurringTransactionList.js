/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const GetRecurringTransactionList = (
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
    instanceId,
    custId,
    loginId,
    countryId,
  };

  return {
    url: '/managetransactions/myRecurringTransList',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.RECURRING_TRANSACTION,
    headers: {},
  };
};
