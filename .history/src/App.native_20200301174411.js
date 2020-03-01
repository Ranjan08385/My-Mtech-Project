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
import HomePage from './pages/home/landingPage';
import { PREF_CURRENCY_CON, removePrefData } from './storage/preferenceStorage';
import { getActiveRouteName, getHeaderName } from './utils/nativeutils';

const signOutStack = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const SignedOutNavigator = createDrawerNavigator(
  {
    signOutStack,
  },
  {
    drawerPosition: 'right',
    contentComponent: SignOutMenuItems,
  }
);

const Manage = createStackNavigator(
  {
    HomePage,
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

const RootSwitch = createSwitchNavigator({
  SignedOutNavigator,
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
