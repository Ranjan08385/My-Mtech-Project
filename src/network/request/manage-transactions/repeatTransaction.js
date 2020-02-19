/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const repeatTransaction = (
  trackno,
  custId,
  login,
  userType = 'null',

  //   trackno,
  //   custId = '40769470089',
  //   login = 'RAJUUSA@GMAIL.COM',
  //   userType = 'null',
) => {
  const customerDetails = {
    trackno,
    custId,
    login,
    userType,
  };

  return {
    url: 'managetransactions/repeatTransaction',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.FAV_TRANSACTION,
    headers: {},
  };
};
