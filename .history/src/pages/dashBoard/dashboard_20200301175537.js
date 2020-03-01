import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
import Styles from './styles';
import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';

const LoginImage = require('../images/login.png');
const LoginLogo = require('../images/login-logo.png');

class DashBoard extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: ' ',
      passwordError: ' ',
    };
  }

  onChangeUsername = value => {
    this.setState(validateUserName(value));
  }

  onChangePassword = value => {
    this.setState(validatePassword(value));
  }

  validate = () => {
    const { username, password } = this.state;
    let usernameError, passwordError;
    if (username.length === 0) {
      usernameError = VALIDATIONS.EMAIL_ID;
    }
    if (password.length === 0) {
      passwordError = VALIDATIONS.PASSWORD;
    }

    if (usernameError || passwordError) {
      this.setState({
        usernameError,
        passwordError,
      });
      return false;
    }
    return true;
  }

  onLogin = () => {
    const { ShowToast } = this.context;
    const isValid = this.validate();
    if (isValid) {
      ShowToast({
        showToast: true,
        message: `Login Successfull`,
        duration: 3000,
        align: 'center',
        top: 'top',
      });
    }
  }

  render() {
    const { username, password, usernameError, passwordError } = this.state;
    const { measure } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>

        <CustomText>Welcome</CustomText>

      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(DashBoard);
