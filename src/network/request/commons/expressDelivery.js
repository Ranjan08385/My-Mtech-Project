/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #39.a
// -Input
// {
//     "m2icustid":"40769474002"
// }
// -Output
// {"LNSTATUS":"SUCCESS","EQUIFAXSTATUS":"Y","FIRSTNAME":"Deepak","status":"success"}

export const expressDelivery = m2icustid => {
  return {
    url: '/moneytransfer/expressFeature',
    payload: { m2icustid },
    type: Types.POST,
    tag: ApiTag.EXPRESS_DELIVERY,
    headers: {},
  };
};
