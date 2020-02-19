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

export const SelectAccountDropdown = (
  rescountryId,
  custId,
  checkPromo,
  exchangeRatePromo,
  commPromo,
  oldExchangeRate,
  promoCode,
  prodId
) => {
  const lBean = {
    checkPromo: promoCode,
    exchangeRatePromo,
    commPromo,
    oldExchangeRate,
    l_prodID: prodId
  };

  return {
    url: '/moneytransfer/GetBankAccountService',
    payload: { rescountryId, custId, lBean },
    type: Types.POST,
    tag: ApiTag.ACCOUNT_DROPDOWN,
    headers: {}
  };
};
