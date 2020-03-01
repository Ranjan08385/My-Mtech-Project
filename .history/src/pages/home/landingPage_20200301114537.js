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
        <CustomText style={{  }}>Clinic Directory</CustomText>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
