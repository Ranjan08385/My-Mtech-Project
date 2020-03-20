/* eslint-disable import/prefer-default-export */
import { Types } from './request';

const GetLoginService = userDetails => {
  return {
    url: 'users',
    payload: userDetails,
    type: Types.GET,
    tag: 'login Service',
    // headers: {},
    // authRequired: false,
    // csrfToken: true,
    // userId
  };
};

export default GetLoginService;
