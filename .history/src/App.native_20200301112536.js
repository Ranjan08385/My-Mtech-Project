// App.js - React Native

import React, { Component } from 'react';
import {
  AppState,
  AsyncStorage,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { AppConsumer, AppProvider } from './AppContext';
import Icon from './components/customIcon';
import Text from './components/customText';
import SignOutMenuItems from './components/Header/nativeHomeMenuItems';
import SignInMenuItems from './components/Header/nativeMenuItems';
import Toast from './components/Toast';
import AccountDetails from './pages/account_details/common_account_details/accountDetails';
import SelectAccountDetails from './pages/account_details/common_account_details/selectAccountDetails';
import NewAddAccount from './pages/account_details/sender_account_details/branchDetails';
import SenderReceipt from './pages/account_details/sender_account_details/senderReceipt';
import MyRecipients from './pages/addRecipient/AddRecipient';
import RecipientAddress from './pages/addRecipient/business/recipientAddress';
import RecipientInfoBusiness from './pages/addRecipient/business/recipientInfo';
import RecipientBankDetails from './pages/addRecipient/individual/bankDetailsIndividual';
import RecipientInfoIndividual from './pages/addRecipient/individual/recpInfoIndividual';
import AddRecipientDetails from './pages/addRecipient/recpDetails';
import AddElectricity from './pages/add_biller/electricity/addElectricityDetails';
import ElectricityBill from './pages/add_biller/electricity/electricity';
import AddGasAgency from './pages/add_biller/gas/addGasAgencyDetails';
import GasAgency from './pages/add_biller/gas/gasAgency';
import AddInsurance from './pages/add_biller/insurance_provider/addPolicyDetails';
import Insurance from './pages/add_biller/insurance_provider/insurance';
import PolicyDetails from './pages/add_biller/insurance_provider/policyDetails';
import AddLandline from './pages/add_biller/landline/addLandline';
import BillingStatus from './pages/add_biller/landline/billingStatus';
import LandlineServiceProvider from './pages/add_biller/landline/landlineServiceProvider';
import AddPostpaidMobile from './pages/add_biller/postpaid_mobile/addPostpaidMobile';
import PostpaidMobile from './pages/add_biller/postpaid_mobile/postpaidMobile';
import AddPrepaidMobile from './pages/add_biller/prepaid_mobile/addPrepaidMobile';
import PrepaidMobile from './pages/add_biller/prepaid_mobile/prepaidMobile';
import SendMoneyForNewUser from './pages/amount_transfer/sendMoneyForNewUser';
import SendMoneyForRegUser from './pages/amount_transfer/sendMoneyForRegUser';
import TransactionDetails from './pages/amount_transfer/transactionDetails';
import AboutTheBusiness from './pages/businessSignUp/aboutTheBusiness';
import AuthorizedPerson from './pages/businessSignUp/authorizedPerson';
import AuthorizedPersonAddress from './pages/businessSignUp/authorizedPersonAddress';
import BusinessAddress from './pages/businessSignUp/businessAddress';
import BusinessReceipt from './pages/businessSignUp/businessReciept';
import ChangePassword from './pages/changePassword/changePassword';
import Confirm from './pages/confirmPay/confirm';
import Confirmation from './pages/confirmPay/confirmation';
import HighValueTransaction from './pages/confirmPay/highValueTransaction';
import NewOtp from './pages/confirmPay/newOtp';
import Popup from './pages/confirmPay/popup';
import PayBillConfirm from './pages/pay_bills/payBillConfirm';
// import PrepaidMobile from './pages/add_biller/prepaid_mobile/prepaidMobile';
// import AddPrepaidMobile from './pages/add_biller/prepaid_mobile/addPrepaidMobile';
// import PostpaidMobile from './pages/add_biller/postpaid_mobile/postpaidMobile';
// import AddPostpaidMobile from './pages/add_biller/postpaid_mobile/addPostpaidMobile';
import PowerProduct from './pages/confirmPay/powerProduct';
import ThankYouPage from './pages/confirmPay/thankYouPage';
// import ThankYouPage from './pages/confirmPay/thankyou';
// import Thankyou from './pages/confirmPay/thankyou';
import ContactUs from './pages/contact/contact';
import HomePage from './pages/home/landingPage';
import ResetPasswordLink from './pages/login/resetPasswordLink';
import Logout from './pages/Logout/logout';
import ManageBiller from './pages/manage_billers/manageBillers';
import MyProfile from './pages/my_profile/myProfile';
import MyRewards from './pages/my_rewards/myRewards';
import MyTransaction from './pages/my_transaction/myTransaction';
import AllNotificationsPage from './pages/notification/allNotificationPage';
import ModelNotification from './pages/notification/modelNotificationLanding';
import BillPayments from './pages/pay_bills/billPayments';
import PayBills from './pages/pay_bills/payBills';
import PersonalDetail from './pages/personal_details/aboutUs';
import PersonalDetailAddress from './pages/personal_details/currentAddress';
import PersonalDetailReview from './pages/personal_details/reviewPersonalDetail';
import {
  default as MyRecipientList,
  default as MyRecipientRequest,
} from './pages/recipients/myRecipients';
import ReferAFriend from './pages/referFriend/referAFriend';
import AddAccount from './pages/senderDetails/add_account/index';
import ManageMyAccounts from './pages/senderDetails/manage_accounts/manage-my-account';
import Registration from './pages/signUp/SignUpMainPage';
import SubDollarVerification from './pages/subDollarVerification/subDollarVerify';
import TrackConnection from './pages/trackConnection/trackConnection';
import TrackTransfer from './pages/trackConnection/trackTransfer';
import UploadDocument from './pages/uploaddocuments/uploaddocuments';
import ViewBreakup from './pages/viewBrekup/viewBreakup';
import { PREF_CURRENCY_CON, removePrefData } from './storage/preferenceStorage';
import { getActiveRouteName, getHeaderName } from './utils/nativeutils';

const iconSize = 23;

const isSignedIn = true;

const checkSignedIn = (navigation, onClick) => {
  if (isSignedIn) {
    if (onClick === 'menu') {
      navigation.toggleDrawer();
    } else if (onClick === 'notification') {
      navigation.navigate('AllNotificationsPage');
    }
  } else {
    // alert('login check to be done!');
    // this.context.ShowToast({
    //   showToast: true,
    //   message: 'error',
    //   duration: 3000,
    //   align: 'center',
    //   top: 'top',
    //   errortype: 'error',
    // });
  }
};

const BusinessSignUp = createSwitchNavigator({
  AboutTheBusiness,
  BusinessAddress,
  AuthorizedPerson,
  AuthorizedPersonAddress,
  BusinessReceipt,
});

const IndividualSignUp = createSwitchNavigator({
  PersonalDetail,
  PersonalDetailAddress,
  PersonalDetailReview,
});

const signOutStack = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
    Registration,
    ContactUs,
    TrackConnection,
    TrackTransfer,
    SendMoneyForNewUser,
    IndividualSignUp,
    BusinessSignUp,
    Logout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const routename = getHeaderName(navigation.state.routeName);
      const IconComponent = Ionicons;
      const leftIcon =
        navigation.state.routeName === 'HomePage'
          ? require('./assets/images/icici.png')
          : 'ios-arrow-back';
      return {
        headerTitle: (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            {/* <Image sty source={require('./assets/images/icici.png')}></Image> */}
            {routename === 'Track Transaction' ||
            routename === 'Sign Up' ||
            routename === 'Registration' ||
            routename === 'Send Money' ? (
              <Text
                style={{
                  color:
                    routename === 'Track Transaction' ? 'white' : '#1e2546',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginHorizontal: 10,
                }}
              >
                {routename}
              </Text>
            ) : null}
          </View>
        ),
        headerLeft: null,
        headerRight: (
          <View style={{ marginRight: 20, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name='menu-toggle'
                size={iconSize}
                color={routename === 'Track Transaction' ? 'white' : '#000'}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          paddingHorizontal: 10,
          backgroundColor:
            routename === 'Track Transaction' ? '#1e2546' : 'white',
        },
      };
    },
  }
);

