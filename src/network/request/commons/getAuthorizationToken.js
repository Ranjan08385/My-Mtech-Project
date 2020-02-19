/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const getAuthorizationToken = emailId => {
  return {
    url: 'commons/RegistrationJwtToken',
    payload: { emailId },
    type: Types.POST,
    tag: ApiTag.AUTH_TOKEN,
    headers: {},
    authRequired: false,
  };
};

export default getAuthorizationToken;
