/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #147
// Input
//  {
//    "trackNo": "M2A03619173"
//  }
// Output
//  {
//    "M2IPRODID":100002,"TRACKNO":"M2A03619173","STATID":"1001","STATCODE":"ONREQUEST",
//    "STATUSDESCRIPTION":"\"We have received your money transfer request on Money2India, however we are still awaiting the funds in our Corrospondent bank account. Once the funds are received we will process the transaction.\n\n\"",
//    "STATDESC":"Funds awaited", "PICTOGRAPH":"ICON_2",
//    "ACTIONREQ":"Request you to kindly furnish the below","STATID2":null,"estiDays":"10-Dec-2019"
//  }
export const trackPreStatus = (trackNo, checkId) => {
  return {
    url: 'tracking/TrackPreStatus',
    payload: { trackNo },
    type: Types.POST,
    tag: ApiTag.TRACK_PRE_STATUS,
    headers: {},
    authRequired: checkId === 1,
  };
};

export default trackPreStatus;
