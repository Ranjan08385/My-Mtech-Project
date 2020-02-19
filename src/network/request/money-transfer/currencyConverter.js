/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const currencyConverter = (
  txnAmount = 235,
  mode = '1',
  dualFlag = false,
  userType = 'INDIVIDUAL'
) => {
  const data = {
    mode,
    couponCodeReset: '',
    custcatgid: '1',
    userType,
    checkboxval: 2,
    txnAmount,
    txnFixedAmount: 0,
    country: 'USD',
    countryFlag: 'false',
    taxFlag: 'true',
    obj: {
      exchangeRatePromo: 0.0,
      commPromo: 0.0,
      oldExchangeRate: 0.0,
      l_fcyAmt: 0.0,
      l_lcyAmt: 0.0,
      l_fcyAmtWtChrgs: 0.0,
      l_lcyAmtWtChrgs: 0.0,
      l_countryID: 77,
      l_transferAmt: 0.0,
      l_remitamoutwithoutcommision: 0.0,
      l_country: 'USA',
      l_countryNew: 'USA',
      l_ccyID: 0,
      l_countryCcyID: 0,
      l_remType: 2,
      l_prodID: 0,
      l_dualFlag: dualFlag,
      l_serviceTax: 0.0,
      l_fccServiceTax: 0.0,
      l_commissionVal: 0.0,
      l_exchangeRt: 0.0,
      couponPaise: 0.6,
    },
    obj1: {
      exchangeRatePromo: 0.0,
      commPromo: 0.0,
      oldExchangeRate: 0.0,
      l_fcyAmt: 0.0,
      l_lcyAmt: 0.0,
      l_fcyAmtWtChrgs: 0.0,
      l_lcyAmtWtChrgs: 0.0,
      l_countryID: 77,
      l_transferAmt: 0.0,
      l_remitamoutwithoutcommision: 0.0,
      l_country: 'USA',
      l_countryNew: 'USA',
      l_ccyID: 0,
      l_countryCcyID: 0,
      l_remType: 2,
      l_prodID: 0,
      l_dualFlag: dualFlag,
      l_serviceTax: 0.0,
      l_fccServiceTax: 0.0,
      l_commissionVal: 0.0,
      l_exchangeRt: 0.0,
      couponPaise: 0.0,
    },
    LOGIN: '',
    userActionToken: 'NA',
    direct: '',
    fromRemCountry: '',
  };
  // console.log('cureency con', data);

  return {
    url: '/moneytransfer/IPBasedCountryService',
    payload: data,
    type: Types.POST,
    tag: ApiTag.CURRENCY_CONVERTER,
    headers: {},
  };
};
