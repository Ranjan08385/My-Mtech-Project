/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const GetMyRecipientList = (
  custId,
  instanceId
  // custId = '40769474002',
  // instanceId = '1000000001',
) => {
  const myRecipientList = {
    custId,
    instanceId,
  };

  return {
    url: '/managerecipients/myRecipientList',
    payload: myRecipientList,
    type: Types.POST,
    tag: ApiTag.MY_RECIPIENT_LIST,
    headers: {},
  };
};
