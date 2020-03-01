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
import LoginImage from '../images/login.png';

class LandingPage extends Component {

  render() {

    return (
      <View style={Styles.container}>
        <View style={Styles.imgSection}>
          <Image src={LoginImage} style={Styles.loginImage} />
        </View>
        <View style={Styles.loginSection}>
          <View style={Styles.unameAndPass}>
            <View style={Styles.uname}>
              <TextInput
                placeholder='Enter Username'
                />
            </View>
            <View style={Styles.password}>
              <TextInput
                placeholder='Enter Password'
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
