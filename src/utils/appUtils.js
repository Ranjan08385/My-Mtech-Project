import { Dimensions, Platform } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from '../components/customResponsiveDimension';
import Toast from '../components/Toast';
import {
  CUST_ID,
  INSTID,
  PREF_AUTH_TOKEN,
  PREF_CURRENCY_CON,
  removePrefData,
  RESCOUNTRYCODE,
  RESCOUNTRYID,
  SESSION_ID,
  SIGNIN_OTP_VERIFIED,
  USER_ID,
  PROMO_CODE
} from '../storage/preferenceStorage';

const NewToast = new Toast();

export const widthInPercentage = dimensionWidth => {
  if (Platform.OS === 'web') {
    return `${dimensionWidth}%`;
  }
  return responsiveWidth(dimensionWidth);
};
export const heightInPercentage = dimensionHeight => {
  if (Platform.OS === 'web') {
    return `${dimensionHeight}%`;
  }
  return responsiveHeight(dimensionHeight);
};

export const fontInPercentage = dimensionSize => {
  return dimensionSize;
};

export function getResponsiveStyle(styleName, measure) {
  const styleName_Width = `${styleName}_${measure}`;
  return styleName_Width;
}

export const getWidth = () => {
  const { width } = Dimensions.get('window');
  return width;
};

export const percentageOf = (width, requiredWidth) => {
  return width * (requiredWidth / 100);
};

export const getHeight = () => {
  const { height } = Dimensions.get('window');
  return height;
};

export const showToast = (message, duration) =>
  NewToast.showToast(message, duration);

export const getScrollbarWidth = () => {
  if (Platform.OS !== 'web') return null;
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

export const getRegex = (text, regex, prevValue) => {
  let isChecked;
  if (text === '') {
    // JUST BLANK
  } else if (!text.match(regex)) {
    isChecked = true;
  }
  return isChecked ? prevValue : text;
};

export const clearStorage = () => {
  removePrefData(CUST_ID);
  removePrefData(PREF_AUTH_TOKEN);
  removePrefData(USER_ID);
  removePrefData(RESCOUNTRYID);
  removePrefData(SESSION_ID);
  removePrefData('login_id');
  removePrefData('first_name');
  removePrefData(RESCOUNTRYCODE);
  removePrefData(INSTID);
  removePrefData('user_detail');
  removePrefData('account_type');
  removePrefData(PREF_CURRENCY_CON);
  removePrefData(SIGNIN_OTP_VERIFIED);
  removePrefData(PROMO_CODE);
};
