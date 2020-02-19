/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Image,
  Platform,
  View,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
import { hocComponent } from '.';
import DarkBlueButton from './customDarkBlueButton';
import CustomText from './customText';
import CustomStyle from '../styles/customStyle';
import Style from '../styles/landingPage';
import Modal from './custom_popup';
import { LANDING_PAGE } from '../constants/displayConstants';

const logo = require('../../src/assets/images/logo.png');
const sso = require('../../src/resources/images/login-sso.png');
const laptop = require('../../src/resources/images/laptop.png');
const wallet = require('../../src/resources/images/wallet.png');

let modalStyle = 'popUpModal';

class NriPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleWidth: props.measure
    };
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ styleWidth: newProps.measure });
  }

  onClose() {
    const { onClose } = this.props;
    onClose();
  }

  render() {
    const { visible, measure } = this.props;
    const popUpModalWidth = `popUpModal_${measure}`;
    const screenWidth = Dimensions.get('window').width;
    // const popUpModalWidth = `popUpModal_${styleWidth}`;
    const netBankModalContentStepContentRes = `netBankModalContentStepContent_${measure}`;
    const netBankModalContentBtnSecRes = `netBankModalContentBtnSec_${measure}`;
    const netBankModalContentStepViewRowRes = `netBankModalContentStepViewRow_${measure}`;
    if (screenWidth < 768) {
      modalStyle = 'popUpModal_LDPI';
    } else if (screenWidth > 767 && screenWidth < 968) {
      modalStyle = 'popUpModal_XHDPI';
    } else {
      modalStyle = 'popUpModal';
    }
    console.log(modalStyle);
    return (
      <View>
        {visible ? (
          <Modal
            isVisible
            customBackdrop={
              <View
                style={{
                  flex: 1
                }}
              />
            }
            style={{
              margin: 0
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor:
                  Platform.OS === 'web' ? 'transparent' : '#000000BF',
                justifyContent: 'center',
                paddingHorizontal: Platform.OS === 'web' ? '30%' : '3%'
              }}
            >
              <View style={Style.netBankModalContent}>
                <View style={Style.popUpCloseBtnView}>
                  <TouchableOpacity onPress={() => this.onClose()}>
                    <View>
                      <CustomText style={Style.popUpCloseBtnStyle}>
                        x
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Style.popUpImageView}>
                  <Image
                    source={logo}
                    style={Style.popUpLogoStyle}
                    resizeMode='contain'
                  ></Image>
                </View>
                <View style={Style.popUpFirstText}>
                  <CustomText style={CustomStyle.popUph2SubSecStyle}>
                    {LANDING_PAGE.NOW_LOGIN_USING_YOUR_INTERNET_BANKING}
                  </CustomText>
                </View>
                <View style={Style.netBankModalContentStepView}>
                  <View
                    style={[
                      Style.netBankModalContentStepViewRow,
                      Style[netBankModalContentStepViewRowRes]
                    ]}
                  >
                    <View style={Style.netBankModalContentStepImageSec}>
                      <Image
                        source={sso}
                        style={Style.netBankModalContentStepImage}
                        resizeMode='center'
                      ></Image>
                    </View>
                    <View
                      style={[
                        Style.netBankModalContentStepContent,
                        Style[netBankModalContentStepContentRes]
                      ]}
                    >
                      <View style={Style.netBankModalContentStepContentHead}>
                        <CustomText style={CustomStyle.popUph2SubSecStyle}>
                          {LANDING_PAGE.STEP1}
                        </CustomText>
                      </View>
                      <View style={Style.netBankModalContentStepContentSubSec}>
                        <CustomText style={CustomStyle.subHeadHomePage}>
                          {LANDING_PAGE.LOGIN_TO_YOUR_ICICI_BANK}
                        </CustomText>
                      </View>
                    </View>
                  </View>

                  <View
                    style={[
                      Style.netBankModalContentStepViewRow,
                      Style[netBankModalContentStepViewRowRes]
                    ]}
                  >
                    <View style={Style.netBankModalContentStepImageSec}>
                      <Image
                        source={laptop}
                        style={Style.netBankModalContentStepImage}
                        resizeMode='center'
                      ></Image>
                    </View>
                    <View
                      style={[
                        Style.netBankModalContentStepContent,
                        Style[netBankModalContentStepContentRes]
                      ]}
                    >
                      <View style={Style.netBankModalContentStepContentHead}>
                        <CustomText style={CustomStyle.popUph2SubSecStyle}>
                          {LANDING_PAGE.STEP2}
                        </CustomText>
                      </View>
                      <View style={Style.netBankModalContentStepContentSubSec}>
                        <CustomText style={CustomStyle.subHeadHomePage}>
                          {LANDING_PAGE.GO_TO_FUNDS_TRANSFER}
                        </CustomText>
                      </View>
                    </View>
                  </View>

                  <View style={Style.netBankModalContentStepViewRow}>
                    <View style={Style.netBankModalContentStepImageSec}>
                      <Image
                        source={wallet}
                        style={Style.netBankModalContentStepImage}
                        resizeMode='center'
                      ></Image>
                    </View>
                    <View
                      style={[
                        Style.netBankModalContentStepContent,
                        Style[netBankModalContentStepContentRes]
                      ]}
                    >
                      <View style={Style.netBankModalContentStepContentHead}>
                        <CustomText style={CustomStyle.popUph2SubSecStyle}>
                          {LANDING_PAGE.STEP3}
                        </CustomText>
                      </View>
                      <View style={Style.netBankModalContentStepContentSubSec}>
                        <CustomText style={CustomStyle.subHeadHomePage}>
                          {LANDING_PAGE.START_SENDING_MONEY}
                        </CustomText>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={[
                    Style.netBankModalContentBtnSec,
                    Style[netBankModalContentBtnSecRes]
                  ]}
                >
                  <DarkBlueButton
                    style={{
                      fontSize: Platform.OS === 'web' ? 16 : 14,
                      color: 'white'
                    }}
                    containerStyle={{
                      width: '100%'
                    }}
                    onPress={() =>
                      Linking.openURL(
                        'https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&CTA_FLAG=FTRET&_ga=2.52585576.1187629919.1554719625-651112369.1534241774'
                      )
                    }
                  >
                    {LANDING_PAGE.LOGIN_TO_ICICI_BANK}
                  </DarkBlueButton>
                </View>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}
export default NriPopUp;
