/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #52
// Input
// { } -->nothing
// Output
//  -Success :
//     {
//       "ranstring":"6qhYarb44caKfNC",
//       "publicModulus":"cbe02f3835e1170859eef3a59151a96660b6a0f0da15bc955b644fb0c77b3940aab3433643e1887d412f808c5bac42e3317edf3765154d89d4f69b98cec2063edc484646ceb047d4a49c18f0b1804bee1012b9f76859de1e59914319f224121436b5a4118ca8e06feef6c08078f9adfa25176133a4c5a6f4b24ff0a504b9e58054a7c30b20f205fd2baadbabeea008db6ddc73278c682c9b0ebb31e9825c6ce57448ec2aeff9f03121f42ff72d860d90d6dcce2928ebec06b4df718486bc8ec7e4c92515ad77f41949516b0f3dc539e40c21e68f20008847a8a28d5d80cc55dca5eb91d346049ce068b1c52058175bbb010523634b01a86ac22998bd4dcffa8d","publicExponent":"10001"
//     }
//   -Failure :
//      pending
const GetPreLoginService = () => {
  return {
    url: '/login/PreLoginService',
    payload: {},
    type: Types.POST,
    tag: ApiTag.PRE_LOGIN_SERVICES,
    headers: {},
    authRequired: false,
  };
};

export default GetPreLoginService;
