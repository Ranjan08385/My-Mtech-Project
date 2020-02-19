/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #35
// -Input
// {
//     "rescountryId":"77",
//     "custId":"40769474002",
//     "lBean":
//       {
//          "checkPromo":"CATEGORYRESET",
//          "exchangeRatePromo":"0.0",
//          "commPromo":"0.0",
//          "oldExchangeRate":"69.16",
//          "promoCode":"null"
//       }
// }
// -Output
// --Success
// {"status":"success","description":"6039343407$U.S. Bank-Checking A/c No. XXXXXXXX9001##6039343033$U.S. Bank-Checking A/c No.
// XXXXXXXXXX3273##$$2BDNV5PE525J1I4XXS9N93RD4ODISGQJ"}

export const getAllNotifications = (instanceId, custId) => {
  return {
    url: '/manageNotifications/notifications',
    payload: { instanceId, custId },
    type: Types.POST,
    tag: ApiTag.VIEW_ALL_NOTIFICATIONS,
    headers: {},
  };
};
