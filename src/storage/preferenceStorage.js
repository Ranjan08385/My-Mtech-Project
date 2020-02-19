/* eslint-disable consistent-return */
// import AsyncStorage from '@react-native-community/async-storage';
import { getCustomStorage, removeStorageData, setCustomStorage } from '../storage';

export const PREF_AUTH_TOKEN = 'auth_token';
export const PREF_ROLE = 'role';
export const PREF_PLAYERID = 'player_Id';
export const PREF_EMAIL_ID = 'email_Id';
export const PREF_FIRST_NAME = 'first_name';
export const PREF_LAST_NAME = 'last_name';
export const ACTOR_DB_ACCESSIBLE = 'actor_db_access'; // to provide actor db access for sequence winner
export const FLOW_TYPE_TO_ACTOR_LIST = 'flow_to_actor_list'; // to decide the flow of category i.e, to check after choosing  archetype whether script to be displayed or choose location
export const FLOW_TYPE = 'flow_type'; // to identify role and change flow
export const SESSION_ID = 'session_id'; // to identify role and change flow
export const CUST_ID = 'cust_id';
export const USER_ID = 'user_id';
export const USER_DETAIL = 'user_detail';
export const INSTID = 'INSTID';
export const RESCOUNTRYCODE = 'RESCOUNTRYCODE';
export const RESCOUNTRYID = 'RESCOUNTRYID';
export const LOGIN_ID = 'login_id';
export const DISBCURRENCY = 'DISBCURRENCY';
export const PREF_CURRENCY_CON = 'currencyConverter';
export const PWORD = 'pword';
export const ACCOUNT_TYPE = 'account_type';
export const SIGNUP_OTP_VERIFIED = 'signup_otp_verified';
export const FIRST_NAME = 'first_name';
export const LAST_NAME = 'last_name';
export const TRANSFER_TYPE = 'transfer_type';
export const PRIMARY_DETAIL = 'primary_detail';
export const PURPOSEID = 'purpose_id';
export const BENEID = 'bene_id';
export const DELIVERYMODEID = 'delivery_mode';
export const BENEAMT = 'bene_amt';
export const CUSTTYPE = 'cust_type';
export const ACCID = 'acc_id';
export const PROMO_CODE = 'promo_code';
export const ACCNUMB = 'Account No.';
export const ACCNAME = 'Account Name';
export const FROM_SCREEN = 'from_screen';
export const SIGNIN_OTP_VERIFIED = 'signin_otp_verified';
export const CONVERSION_MODE = 'conversion mode';
export const PROMO_DETAIL = 'promo detail';

export const storePrefData = async (key, value) => {
  try {
    setCustomStorage(key, value);
  } catch (e) {
    // saving error
    // console.log('StorageUtils', `Error saving data; key: ${key}, value: ${value}`);
  }
};

// eslint-disable-next-line consistent-return
export const getPrefData = async (key, defaultValue) => {
  try {
    const val = await getCustomStorage(key);

    return val;
  } catch (e) {
    // error reading value
    // console.log('StorageUtils', `Error reading data; key: ${key}`);
    return defaultValue;
  }
};

export const removePrefData = async (key, defaultValue) => {
  try {
    await removeStorageData(key);
  } catch (e) {
    // error reading value
    // console.log('StorageUtils', `Error reading data; key: ${key}`);
    return defaultValue;
  }
};
