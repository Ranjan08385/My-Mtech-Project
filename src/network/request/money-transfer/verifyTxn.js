/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #110

const VerifyTxn = data => {
  return {
    url: '/moneytransfer/verifyTxn',
    payload: data,
    type: Types.POST,
    tag: ApiTag.VERIFY_TXN,
    headers: {},
  };
};

export default VerifyTxn;
