/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #81
// -Input
// "file" : sample.pdf,
// "kycDetails " :
// {"login":" yji0aDSXW21exTtrV29q ",
// "custId":40769476309,
// "viewBankAcNonew":"JAB1JgXuKwz3Kwz3",
// "viewBankNamenew":"U.S. Bank",
// "viewBankNicNamenew":"acc2",
// "viewBankRotNonew":" JQFvJQX1JQR1",
// "viewBankDatenew":"21-DEC-2019",
// "viewBankStatusnew":"Statement Submission Pending",
// "viewBankAcNonew1":null,
// "AccountNo":null}

// -Output
// {"AccountNo":"015201777777",
// "MaskAccNo":"XXXXXXXX7777",
// "BankName":"U.S. Bank",
// "NickName":"acc2",
// "RoutingNo":"122105155",
// "AccDate":"21-DEC-2019",
// "AccStatus":"Statement Submission Pending",
// "message":"Thanks for uploading the account statement.
// Our team will verify the document and you will be communicated
// through email/SMS about further action",
// "displayaction":"YODsuccess",
// "status":"success"}

export const initiateMyAccount = payload => {
  return {
    url: '/managemyaccounts/verifyAccountStatement',
    payload,
    type: Types.POST,
    tag: ApiTag.INITIATE_MY_ACCOUNTS,
    headers: {},
  };
};
