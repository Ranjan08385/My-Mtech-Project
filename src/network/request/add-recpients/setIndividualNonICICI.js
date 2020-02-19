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
const setIndividualNonICICI = (
  IfscOrRegular,
  disbId,
  m2iBeneType,
  INSTID,
  CUSTID,
  LOGIN,
  mstrBeneEmailId,
  mstrBeneAddress1,
  mstrBeneAddress2,
  mstrAcNumber,
  mstrSTDPhone,
  mstrPhoneNo,
  mstrMobile,
  mstrISDCode,
  mstrNickName,
  mstrBeneName,
  mstrCity,
  mlngBenePin,
  mlngStateId,
  fname,
  lname,
  plngBankId,
  plngBranchId,
  plngLocationId
) => {
  const data = {
    disbId,
    fname,
    m2iBeneType,
    mname: 'nnn',
    lname,
    ieCode: null,
    INSTID,
    CUSTID,
    LOGIN,
    IfscOrRegular,
    bankDesc: null,
    stateDesc: null,
    branchMICRIFSCCode: null,
    locationDesc: null,
    birthDate: null,
    cityDesc: null,
    confirmATAccntNum: null,
    mm: null,
    dd: null,
    yyyy: null,
    productCode: null,
    beneStatus: null,

    perBeneficiary: {
      mlngM2iCustId: null,
      mstrBeneEmailId,
      mstrBeneAddress1,
      mstrBeneAddress2,
      mstrSTDPhone,
      mstrPhoneNo,
      mstrMobile,
      mstrISDCode,
      mlngDelieveryModeId: null,
      mblnOwnFlag: null,
      smsAlert: null,
      mstrPhotoId: null,
      beneDetailFlag: null,
      mstrBeneStatus: null,
      mstrBeneAccountStatus: null,
      mstrCdciFlag: null,
      mstrInstanceId: null,
      mstrNickName,
      mstrBirthDate: null,
      mlngCitizenCountryId: 751477,
      BeneType: null,
      mlngBeneId: 0,
      mstrBeneName,
      mstrCity,
      mlngBenePin,
      mlngStateId,
      mlngVersion: null,
      msetAcDisb: null,
      msetDDDisb: null,
      msetSeftDisb: null,
      msetVisaDisb: null,
      msetPayoutDisb: null,
      mstrPurCode: null,
      mstrCpRejectReason: null,
      mstrCityId: null,
      mstrBranchId: null,
      mintStatus: null,
      mdtTimeStamp: null,
      mstrMaker: null,
      mdtMakerStamp: null,
    },

    seftDisb: {
      mstrAcNumber,
      mstrCustCode: null,
      plngBankId,
      plngBranchId,
      plngLocationId,
      mlngDisbId: null,
      mlngBeneId: null,
      mintBeneType: null,
      mlngDisbCode: 1,
      mblnFcyAcFlag: null,
      mlngStatus: 1,
    },
  };

  return {
    url: '/managerecipients/ActAddBeneDisb',
    payload: data,
    type: Types.POST,
    tag: ApiTag.ADD_RECIPIENT_BUS_NONICICI,
    headers: {},
  };
};

export default setIndividualNonICICI;
