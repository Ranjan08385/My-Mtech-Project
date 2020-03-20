/* eslint-disable func-names */
/* eslint-disable no-undef */
import axios from 'axios';
// import { isConnectedToInternet } from '../utils';
import { getPrefData, PREF_AUTH_TOKEN } from '../storage/preferenceStorage';
import { SOMETHING_WRONG, Types } from './request';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

const TAG = 'APIREQUEST';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhZDc0ZGFlMS0zNmUyLTQ5YjktOTFkNS1iMWE4ZDM0Yjk0ZjEiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJkZWVwYWsxQGdtYWlsLmNvbSIsImlhdCI6MTU3ODY2MjcwMCwiZXhwIjoxNTc4NjY0NTAwLCJyZWZyZXNoQ291bnQiOjAsInJlZnJlc2hMaW1pdCI6MX0.7IPYCiko3JrW7RE1GKi1KJ07SDvlWpsrU-jK6J29wIU';

const makeAPICall = async request => {
  const token = await getPrefData(PREF_AUTH_TOKEN);

  instance.defaults.timeout = 45000;
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  // let authRequired;
  // if (request.authRequired === 'undefined' || request.authRequired === undefined) {
  //   authRequired = true;
  // } else {
  //   authRequired = request.authRequired;
  // }

  // if (authRequired) {
  //   // console.log('token 22', request.authRequired, authRequired);
  //   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  // } else {
  //   delete instance.defaults.headers.common.Authorization;
  // }

  // console.log('token', request.authRequired, instance.defaults.headers);

  // const connectionAvailable = await isConnectedToInternet();
  // if (!connectionAvailable) {
  //   const err = {
  //     code: INTERNET_NOT_CONNECTED
  //   };
  //   throw err;
  // }
  let axiosRequest;
  const { type, url, payload, tag } = request;

  console.log(TAG, `type: ${type}`);
  console.log(TAG, `url: ${url}`);
  console.log(TAG, `payload: ${payload}`);
  if (type === Types.GET) {
    axiosRequest = instance.get(url);
  } else if (type === Types.POST) {
    axiosRequest = instance.post(url, payload);
    console.log("axiosRequest", axiosRequest);
  }

  return axiosRequest
    .then(response => {
      // console.log('response API', response);
      return { tag, data: response.data };
    })
    .catch(function(error) {
      console.log(TAG, `inside catch of api call....${error}`);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(TAG, `status: ${error.response}`);
        const err = {
          code: error.response.status,
          message: error.response.statusText,
        };
        throw err;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(TAG, 'some unwanted error of api call....');
        const err = {
          code: SOMETHING_WRONG,
        };
        throw err;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(TAG, 'some unwanted error2 api call....');
        const err = {
          code: SOMETHING_WRONG,
        };
        throw err;
      }
    });
};

export default makeAPICall;
