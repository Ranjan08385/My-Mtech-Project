/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// Sample Input :
// {
// 	"couponCode": "ASHU",
// 	"beneIdCoupon": null,
// 	"custtId": "40769474002",
// 	"login": "deepak1@gmail.com",
// 	"PrefRateCust": null,
// 	"resCountryId": 77,
// 	"resCurrencyCode": "USD",

// 	"l_bean": {
// 		"checkPromo": "CATEGORYRESET",
// 		"exchangeRatePromo": 0.0,
// 		"commPromo": 0.0,
// 		"oldExchangeRate": 69.16,
// 		"promoCode": null,
// 		"custId": null,
// 		"fname": null,
// 		"lname": null,
// 		"mobileccode": null,
// 		"mobile": null,
// 		"email": null,
// 		"prefRateFlag": "Y",
// 		"couponComm": null,
// 		"l_fcyAmt": 2168.88,
// 		"l_lcyAmt": 150000.0,
// 		"l_fcyAmtWtChrgs": 2168.88,
// 		"l_lcyAmtWtChrgs": 150000.0,
// 		"l_countryID": 77,
// 		"l_currCD": "USD",
// 		"l_transferAmt": 0.0,
// 		"l_remitamoutwithoutcommision": 2168.88,
// 		"l_country": 77,
// 		"l_countryNew": "USA",
// 		"l_ccyID": 99,
// 		"l_countryCcyID": 753099,
// 		"l_remType": 2,
// 		"l_prodID": 100002,
// 		"l_dualFlag": false,
// 		"l_serviceTax": 0.0,
// 		"l_fccServiceTax": 0.0,
// 		"l_commissionVal": 0.0,
// 		"l_exchangeRt": 69.16,
// 		"couponPaise": 0.0,
// 		"cardID": 2952905232
// 	}
// }

// Output :
// 	{"PrefRateCust":"Y","rateApplBasis":"0"}

export const promoValidate = (couponCode, custId, login, resCountryId, landingInfoObj) => {
  const data = {
    couponCode,
    beneIdCoupon: null,
    custId,
    login,
    PrefRateCust: null,
    resCountryId,
    resCurrencyCode: 'USD',

    l_bean: {
      checkPromo: 'CATEGORYRESET',
      exchangeRatePromo: 0.0,
      commPromo: 0.0,
      oldExchangeRate: 69.16,
      promoCode: null,
      custId: null,
      fname: null,
      lname: null,
      mobileccode: null,
      mobile: null,
      email: null,
      prefRateFlag: 'Y',
      couponComm: null,
      l_fcyAmt: landingInfoObj.l_fcyAmt,
      l_lcyAmt: landingInfoObj.l_lcyAmt,
      l_fcyAmtWtChrgs: landingInfoObj.l_fcyAmtWtChrgs,
      l_lcyAmtWtChrgs: landingInfoObj.l_lcyAmtWtChrgs,
      l_countryID: landingInfoObj.l_countryID,
      l_currCD: landingInfoObj.l_currCD,
      l_transferAmt: landingInfoObj.l_transferAmt,
      l_remitamoutwithoutcommision: landingInfoObj.l_remitamoutwithoutcommision,
      l_country: landingInfoObj.l_country,
      l_countryNew: landingInfoObj.l_countryNew,
      l_ccyID: landingInfoObj.l_ccyID,
      l_countryCcyID: landingInfoObj.l_countryCcyID,
      l_remType: landingInfoObj.l_remType,
      l_prodID: landingInfoObj.l_prodID,
      l_dualFlag: landingInfoObj.l_dualFlag,
      l_serviceTax: landingInfoObj.l_serviceTax,
      l_fccServiceTax: landingInfoObj.l_fccServiceTax,
      l_commissionVal: landingInfoObj.l_commissionVal,
      l_exchangeRt: landingInfoObj.l_exchangeRt,
      couponPaise: landingInfoObj.couponPaise,
      cardID: landingInfoObj.cardID,
    },
  };

  return {
    url: '/moneytransfer/promoValidate',
    payload: data,
    type: Types.POST,
    tag: ApiTag.PROMO_CODE,
    headers: {},
  };
};
