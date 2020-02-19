/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Platform, View, TouchableOpacity } from 'react-native';
import { hocComponent } from '.';
import NetBankingModal from './customNetBankingPopUp';
import DarkBlueButton from './customDarkBlueButton';
import CustomText from './customText';
import WhiteButton from './customWhiteButton';
import { LANDING_PAGE } from '../constants/displayConstants';
import CustomStyle from '../styles/customStyle';
import Style from '../styles/landingPage';
import Modal from './custom_popup';

const logo = require('../../src/assets/images/logo.png');

class NriPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      netBankVisibleModal: false,
      styleWidth: props.measure,
      sucessfulInitiation: false
    };
    this.onClose = this.onClose.bind(this);
    this.inittiateRequest = this.inittiateRequest.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ styleWidth: newProps.measure });
  }

  onClose() {
    const { onPressClose } = this.props;
    this.setState({
      netBankVisibleModal: false
    });
    onPressClose({ visibleModal: false });
  }

  inittiateRequest() {
    const netBankVisibleModal = true;
    const sucessfulInitiation = true;
    this.onClose();
    this.setState({ netBankVisibleModal, sucessfulInitiation });
  }

  render() {
    const { visible, measure } = this.props;

    const { styleWidth, netBankVisibleModal } = this.state;
    const popUpModalWidth = `popUpModal_${measure}`;
    const popUpLastSecViewLeftRes = `popUpLastSecViewLeft_${measure}`;
    const popUpLastSecViewRightRes = `popUpLastSecViewRight_${measure}`;

    return (
      <View>
        {visible ? (
          <Modal
            isVisible
            style={[Style.popUpModal, Style[popUpModalWidth]]}
            customBackdrop={
              <View
                style={{
                  flex: 1
                }}
              />
            }
          >
            <View
              style={{
                flex: Platform.OS === 'web' ? undefined : 1,
                backgroundColor: '#000000BF',
                justifyContent: 'center',
                paddingHorizontal: Platform.OS === 'web' ? 0 : '3%'
              }}
            >
              <View style={Style.modalContent}>
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
                    {LANDING_PAGE.HOW_WOULD_YOU_LIKE_TO_LOGIN}
                  </CustomText>
                </View>
                <View style={Style.popUpButtonView}>
                  <DarkBlueButton
                    style={{
                      fontSize: Platform.OS === 'web' ? 16 : 14,
                      color: 'white'
                    }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{
                      width: '100%'
                    }}
                  >
                    {LANDING_PAGE.LOGIN_USING_EMAIL_ADDRESS}
                  </DarkBlueButton>
                </View>
                <View style={Style.popUpSecondText}>
                  <CustomText style={CustomStyle.popUpinformartionTextStyle}>
                    {LANDING_PAGE.SIMPLY_ENTER_YOUR_REGISTERED_EMAIL}
                  </CustomText>
                </View>
                <View style={Style.popUpWhiteButtonView}>
                  <WhiteButton
                    style={{
                      fontSize: Platform.OS === 'web' ? 16 : 14
                    }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{
                      width: '100%'
                    }}
                    onPress={() => this.inittiateRequest()}
                  >
                    {LANDING_PAGE.LOGIN_USING_NET_BANKING}
                  </WhiteButton>
                </View>
                <View style={Style.popUpLastSecView}>
                  <View
                    style={[
                      Style.popUpLastSecViewLeft,
                      Style[popUpLastSecViewLeftRes]
                    ]}
                  ></View>
                  <View
                    style={[
                      Style.popUpLastSecViewRight,
                      Style[popUpLastSecViewRightRes]
                    ]}
                  >
                    <View style={Style.popUpLastSecViewText}>
                      <CustomText
                        style={CustomStyle.popUpinformartionTextStyle}
                      >
                        {LANDING_PAGE.FINISH_A_THREE_STEP}
                      </CustomText>
                    </View>
                    <View style={Style.popUpLastSecViewText}>
                      <CustomText
                        style={CustomStyle.popUpinformartionTextStyle}
                      >
                        {LANDING_PAGE.ENTER_YOUR_ICICI_BANK}
                      </CustomText>
                    </View>
                    <View style={Style.popUpLastSecViewText}>
                      <CustomText
                        style={CustomStyle.popUpinformartionTextStyle}
                      >
                        {LANDING_PAGE.GO_TO_FUNDS_TRANSFER_PAGE}
                      </CustomText>
                    </View>
                    <View style={Style.popUpLastText}>
                      <CustomText
                        style={CustomStyle.popUpinformartionTextStyle}
                      >
                        {LANDING_PAGE.START_SENDING_MONEY_ONLINE}
                      </CustomText>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        ) : null}

        {netBankVisibleModal ? (
          <NetBankingModal
            measure={measure}
            visible
            onClose={() => this.onClose()}
          />
        ) : null}
      </View>
    );
  }
}

export default NriPopUp;