const SignedOutNavigator = createDrawerNavigator(
  {
    signOutStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const name =
        navigation.state.index !== undefined
          ? navigation.state.routes[navigation.state.index]
          : navigation.state.routeName;
      let drawerLockMode = 'unlocked';
      if (name.routeName === 'HomePage') {
        drawerLockMode = 'locked-closed';
      }

      return {
        drawerLockMode,
      };
    },
    drawerPosition: 'right',
    contentComponent: SignOutMenuItems,
  }
);

const SendMoney = createStackNavigator(
  {
    //  TrackTransfer,
    //  TrackConnection,
    SendMoneyForRegUser,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const MyTransactions = createStackNavigator(
  {
    MyTransaction,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const Manage = createStackNavigator(
  {
    MyRecipientList,
    MyRecipientRequest,
    ManageMyAccounts,
    ManageBiller,
    LandlineServiceProvider,
    BillingStatus,
    BillPayments,
    AddInsurance,
    PolicyDetails,
    Insurance,
    AddLandline,
    PayBillConfirm,
    PayBills,
    SubDollarVerification,
    ReferAFriend,
    MyRecipients,
    MyTransaction,
    Registration,
    Confirm,
    MyProfile,
    MyRewards,
    ElectricityBill,
    AddElectricity,
    TransactionDetails,
    Confirmation,
    ThankYouPage,
    GasAgency,
    AddGasAgency,
    PrepaidMobile,
    AddPrepaidMobile,
    PostpaidMobile,
    AddPostpaidMobile,
    PowerProduct,
    AddRecipientDetails,
    RecipientBankDetails,
    RecipientInfoIndividual,
    RecipientInfoBusiness,
    RecipientAddress,
    // PowerProductMain,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const prevGetStateForActionManage = Manage.router.getStateForAction;
Manage.router = {
  ...Manage.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceManageScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionManage(action, state);
  },
};

const tabBarOnPress = ({ navigation, defaultHandler }) => {
  const { isFocused, state, goBack } = navigation;

  if (isSignedIn === false) {
    if (state.routeName !== 'SendMoney') {
      alert('login check to be done!');
    }
  } else if (isSignedIn === true) {
    if (isFocused()) {
      if (state.routes && state.routes.length > 1) {
        // <--- undefined handling
        for (let i = 0; i < state.routes.length - 1; i += 1) {
          goBack();
        }
      } else {
        // @TODO SCROLL TO TOP OF EACH TAB IF SCROLLABLE, $CALLBACK().
      }
    } else {
      defaultHandler();
    }
  }
};

const homeBottomNavigator = createBottomTabNavigator(
  {
    SendMoney: {
      screen: SendMoney,
      navigationOptions: {
        title: 'Send Money',
      },
    },
    PayBills: {
      screen: PayBills,
      navigationOptions: {
        title: 'Pay Bills',
      },
    },
    MyTransactions: {
      screen: MyTransactions,
      navigationOptions: {
        title: 'My Transactions',
      },
    },
    Manage: {
      screen: Manage,
      navigationOptions: {
        title: 'Manage',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'SendMoney') {
          iconName = 'pay-money';
        } else if (routeName === 'PayBills') {
          iconName = 'wallet';
        } else if (routeName === 'MyTransactions') {
          iconName = 'online-pay';
        } else if (routeName === 'Manage') {
          iconName = 'setting';
        }
        return <Icon name={iconName} size={23} color={tintColor} />;
      },
      tabBarOnPress,
    }),
    initialRouteName: 'SendMoney',
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: 'white',
      activeBackgroundColor: '#151B3F',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#132c6e',
      labelStyle: {
        paddingTop: 3,
        color: 'white',
        fontWeight: 'normal',
        fontSize: 12,
      },
      tabStyle: {
        paddingVertical: 5,
      },
      style: { height: 60 },
    },
  }
);

const bottomNavigatorStack = createStackNavigator(
  {
    homeBottomNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginHorizontal: 10,
              }}
            >
              {getHeaderName(getActiveRouteName(navigation.state))}
            </Text>
          </View>
        ),
        headerRight: (
          <View style={{ marginRight: 10, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => checkSignedIn(navigation, 'notification')}
              style={{ marginHorizontal: 10 }}
            >
              <Icon
                name='notification'
                size={iconSize}
                color={
                  getActiveRouteName(navigation.state) ===
                  'AllNotificationsPage'
                    ? '#e77817'
                    : 'white'
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => checkSignedIn(navigation, 'menu')}
              style={{ marginHorizontal: 10 }}
            >
              <Icon name='menu-toggle' size={iconSize} color='white' />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          paddingHorizontal: 10,
        },
        headerStyle: {
          backgroundColor: '#1e2546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  }
);

const signedInStack = createStackNavigator(
  {
    homeNavigator: {
      screen: bottomNavigatorStack,
      navigationOptions: {
        header: null,
      },
    },
    SendMoneyForRegUser,
    UploadDocument,
    SelectAccountDetails,
    TrackConnection,
    TrackTransfer,
    // SendMoneyBusinessLanding,

    MyRecipients,
    AddAccount,
    ViewBreakup,
    MyRewards,
    ContactUs,
    Confirm,
    NewOtp,
    // Thankyou,
    // Thankyou,
    Popup,
    ReferAFriend,
    SubDollarVerification,
    MyProfile,

    ChangePassword,

    UploadDocument,
    ModelNotification,
    AllNotificationsPage,
    ResetPasswordLink,
    LandlineServiceProvider,
    AddLandline,
    PayBillConfirm,
    BillingStatus,
    Insurance,
    PolicyDetails,
    AddInsurance,
    ManageBiller,
    BillPayments,
    PayBills,
    ElectricityBill,
    AddElectricity,
    GasAgency,
    AddGasAgency,

    PrepaidMobile,
    AddPrepaidMobile,
    PostpaidMobile,
    AddPostpaidMobile,

    NewAddAccount,
    AccountDetails,
    SenderReceipt,
    TransactionDetails,
    HighValueTransaction,
    AddRecipientDetails,
    RecipientBankDetails,
    RecipientInfoIndividual,
    RecipientInfoBusiness,
    RecipientAddress,
    TransactionDetails,
    Confirmation,
    ThankYouPage,
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      const IconComponent = Ionicons;
      return {
        headerLeft: null,
        headerTitle: (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginHorizontal: 10,
              }}
            >
              {getHeaderName(navigation.state.routeName)}
            </Text>
          </View>
        ),
        headerRight: (
          <View style={{ marginRight: 10, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllNotificationsPage')}
              style={{ marginHorizontal: 10 }}
            >
              <Icon
                name='notification'
                size={iconSize}
                color={
                  navigation.state.routeName === 'AllNotificationsPage'
                    ? '#e77817'
                    : 'white'
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigation.openDrawer}
              style={{ marginHorizontal: 10 }}
            >
              <Icon name='menu-toggle' size={iconSize} color='white' />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          paddingHorizontal: 10,

          backgroundColor: '#1e2546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  }
);

const prevGetStateForAction = signedInStack.router.getStateForAction;
signedInStack.router = {
  ...signedInStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceSignedInScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForAction(action, state);
  },
};

const SignedInNavigator = createDrawerNavigator(
  {
    signedInStack,
  },
  {
    drawerPosition: 'right',
    contentComponent: SignInMenuItems,
  }
);

const RootSwitch = createSwitchNavigator({
  SignedOutNavigator,
  SignedInNavigator,
  // TransactionDetails,
  // Confirmation,
  // ThankYouPage
  // PowerProductMainP

  // SignedOutNavigator,
  // // PersonalDetail,
  // SignedInNavigator,
});

const AppNavigator = createAppContainer(RootSwitch);

class App extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      message: null,
      duration: null,
      ShowToast: this.showToast,
      align: null,
      position: null,
      toastStyle: null,
      errortype: null,
    };
  }

  async componentDidMount() {
    // isSignedIn = await getPrefData(CUST_ID);
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'inactive') {
      removePrefData(PREF_CURRENCY_CON);
    }
  };

  showToast = props => {
    this.refs.Toast.showToast(
      typeof props.message === 'function' ? props.message() : props.message,
      props.duration,
      props.align,
      props.position,
      props.toastStyle,
      props.errortype
    );
  };

  storeData = async routeName => {
    try {
      await AsyncStorage.setItem('router', routeName);
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const {
      showToast,
      message,
      duration,
      align,
      position,
      toastStyle,
      errortype,
    } = this.state;

    return (
      <AppProvider value={this.state}>
        <StatusBar backgroundColor='#1e2546' barStyle='light-content' />
        <MenuProvider>
          <AppNavigator
            onNavigationStateChange={(prevState, currentState, action) => {
              const currentRouteName = getActiveRouteName(currentState);
              this.storeData(currentRouteName);
            }}
          />
        </MenuProvider>
        <Toast
          ref='Toast'
          showToast={showToast}
          message={message}
          duration={duration}
          position={position}
          align={align}
          toastStyle={toastStyle}
          errortype={errortype}
        />
      </AppProvider>
    );
  }
}
export default App;
