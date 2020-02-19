/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #12
// -Input
//  {
//     "goStep":"amtSignUp","termVal":"no","instanceId":"1000000001",
//     "siteCode":"USweb-login","channelId":"null","nriAccNum":"null",
//     "custIdNew":null,"utmSource":"null","utmMedium":"null","utmTerm":"null",
//     "utmContent":"null","utmCampaign":"null","utmAdGroup":"null","mktFlag":"",
//     "checkBox":"on","countryRes":"77","mobile":"9743098909","email":"shree32105@gmail.com",
//     "fname":"Shree","lname":"Nitte","mobileccode":"","custId":"","sessionId":"","mname":"",
//     "gender":"","mm":"","dd":"","yyyy":"","phonecCode":"","phoneCityCode":"","phoneNo":"",
//     "address1":"","address2":"","state":"","city":"","zipCode":"","marktMailflg":"",
//     "userType":"INDIVIDUAL","initialLeadEntryFlag":"insertValue"}
// -Output
// --Success
//  {
//    "status":"success",
//    "result": {
//        "instId":1000000001,"Marktmailflg":"","Email":"SHREE32105@GMAIL.COM","cid":"SHREE32105@GMAIL.COM",
//        "fname":"SHREE","lname":"NITTE","mobile":"9743098909","mobileccode":"","lead_fname":"Shree",
//        "lead_lname":"Nitte","lead_email":"SHREE32105@GMAIL.COM","lead_mobile":"9743098909",
//        "lead_countryres":"77","CUSTIDNEW":64650,"custcatgid":"1","loginId":"shree32105@gmail.com",
//        "lead_mobileccode":"","isEmailExist":null,"userType":"INDIVIDUAL" }
//   }
const SaveContavtDetails = contactDetails => {
  return {
    url: '/moneytransfer/saveContactDetails',
    payload: contactDetails,
    type: Types.POST,
    tag: ApiTag.SAVE_CONTACT_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};

export default SaveContavtDetails;
