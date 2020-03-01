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
