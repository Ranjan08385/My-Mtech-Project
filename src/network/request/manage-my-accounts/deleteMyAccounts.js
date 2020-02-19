/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #81
// -Input
// {"custId":"40769476309",
// "instId":"1000000001",
// "achid":"KwB0KwJvJwJ5Jt==",
// "mode":"DELETE",
// "nick":"test",
// "sort":"122105155",
// "bankName":"Account -Enabled",
// "accno":"U.S. Bank",
// "mailSetUpFlag":"true",
// "eachId":""
// }
// -Output
// {
//     "result": {"response":"YES##Account Deleted Successfully.##"2BDNV5PE525J1I4XXS9N93RD4ODISGQJ"},
//     "status": "success"
// }

export const deleteMyAccounts = payload => {
  return {
    url: '/managetransactions/deleteAccount',
    payload,
    type: Types.POST,
    tag: ApiTag.DELETE_MY_ACCOUNTS,
    headers: {},
  };
};
