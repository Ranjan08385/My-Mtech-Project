import React, { Component } from 'react';
import {
  View,
  Image,
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

class LandingPage extends Component {
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
    return (
      <View style={Styles.container}>
        <View style={[Styles.imgSection, Styles[getResponsiveStyle('recpDetail', styleWidth)]]}>
          <Image source={LoginImage} style={Styles.loginImage} />
          <View style={Styles.content}>
          <Image source={LoginLogo} style={Styles.loginLogo} />
          <View style={Styles.loginText}>
            <CustomText style={Styles.loginTextStyle}>Login.</CustomText>
          </View>
          <View style={Styles.welcomeText}>
            <CustomText style={Styles.welcomeTextStyle}>Welcome aboard</CustomText>
          </View>
          <View style={Styles.signInText}>
            <CustomText style={Styles.signInTextStyle}>Sign in to continue</CustomText>
            </View>
          </View>
        </View>
        <View style={Styles.loginSection}>
          <View style={Styles.unameAndPass}>
            <View style={Styles.uname}>
              <TextInput
                placeholder='Enter Username'
                value={username}
                onChange={value => this.onChangeUsername(value)}
                error={usernameError}
                />
            </View>
            <View style={Styles.password}>
              <TextInput
                placeholder='Enter Password'
                value={password}
                securetextentry={true}
                onChange={value => this.onChangePassword(value)}
                error={passwordError}
              />
            </View>
          </View>
          <View style={Styles.loginBtn}>
            <TouchableOpacity onPress={this.onLogin} style={Styles.loginBtnStyle}>
              <CustomText style={Styles.btnText}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
