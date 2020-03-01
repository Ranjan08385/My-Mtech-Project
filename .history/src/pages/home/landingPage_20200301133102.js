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
import { validateUserName } from '../validation/validations';

const LoginImage = require('../images/login.png');
const LoginLogo = require('../images/login-logo.png');

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    };
  }

  onChangeUsername = value => {
    this.setState(validateUserName(value));
  }

  render() {
    const { username, password, usernameError, passwordError } = this.state;
    return (
      <View style={Styles.container}>
        <View style={Styles.imgSection}>
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
                />
            </View>
            <View style={Styles.password}>
              <TextInput
                placeholder='Enter Password'
                value={password}
                onChange={value => this.onChangePassword(value)}
              />
            </View>
          </View>
          <View style={Styles.loginBtn}>
            <TouchableOpacity style={Styles.loginBtnStyle}>
              <CustomText style={Styles.btnText}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
