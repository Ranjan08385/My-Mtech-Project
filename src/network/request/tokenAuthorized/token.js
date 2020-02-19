/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';

// API doc ref- #21
// Input :
// {
//   "instanceId":1000000001
// }
// Output :
// {
//   "status":"success",
//   "result":[
//      {"COUNTRYID":"751428","COUNTRYCODE":"AF","COUNTRYDESC":"Afghanistan"},
//      {"COUNTRYID":"87","COUNTRYCODE":"AUS","COUNTRYDESC":"Australia"}, ...]
// }
export const getToken = emailId => {
  return {
    url: 'commons/RegistrationJwtToken',
    payload: { emailId },
    type: Types.POST,
    tag: 'token tag',
    headers: {},
    authRequired: false,
  };
};
