/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #14
// Input
// {
//   "ifscCode":"SBIN0000945",
//  }
// Output
// Output : Success
// {"result":[{"BANKDESC":"State Bank Of India","CITYDESC":"UDIPI","BRANCHDESC":"UDUPI","BANKDIGNO":"11","BANKID":"839938","CITYID":"319848476","BRANCHID":"448781696"}],"status":"success"}
const checkIFSC = ifscCode => {
  return {
    url: '/managerecipients/ifscCodeCheck',
    payload: { ifscCode },
    type: Types.POST,
    tag: ApiTag.IFSC_CHECK,
    headers: {},
  };
};

export default checkIFSC;
