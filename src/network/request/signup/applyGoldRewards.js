/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #32
export const applyGoldMembership = (
  resCountryId,
  resCurrencyCode,
  lExchangeRt,
  login,
  landingInfoObj
) => {
  const data = {
    prefRateDuplicate: null,
    diffRate: 'diffValue',
    resCountryId,
    lCountry: landingInfoObj.l_country,
    lCountryID: landingInfoObj.l_countryID,
    lExchangeRt,
    lFcyAmt: landingInfoObj.l_fcyAmt,
    lFcyAmtWtChrgs: landingInfoObj.l_fcyAmtWtChrgs,
    lLcyAmt: landingInfoObj.l_lcyAmt,
    lLcyAmtWtChrgs: landingInfoObj.l_lcyAmtWtChrgs,
    lRemType: landingInfoObj.l_remType,
    lServiceTax: landingInfoObj.l_serviceTax,
    lDualFlag: landingInfoObj.l_dualFlag,
    login,
    resCurrencyCode,
    catgbenefit: '',
  };

  return {
    url: '/signup/applyGoldMemebership',
    payload: data,
    type: Types.POST,
    tag: ApiTag.APPLY_GOLD_MEMBERSHIP,
    headers: {},
  };
};
