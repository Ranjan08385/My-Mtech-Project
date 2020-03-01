import { VALIDATIONS } from '../displayConstants/constants';

export const validateUserName = event => {
  const letterNumber = /^[0-9a-zA-Z@.]+$/;
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;

  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.EMAIL_ID;
  }
  if (!emailRegExp.test(event.nativeEvent.text.trim())) {
    errorMessage = VALIDATIONS.VALID_EMAIL;
  }
  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      username: event.nativeEvent.text,
      usernameError: errorMessage,
    };
  }
  return {
    usernameError: errorMessage,
  };
};
