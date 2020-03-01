import { VALIDATIONS } from '../displayConstants/constants';

export const validateUserName = event => {
  const letterNumber = /^[0-9a-zA-Z@]+$/;
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;

  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.EMAIL_ID;
  }
  if (!emailRegExp.test(event.nativeEvent.text.trim())) {
    errorMessage = ADD_RECIPIENT_VALIDATION.VALID_EMAIL_ID;
  }
  if (event.nativeEvent.text.length >= 50) {
    errorMessage = ADD_RECIPIENT_VALIDATION.VALID_50_EMAIL_ID;
  }
  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      emailId: event.nativeEvent.text,
      errorEmailId: errorMessage,
    };
  }
  return {
    errorEmailId: errorMessage,
  };
};