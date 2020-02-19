export const makeSessionId = length => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const checkLN = res => {
  let value;
  if (res.LNSTATUS === 'SUCCESS') {
    if (res.EQUIFAXSTATUS === 'Y') {
      value = false;
    } else {
      value = false;
    }
  } else {
    value = true;
  }
  return value;
};
