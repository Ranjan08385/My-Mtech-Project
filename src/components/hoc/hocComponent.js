/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { View, Platform } from 'react-native';
import {
  getPrefData,
  SIGNIN_OTP_VERIFIED,
  SIGNUP_OTP_VERIFIED,
} from '../../storage/preferenceStorage';
import { getWidth } from '../../utils/appUtils';
import LoaderComponent from '../loaderComponent';
import { AppConsumer } from '../../AppContext';

const hocComponent = Component => {
  return class extends React.Component {
    static contextType = AppConsumer;

    constructor(props) {
      super(props);
      this.state = {
        measure: this.getMeasure(getWidth()),
      };
    }

    // showToast = message => {};

    logMe = (tag, message) => {};

    handleLayout = ({ nativeEvent }) => {
      const { width } = nativeEvent.layout;
      this.logMe('width>> ', width);
      const measure = this.getMeasure(width);
      this.setState(() => ({ measure }));
    };

    getMeasure = width => {
      let measure = '';
      if (width < 360) {
        measure = 'LDPI';
      } else if (width < 480) {
        measure = 'MDPI';
      } else if (width < 640) {
        measure = 'HDPI';
      } else if (width < 768) {
        measure = 'XHDPI';
      } else if (width < 960) {
        measure = 'XXHDPI';
      } else if (width < 1024) {
        measure = 'XXXHDPI';
      } else if (width < 1440) {
        measure = 'LAPTOP';
      } else if (width < 2400) {
        measure = 'LAPTOP';
      }
      return measure;
    };

    componentWillMount() {
      this.checkSignUpRoute();
      this.checkSignInRoute();
    }

    checkSignUpRoute = async () => {
      const verified = await getPrefData(SIGNUP_OTP_VERIFIED);
      const { navigation } = this.props;

      if (!verified || verified === 'undefined' || verified === undefined) {
        switch (window.location.pathname) {
          case '/personal-detail':
            navigation.navigate('Registration');
            // code block
            break;
          case '/personal-detail-review':
            navigation.navigate('Registration');
            // code block
            break;
          case '/personal-address':
            navigation.navigate('Registration');
            break;
          case '/send-money-for-new-user':
            navigation.navigate('Registration');
            break;
          case '/about-the-business':
            navigation.navigate('Registration');
            break;
          case '/business-address':
            navigation.navigate('Registration');
            break;
          case '/authorized-person':
            navigation.navigate('Registration');
            break;
          case '/authorized-person-address':
            navigation.navigate('Registration');
            break;
          case '/business-receipt':
            navigation.navigate('Registration');
            break;
          default:
          // code block
        }
      }
    };

    checkSignInRoute = async () => {
      const verified = await getPrefData(SIGNIN_OTP_VERIFIED);
      const { navigation } = this.props;

      if (!verified || verified === 'undefined' || verified === undefined) {
        switch (window.location.pathname) {
          case '/my-recipients':
            navigation.navigate('Registration');
            break;
          case '/my-transaction':
            navigation.navigate('Registration');
            break;
          case '/otpPopUp':
            navigation.navigate('Registration');
            break;
          case '/confirmPassword':
            navigation.navigate('Registration');
            break;
          case '/Landing':
            navigation.navigate('Registration');
            break;
          case '/reciept':
            navigation.navigate('Registration');
            break;
          case '/confirm':
            navigation.navigate('Registration');
            break;
          case '/my-rewards':
            navigation.navigate('Registration');
            break;
          case '/add-recipients':
            navigation.navigate('Registration');
            break;
          case '/view-breakup':
            navigation.navigate('Registration');
            break;
          case '/add-account':
            navigation.navigate('Registration');
            break;
          case '/send-money-business':
            navigation.navigate('Registration');
            break;
          case '/manage-my-account':
            navigation.navigate('Registration');
            break;
          case '/SendMoney':
            navigation.navigate('Registration');
            break;
          case '/ModelNotification':
            navigation.navigate('Registration');
            break;
          case '/all-notifications':
            navigation.navigate('Registration');
            break;
          case '/popup':
            navigation.navigate('Registration');
            break;
          case '/profile':
            navigation.navigate('Registration');
            break;
          case '/demo-dropdown':
            navigation.navigate('Registration');
            break;
          case '/refer-friend':
            navigation.navigate('Registration');
            break;
          case '/subDollar-verification':
            navigation.navigate('Registration');
            break;
          case '/upload-document':
            navigation.navigate('Registration');
            break;
          // case '/logout':
          //   navigation.navigate('Registration');
          //   break;
          case '/changePassword':
            navigation.navigate('Registration');
            break;
          case '/test':
            navigation.navigate('Registration');
            break;
          case '/forgotPassword':
            navigation.navigate('Registration');
            break;
          case '/userIdLocked':
            navigation.navigate('Registration');
            break;
          case '/resetPasswordLink':
            navigation.navigate('Registration');
            break;
          case '/forgotUserId':
            navigation.navigate('Registration');
            break;
          case '/otpForgotPassword':
            navigation.navigate('Registration');
            break;
          case '/expressDelivery':
            navigation.navigate('Registration');
            break;
          case '/recipientRequest':
            navigation.navigate('Registration');
            break;
          case '/expressDeliveryMobile':
            navigation.navigate('Registration');
            break;
          case '/mobileViewExpressDelivery':
            navigation.navigate('Registration');
            break;
          case '/pay-bills':
            navigation.navigate('Registration');
            break;
          case '/add-landline':
            navigation.navigate('Registration');
            break;
          case '/billing-status':
            navigation.navigate('Registration');
            break;
          case '/landline-serviceProvider':
            navigation.navigate('Registration');
            break;
          case '/add-insurance':
            navigation.navigate('Registration');
            break;
          case '/policy_details':
            navigation.navigate('Registration');
            break;
          case '/add-policy':
            navigation.navigate('Registration');
            break;
          case '/manage-billers':
            navigation.navigate('Registration');
            break;
          case '/bill-payments':
            navigation.navigate('Registration');
            break;
          case '/electricity-bills':
            navigation.navigate('Registration');
            break;
          case '/add-electricity':
            navigation.navigate('Registration');
            break;
          case '/gas-agency':
            navigation.navigate('Registration');
            break;
          case '/addGas-agency':
            navigation.navigate('Registration');
            break;
          case '/select_account_details':
            navigation.navigate('Registration');
            break;
          case '/new_add_account':
            navigation.navigate('Registration');
            break;
          case '/account_details':
            navigation.navigate('Registration');
            break;
          case '/sender_receipt':
            navigation.navigate('Registration');
            break;

          case '/transaction-details':
            navigation.navigate('Registration');
            break;
          case '/send-money-for-reg-user':
            navigation.navigate('Registration');
            break;
          case '/confirmation':
            navigation.navigate('Registration');
            break;
          case '/thankYouPage':
            navigation.navigate('Registration');
            break;
          case '/prepaid-mobile-agency':
            navigation.navigate('Registration');
            break;
          case '/add-prepaid-mobile-agency':
            navigation.navigate('Registration');
            break;
          case '/postpaid-mobile-agency':
            navigation.navigate('Registration');
            break;
          case '/add-postpaid-mobile-agency':
            navigation.navigate('Registration');
            break;
          case '/powerProduct':
            navigation.navigate('Registration');
            break;
          case '/highValueTransaction':
            navigation.navigate('Registration');
            break;
          case '/add-recipientDetails':
            navigation.navigate('Registration');
            break;
          case '/recipientBank-details':
            navigation.navigate('Registration');
            break;
          case '/recipientInfo-individual':
            navigation.navigate('Registration');
            break;
          case '/recipientInfo-business':
            navigation.navigate('Registration');
            break;
          case '/recipient-address':
            navigation.navigate('Registration');
            break;

          default:
          // code block
        }
      }
    };

    renderLoader = ShowLoader => {
      const { isLoading } = this.props;
      return ShowLoader({
        isLoading,
      });
    };

    render() {
      const { measure } = this.state;
      const { isLoading } = this.props;
      const { ShowLoader } = this.context;
      return (
        <Fragment>
          <View onLayout={this.handleLayout} />
          <Component
            showToast={this.showToast}
            logMe={this.logMe}
            {...this.props}
            measure={measure}
          />
          {Platform.OS === 'web' ? (
            this.renderLoader(ShowLoader)
          ) : isLoading ? (
            <LoaderComponent isLoading />
          ) : null}
        </Fragment>
      );
    }
  };
};

export { hocComponent };
