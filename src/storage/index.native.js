// import { AsyncStorage } from 'react-native';
// import { logMe } from '../utils';
import AsyncStorage from '@react-native-community/async-storage';

export const setCustomStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    // logMe('StorageUtils', `Saved data; key: ${key}, value: ${value}`);
  } catch (e) {
    // saving error
    // logMe('StorageUtils', `Error saving data; key: ${key}, value: ${value}`);
  }
};

export const getCustomStorage = async (key, defaultValue) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // console.log(' storage utils', value);
    if (value !== null) {
      const item = JSON.parse(value);
      return item;
    }
    return defaultValue;
  } catch (e) {
    // error reading value
    // logMe('StorageUtils', `Error reading data; key: ${key}`);
    return defaultValue;
  }
};

export const removeStorageData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // error removing value
    // logMe('StorageUtils', `Error removing data; key: ${key}`);
  }
};
