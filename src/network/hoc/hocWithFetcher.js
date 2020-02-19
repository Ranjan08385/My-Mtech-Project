import React from 'react';
import makeAPICallz from '../api';
import {
  PREF_AUTH_TOKEN,
  getPrefData,
  storePrefData
} from '../../storage/preferenceStorage';

const hocWithFetcher = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        isLoading: false,
        error: null
      };
    }

    // registerDataReceived = callback => {
    //   this.onDataReceived = callback;
    // };

    // registerLoading = callback => {
    //   this.onLoading = callback;
    // };

    // registerError = callback => {
    //   this.onError = callback;
    // };

    makeAPICall = (
      request,
      successCallback,
      failureCallback,
      loadingCallback
    ) => {
      const loadingFunc = typeof loadingCallback === 'function';
      const receiveResponseFunc = typeof successCallback === 'function';
      const errorFunc = typeof failureCallback === 'function';
      loadingFunc
        ? loadingCallback(true)
        : this.setState({ isLoading: true }, function() {
            // console.log('loading> ', this.state.isLoading, request);
          });
      makeAPICallz(request)
        .then(result => {
          const jsonResponse = JSON.parse(result.data);
          jsonResponse.tag = result.tag;
          // console.log('loading>', this.state.isLoading);
          if (receiveResponseFunc && loadingFunc) {
            if (jsonResponse.hasOwnProperty('tokenId')) {
              storePrefData(PREF_AUTH_TOKEN, jsonResponse.tokenId);
            }

            successCallback(jsonResponse);
            loadingCallback(false);
          } else if (receiveResponseFunc) {
            if (jsonResponse.hasOwnProperty('tokenId')) {
              storePrefData(PREF_AUTH_TOKEN, jsonResponse.tokenId);
            }
            this.setState(
              {
                isLoading: false
              },
              function() {
                successCallback(jsonResponse);
              }
            );
          } else if (loadingFunc) {
            loadingCallback(false);
            this.setState({
              data: jsonResponse
            });
          } else {
            this.setState({
              data: jsonResponse,
              isLoading: false
            });
          }
        })
        .catch(error => {
          // TODO: handle all common error scenarios here
          if (
            error.code === 401 ||
            error.code === 403 ||
            error.code === 405 ||
            error.code === 406
          ) {
            const { navigation } = this.props;
            if (navigation) {
              navigation.navigate('Logout');
            }
            return;
          }
          if (errorFunc && loadingFunc) {
            failureCallback(error);
            loadingCallback(false);
          } else if (errorFunc) {
            failureCallback(error);
            this.setState({
              isLoading: false
            });
          } else if (loadingFunc) {
            loadingCallback(false);
            this.setState({
              error
            });
          } else {
            this.setState({
              error,
              isLoading: false
            });
          }
        });
    };

    render() {
      return (
        <Component
          registerDataReceived={this.registerDataReceived}
          registerLoading={this.registerLoading}
          registerError={this.registerError}
          makeAPICall={this.makeAPICall}
          {...this.props}
          {...this.state}
        />
      );
    }
  };
};

export { hocWithFetcher };
