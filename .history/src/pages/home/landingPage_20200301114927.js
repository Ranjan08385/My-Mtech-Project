import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
import Styles from './styles';

class LandingPage extends Component {

  render() {

    return (
      <View style={Styles.container}>
        <View style={Styles.imgSection}>
          <CustomText>Img Section</CustomText>
        </View>
        <View style={Styles.loginSection}>
          <CustomText>Login Section</CustomText>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
