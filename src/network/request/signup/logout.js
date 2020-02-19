/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// Body
// {"loginId":7220822022,
//  "custId":40769476309,
//  "resCountryId":77
// }

// Output Description:
// {"customerid":40769476309,"country":77,"status":"success","findForward":"success"}

export const logout = (loginId = 7220822022, custId, resCountryId, emailId) => {
  return {
    url: '/signup/logout',
    payload: { loginId, custId, resCountryId, emailId },
    type: Types.POST,
    tag: ApiTag.LOGOUT,
    headers: {},
  };
};
