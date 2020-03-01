import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
import Styles from './styles';
import TextInput from '../../components/customTextInput';

class LandingPage extends Component {

  render() {

    return (
      <View style={Styles.container}>
        <View style={Styles.imgSection}>
          <CustomText>Img Section</CustomText>
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
            <TouchableOpacity><CustomText>Login</CustomText></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
