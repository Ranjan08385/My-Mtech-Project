import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
// import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
import Styles from './styles';
import Dashboard from '../dashBoard/dashboard';

const LoginImage = require('../images/header-logo.png');
const dashboard = require('../images/dashboard.png');
const adduser = require('../images/adduser.png');
const facility = require('../images/facility-icon.png');
const organization = require('../images/organization.png');
const email = require('../images/email.png');
const edit = require('../images/edit.png');

class Search extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {
    const { menuArray, password, usernameError, passwordError } = this.state;
    const { measure, navigation } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.mainPage}>
        <Dashboard navigation={navigation} measure={measure} />
        <View style={Styles.container}>
          <View style={Styles.searchPanel}>
            <View style={Styles.inputField}>
              <TextInput
                placeholder='Search here'
                style={Styles.textInputStyle}
                />
            </View>
            <View style={Styles.searchBtn}>
              <TouchableOpacity
                style={Styles.searchBtnStyle}
              ><CustomText style={Styles.btnTextStyle}>Search</CustomText>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(Search);
