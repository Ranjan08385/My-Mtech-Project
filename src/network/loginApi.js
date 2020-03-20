/* eslint-disable import/prefer-default-export */
import { Types } from './request';

const GetLoginService = userDetails => {
  console.log("User Details", userDetails);
  return {
    url: 'users/login',
    payload: userDetails,
    type: Types.POST,
    tag: 'login Service',
    headers: { 'Content-Type': 'application/json' },
  };
};

export default GetLoginService;
