/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #52a
// Input
// {
// 	"username": "deepak2@gmail.com",
// 	"password": "iY1F5a5DXCzQAuw+kinyvQewBb2/oTb4MOnfWH4fLARn3rTuKjFs3uk08g=",
// 	"instanceId": "1000000001",
// 	"chanelCode": null,
// 	"nriacc": null,
// 	"contractAbility": null,
// 	"ribChannel": null,
// 	"obj1": null,
// 	"OBJ": null,
// 	"ranstring": "iY1F5a5DXCzQAuw",
// 	"checkStep2": null,
// 	"userAction": "Register",
// 	"REVAMPVALUE": null,
// 	"goToStep": null,
// 	"userActionToken": null,
// 	"jumioRevamp": null,
// 	"sessId": "ureru7467878374637",
// 	"banner": null,
// 	"compRemit": null,
// 	"saltdId": "3c589f46ee89c664bf438cdbb5323dc9",
// 	"ivId": "b674d17808c84217c5bdc2f671922579"
// }
// ---------- Note : password = randomString + encrypted password
// Output
//  -Success :
//     {
//       "loginStatus":true,"banner":"","userID":"deepak2@gmail.com","NONLOGINCUSTID":40769475049,
//        "MAILSETUPFLAG":true,"LOGIN":"deepak2@gmail.com","UNAME":"Deepak Kumar","FIRSTNAME":"Deepak",
//        "obj":null,"l_goToStep":null,"goToStep":"goToJumio","userActionToken":"NA","REVAMPVALUE":"SENDMONEY",
//        "jumioRevamp":"null","LOGINFLAG":true,"CUSTID":40769475049,"ContractAbility":"","ribChannel":null,
//        "userAction":"Register","nriAccount":"Y","EmailId":"DEEPAK2@GMAIL.COM","FIRSTLOGON":"Y",
//        "RESCOUNTRYID":77,"RESCOUNTRYCODE":"USA","INSTID":1000000001,"DISBCURRENCY":458753,
//        "DISBCOUNTRY":751477,"DISBCURRENCYCODE":"INR","DISBCOUNTRYCODE":"IND","serviceTaxPercent":"10.30",
//        "DISBCOUNTRYDESC":"India","TokenId":"37CXW9EZZXYEEPP98NGG30CD0P7GRQG4","Session":null
//     }
//   -Failure :
//      pending
const GetLoginService = userDetails => {
  return {
    url: 'login/LoginService',
    payload: userDetails,
    type: Types.POST,
    tag: ApiTag.LOGIN_SERVICES,
    headers: {},
     authRequired: false,
  };
};

export default GetLoginService;
