/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #53a,54,55,56
// -Input
//    {"nriFlag":"","cusType":"","pageMode":"","authToken":"","instanceId":"","clientIP":"",
//      "perUPFlag":"","cid":"","site":"","submitValue":"","countryRes":"","mobileCcode":"",
//      "fname":"","mname":"","lname":"","mobile":"","email":"","custId":"","secnumber":"",
//      "sinNumber":"","NriAccReqFlag":"","address1":"","address2":"","city":"","state":"",
//      "zipCode":"","promoCode":"","declareTerms":"","phoneCcode":"","phoneCityCode":"",
//      "phoneno":"","valueDate":"","about":"","inputField":"","password":"","hquestion":"",
//      "hansw":"","simpleCaptcha":"","imgans":"","aincome":"","qualification":"","perOfStay":"",
//      "occupation":"","accountStatus":"","pmail":"","login":"","passwordJumio":"","nationality":"",
//      "mktflag":"","legalstatus":"","doingbusiness":"","authaddress1":"","authaddress2":"","authcity":"",
//      "authstatus":"","authZipCode":"","workphoneno":"","getPath":"","lnStatusForZeroLimit":"",
//      "sessionId":"","perToStay":""}
// -Output
//   {"status":"success"
//    "result":[
//          {
//            "M2ICUSTREFID":"4186439681","M2ICUSTID":"40769470089","FIRSTNAME":null,"LASTNAME":null,
//            "REFEMAIL":"SARITADEVI.TIWARI@ICICIBANK.COM","EMAILPROCESSED":"E","REFDATE":"2019-05-08 00:00:00.0",
//            "STATUS":"2","VERSION":"1","MAKER":"AUTOEOD","MAKERSTAMP":"2017-02-01 17:16:42.0",
//            "UPDSTAMP":"2018-09-25 16:05:51.0","CUST_ID":null,"REGISTERED_FLAG":"Y","FRIEND_CUST_CODE":null,
//            "GENFRIENDID":"REF18425","QUALIFICATIONSTATUSFLAG":"1","REM_FLAG":"N","TRACKNO":"M2X10720476",
//            "QUALIFYDATE":"2018-09-25 00:00:00.0","PBOEMPID":null,"CHANNEL":"REVAMP","DTOFREMCONSENT":null}],}
const SaveProfileDetails = profileDetails => {
  return {
    url: '/profile/saveProfileDetails',
    payload: profileDetails,
    type: Types.POST,
    tag: ApiTag.SAVE_PROFILE_DETAILS,
    headers: {  'Content-Type': 'application/json'},
  };
};

export default SaveProfileDetails;
