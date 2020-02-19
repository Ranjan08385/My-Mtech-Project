/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #136
// Input
//  {
//   "oldPasswd":"Deepak123*","newPasswd":"Deepak123#","confirmPasswd":"Deepak123#",
//   "forgotPassFlag":"NULL","userLogin":"deepak2@gmail.com","login":"deepak2@gmail.com",
//   "hintQ":"null","hintA":"null","ssn":"null"
//  }
// Output
//  {"status":"success", "findForward":"success"}
const ChangePasswordApi = customerDetails => {
  return {
    url: '/changePass/changePassword',
    payload: customerDetails,
    type: Types.POST,
    tag: ApiTag.CHANGE_PASSWORD,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default ChangePasswordApi;
