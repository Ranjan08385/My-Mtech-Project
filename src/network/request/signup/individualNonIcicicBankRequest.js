/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// app ref - #15
const IndividualNonICICIBankList = countryId => {
  return {
    url: '/signup/NonIBankList',
    payload: { countryId },
    type: Types.POST,
    tag: ApiTag.INDIVIDUAL_NON_ICICI_BANKS,
    headers: {},
  };
};

export default IndividualNonICICIBankList;
