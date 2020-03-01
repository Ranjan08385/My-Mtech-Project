import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';

class LandingPage extends Component {

  render() {

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CustomText style={{  }}>Clinic Directory</CustomText>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
