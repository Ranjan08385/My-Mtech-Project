import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  Platform
} from 'react-native';
import { responsiveHeight, responsiveWidth } from './customResponsiveDimension';
import {
  M2I,
  HOW_IT_WORKS,
  REFER_A_FRIEND,
  LIST_OF_HOLIDAYS,
  FOLLOW_US_ON_FACEBOOK,
  HELP,
  FAQ,
  CONTACT_US,
  CHAT,
  LEGAL,
  DISCLAIMER,
  PRIVACY_POLICY,
  GOOGLE_PLAY,
  APP_STORE,
  FOLLOW_US,
  TERMS_AND_CONDITIONS,
  ICICI_BANK,
  TRAVEL_A_LOT,
  GET_THE_APP
} from '../constants/displayConstants';
import { hocComponent } from '.';
import CustomText from './customText';

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: responsiveWidth(8),
    marginTop: responsiveHeight(8),
    marginBottom: responsiveHeight(3)
  },
  textStyle: {
    lineHeight: 35,
    color: 'white'
  },
  textStyleWithOpacity: {
    lineHeight: 35,
    color: 'rgba(255,255,255,0.5)'
  },

  disabledText: {
    color: '#dcdcdc'
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonTextStyle: {
    color: '#fff',
    marginLeft: responsiveWidth(0.3),
    fontSize: 14
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    padding: 10
  },
  buttonOuterView: {
    flex: 1.5,
    display: 'flex',
    marginVertical: responsiveHeight(1)
  },
  subContainerStyle: {
    // flex: 1,
    flexDirection: 'row'
  },
  subContainerStyle_XXXHDPI: { flexDirection: 'row' },
  subContainerStyle_XXHDPI: { flexDirection: 'row' },
  subContainerStyle_XHDPI: { flexDirection: 'column' },
  subContainerStyle_MDPI: { flexDirection: 'column' },
  subContainerStyle_HDPI: { flexDirection: 'column' },
  subContainerStyle_LDPI: { flexDirection: 'column' },
  subContainerStyle_LAPTOP: { flexDirection: 'row' },
  subBottomContainer: {
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: responsiveWidth(8),
    display: 'none'
  },
  subBottomContainer_XXHDPI: { display: 'flex' },
  subBottomContainer_XHDPI: { display: 'flex' },
  subBottomContainer_MDPI: { display: 'flex' },
  subBottomContainer_HDPI: { display: 'flex' },
  subBottomContainer_LDPI: { display: 'flex' },
  subBottomContainer_LAPTOP: { display: 'none' },

  buttonOuterView_XXXHDPI: {
    display: 'flex'
  },
  buttonOuterView_XXHDPI: { display: 'none' },
  buttonOuterView_XHDPI: { display: 'none' },
  buttonOuterView_MDPI: { display: 'none' },
  buttonOuterView_HDPI: { display: 'none' },
  buttonOuterView_LDPI: { display: 'none' },
  buttonOuterView_LAPTOP: { display: 'flex' },
  containerStyle_LAPTOP: {
    marginBottom: responsiveHeight(8)
  },
  textStyle1: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    marginRight: responsiveWidth(3)
  },
  ICICIBankTextStyle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    marginRight: responsiveWidth(3),
    display: 'flex'
  },
  ICICIBankTextStyle1: {
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    marginRight: responsiveWidth(3),
    textAlign: 'center',
    marginTop: responsiveHeight(2)
  },

  buttonTextStyle1: {
    color: 'rgba(255,255,255,0.5)',
    marginLeft: responsiveWidth(1),
    display: 'flex',
    fontSize: 12
  },
  outerContainerStyle1: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: responsiveWidth(2)
  },
  outerTextStyle1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  faceBookContainerBtnStyle: {
    //  flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2)
  },
  playStoreContainerBtnStyle: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: responsiveWidth(2),
    marginHorizontal: 0
  },
  appStoreBtnContainerStyle: {
    //   flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: responsiveWidth(2),
    marginHorizontal: 0
  },
  buttonOuterStyle1: {
    flexDirection: 'row',
    marginTop: 0,

    justifyContent: 'center'
  },
  buttonOuterStyle1_LAPTOP: { marginTop: 0 },
  buttonOuterStyle1_XXXHDPI: { marginTop: 0 },
  buttonOuterStyle1_XXHDPI: { marginTop: 0 },
  buttonOuterStyle1_XHDPI: {
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(3)
  },
  buttonOuterStyle1_HDPI: {
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(3)
  },
  buttonOuterStyle1_MDPI: {
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(3)
  },
  buttonOuterStyle1_LDPI: {
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(3)
  },
  outerContainerStyle1_LAPTOP: { flexDirection: 'row' },
  outerContainerStyle1_XXXHDPI: { flexDirection: 'row' },
  outerContainerStyle1_XXHDPI: { flexDirection: 'row' },
  outerContainerStyle1_XHDPI: { flexDirection: 'column' },
  outerContainerStyle1_HDPI: { flexDirection: 'column' },
  outerContainerStyle1_MDPI: { flexDirection: 'column' },
  outerContainerStyle1_LDPI: { flexDirection: 'column' },

  buttonTextStyle1_XXHDPI: { display: 'none' },
  buttonTextStyle1_XHDPI: { display: 'none' },
  buttonTextStyle1_HDPI: { display: 'none' },
  buttonTextStyle1_MDPI: { display: 'none' },
  buttonTextStyle1_LDPI: { display: 'none' },
  buttonTextStyle1_XXXHDPI: { display: 'flex' },
  buttonTextStyle1_LAPTOP: { display: 'flex' },

  outerTextStyle1_LAPTOP: { justifyContent: 'flex-start' },
  outerTextStyle1_XXXHDPI: { justifyContent: 'flex-start' },
  outerTextStyle1_XXHDPI: { justifyContent: 'flex-start' },
  outerTextStyle1_XHDPI: { justifyContent: 'center' },
  outerTextStyle1_HDPI: { justifyContent: 'center' },
  outerTextStyle1_MDPI: { justifyContent: 'center' },
  outerTextStyle1_LDPI: { justifyContent: 'center' },

  ICICIBankTextStyle_LAPTOP: { display: 'flex' },
  ICICIBankTextStyle_XXXHDPI: { display: 'flex' },
  ICICIBankTextStyle_XXHDPI: { display: 'flex' },
  ICICIBankTextStyle_XHDPI: { display: 'flex' },
  ICICIBankTextStyle_HDPI: { display: 'none' },
  ICICIBankTextStyle_MDPI: { display: 'none' },
  ICICIBankTextStyle_LDPI: { display: 'none' },

  ICICIBankTextStyle1_LAPTOP: { display: 'none' },
  ICICIBankTextStyle1_XXXHDPI: { display: 'none' },
  ICICIBankTextStyle1_XXHDPI: { display: 'none' },
  ICICIBankTextStyle1_XHDPI: { display: 'none' },
  ICICIBankTextStyle1_HDPI: { display: 'flex' },
  ICICIBankTextStyle1_MDPI: { display: 'flex' },
  ICICIBankTextStyle1_LDPI: { display: 'flex' },

  faceBookContainerBtnStyle_LAPTOP: {
    justifyContent: 'flex-end',
    flex: 1
  },
  faceBookContainerBtnStyle_XXXHDPI: { justifyContent: 'flex-end', flex: 1 },
  faceBookContainerBtnStyle_XXHDPI: {
    justifyContent: 'flex-end',
    flex: 1,
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(0),
    paddingRight: responsiveWidth(2.5)
  },
  faceBookContainerBtnStyle_XHDPI: {
    // justifyContent: 'center',
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(0),
    paddingRight: responsiveWidth(2.5)
  },
  faceBookContainerBtnStyle_HDPI: {
    // justifyContent: 'center',
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(0),
    paddingRight: responsiveWidth(2.5)
  },
  faceBookContainerBtnStyle_MDPI: {
    // justifyContent: 'center',
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(0),
    paddingRight: responsiveWidth(2.5)
  },
  faceBookContainerBtnStyle_LDPI: {
    // justifyContent: 'center',
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(0),
    paddingRight: responsiveWidth(2.5)
  },

  playStoreContainerBtnStyle_LAPTOP: { justifyContent: 'flex-end', flex: 1 },
  playStoreContainerBtnStyle_XXXHDPI: {
    justifyContent: 'flex-end',
    flex: 1
    // marginHorizontal: responsiveWidth(0),
    // paddingHorizontal: responsiveWidth(5)
  },
  playStoreContainerBtnStyle_XXHDPI: {
    justifyContent: 'flex-end',
    flex: 1,
    marginHorizontal: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(2.5)
  },
  playStoreContainerBtnStyle_XHDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(2.5)
  },
  playStoreContainerBtnStyle_HDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(2.5)
  },
  playStoreContainerBtnStyle_MDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(2.5)
  },
  playStoreContainerBtnStyle_LDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0),
    paddingHorizontal: responsiveWidth(2.5)
  },

  appStoreBtnContainerStyle_LAPTOP: { justifyContent: 'flex-end', flex: 1 },
  appStoreBtnContainerStyle_XXXHDPI: { justifyContent: 'flex-end', flex: 1 },
  appStoreBtnContainerStyle_XXHDPI: { justifyContent: 'flex-end', flex: 1 },
  appStoreBtnContainerStyle_XHDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0)
  },
  appStoreBtnContainerStyle_HDPI: {
    // justifyContent: 'scenter',
    marginHorizontal: responsiveWidth(0)
  },
  appStoreBtnContainerStyle_MDPI: {
    // justifyContent: 'scenter',
    marginHorizontal: responsiveWidth(0)
  },
  appStoreBtnContainerStyle_LDPI: {
    // justifyContent: 'center',
    marginHorizontal: responsiveWidth(0)
  }
});

function CustomFooter(props) {
  const { navigation } = props;
  const buttonOuterViewWidth = `buttonOuterView_${props.measure}`;
  const containerStyleWidth = `containerStyle_${props.measure}`;
  const subBottomContainerWidth = `subBottomContainer_${props.measure}`;
  const subcontainerStyleWidth = `subContainerStyle_${props.measure}`;
  const buttonTextStyle1Width = `buttonTextStyle1_${props.measure}`;
  const outerContainerStyle1Width = `outerContainerStyle1_${props.measure}`;
  const buttonOuterStyle1Width = `buttonOuterStyle1_${props.measure}`;
  const outerTextStyle1Width = `outerTextStyle1_${props.measure}`;
  const faceBookContainerBtnStyleWidth = `faceBookContainerBtnStyle_${props.measure}`;
  const playStoreContainerBtnStyleWidth = `playStoreContainerBtnStyle_${props.measure}`;
  const appStoreBtncontainerStyleWidth = `appStoreBtnContainerStyle_${props.measure}`;
  const ICICIBankTextStyleWidth = `ICICIBankTextStyle_${props.measure}`;
  const ICICIBankTextStyle1Width = `ICICIBankTextStyle1_${props.measure}`;
  return (
    <View style={{ display: Platform.OS === 'web' ? 'flex' : 'none' }}>
      {props.signedIn === false ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#182340'
          }}
        >
          <View style={[styles.containerStyle, styles[containerStyleWidth]]}>
            <View
              style={[styles.subContainerStyle, styles[subcontainerStyleWidth]]}
            >
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomText style={styles.textStyle}>{M2I}</CustomText>

                <CustomText
                  accessibilityRole='link'
                  href='https://www.icicibank.com/nri-banking/money_transfer/videos-listing.page?&_ga=2.120035083.265893719.1575872069-1447154883.1551188293'
                  style={styles.textStyleWithOpacity}
                  target='_blank'
                >
                  {HOW_IT_WORKS}
                </CustomText>

                <CustomText
                  style={styles.textStyleWithOpacity}
                  onPress={() => navigation.navigate('ReferAFriend')}
                >
                  {REFER_A_FRIEND}
                </CustomText>

                <CustomText
                  accessibilityRole='link'
                  href='http://www.icicibankusa.com/remittance_services/money2india/holiday-list.page?'
                  style={styles.textStyleWithOpacity}
                  target='_blank'
                >
                  {LIST_OF_HOLIDAYS}
                </CustomText>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CustomText
                    style={styles.textStyleWithOpacity}
                    onPress={() =>
                      Linking.openURL('https://www.facebook.com/ICICIBankNriServices/')
                    }
                  >
                    {FOLLOW_US_ON_FACEBOOK}
                  </CustomText>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      marginLeft: responsiveWidth(0.5),
                    }}
                    source={require('../assets/images/facebook.png')}
                  ></Image>
                </View> */}
              </View>
              <View
                style={{
                  flex: 0.7
                  // marginLeft: responsiveWidth(2)
                }}
              >
                <CustomText style={styles.textStyle}>{HELP}</CustomText>

                <CustomText
                  accessibilityRole='link'
                  href='http://www.icicibankusa.com/faq/index.page'
                  style={styles.textStyleWithOpacity}
                  target='_blank'
                >
                  {FAQ}
                </CustomText>

                <CustomText
                  style={styles.textStyleWithOpacity}
                  onPress={() => navigation.navigate('ContactUs')}
                >
                  {CONTACT_US}
                </CustomText>
                {/* <CustomText style={styles.textStyleWithOpacity}>
                  {CHAT}
                </CustomText> */}
              </View>
              <View
                style={{
                  flex: 0.75
                }}
              >
                <CustomText style={styles.textStyle}>{LEGAL}</CustomText>

                <CustomText
                  accessibilityRole='link'
                  href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                  style={styles.textStyleWithOpacity}
                  target='_blank'
                >
                  {TERMS_AND_CONDITIONS}
                </CustomText>

                <CustomText
                  accessibilityRole='link'
                  href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                  style={styles.textStyleWithOpacity}
                  target='_blank'
                >
                  {DISCLAIMER}
                </CustomText>

                <CustomText
                  style={styles.textStyleWithOpacity}
                  accessibilityRole='link'
                  href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                  target='_blank'
                >
                  {PRIVACY_POLICY}
                </CustomText>
              </View>
              <View
                style={[styles.buttonOuterView, styles[buttonOuterViewWidth]]}
              >
                <View
                  style={{
                    flex: 1,
                    // borderBottomWidth: 1,
                    // borderTopWidth: 1,
                    borderColor: 'rgba(255,255,255,0.5)',
                    justifyContent: 'center'
                  }}
                >
                  <View style={{}}>
                    <CustomText>
                      <CustomText style={{ color: 'white', fontSize: 28 }}>
                        {TRAVEL_A_LOT}
                      </CustomText>
                      <CustomText
                        style={{
                          color: 'white',
                          fontSize: 28
                        }}
                      >
                        {GET_THE_APP}
                      </CustomText>
                    </CustomText>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginTop: 20
                      }}
                    >
                      <TouchableOpacity
                        style={[
                          styles.buttonStyle,
                          { marginRight: responsiveWidth(1) }
                        ]}
                        // onPress={() =>
                        //   Linking.openURL(
                        //     'https://play.google.com/store/apps/details?id=icici.imobile.app'
                        //   )
                        // }
                        accessibilityRole='link'
                        href='https://play.google.com/store/apps/details?id=icici.imobile.app'
                        target='_blank'
                      >
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Image
                            style={{ height: 27.17, width: 25 }}
                            source={require('../assets/images/googlePlay.png')}
                          ></Image>
                          <CustomText style={styles.buttonTextStyle}>
                            {GOOGLE_PLAY}
                          </CustomText>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          styles.buttonStyle,
                          { marginLeft: responsiveWidth(1) }
                        ]}
                        // onPress={() =>
                        //   Linking.openURL(
                        //     'https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                        //   )
                        // }
                        accessibilityRole='link'
                        href='https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                        target='_blank'
                      >
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Image
                            style={{ height: 30, width: 25 }}
                            source={require('../assets/images/appleStore.png')}
                          ></Image>
                          <CustomText style={styles.buttonTextStyle}>
                            {APP_STORE}
                          </CustomText>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={[styles.subBottomContainer, styles[subBottomContainerWidth]]}
          >
            <View
              style={{
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 1,

                  borderColor: 'rgba(255,255,255,0.5)',
                  justifyContent: 'center'
                }}
              >
                <View
                  style={{
                    marginTop: responsiveHeight(6),
                    marginBottom: responsiveHeight(4)
                  }}
                >
                  <CustomText style={{ textAlign: 'center' }}>
                    <CustomText style={{ color: 'white', fontSize: 18 }}>
                      {TRAVEL_A_LOT}
                    </CustomText>
                    <CustomText
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 16
                      }}
                    >
                      {GET_THE_APP}
                    </CustomText>
                  </CustomText>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      marginTop: responsiveHeight(4),
                      justifyContent: 'center'
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 137.17,
                        height: 50,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        alignItems: 'center',
                        padding: 10,
                        marginRight: responsiveWidth(2),
                        borderRadius: 5
                      }}
                      // onPress={() =>
                      //   Linking.openURL(
                      //     'https://play.google.com/store/apps/details?id=icici.imobile.app'
                      //   )
                      // }
                      accessibilityRole='link'
                      href='https://play.google.com/store/apps/details?id=icici.imobile.app'
                      target='_blank'
                    >
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Image
                          style={{ height: 27.17, width: 25 }}
                          source={require('../assets/images/googlePlay.png')}
                        ></Image>
                        <CustomText style={styles.buttonTextStyle}>
                          {GOOGLE_PLAY}
                        </CustomText>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 121.16,
                        height: 50.84,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        alignItems: 'center',
                        padding: 10,
                        marginLeft: responsiveWidth(0.5),
                        borderRadius: 5
                      }}
                      // onPress={() =>
                      //   Linking.openURL(
                      //     'https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                      //   )
                      // }
                      accessibilityRole='link'
                      href='https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                      target='_blank'
                    >
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Image
                          style={{ height: 30, width: 25 }}
                          source={require('../assets/images/appleStore.png')}
                        ></Image>
                        <CustomText style={styles.buttonTextStyle}>
                          {APP_STORE}
                        </CustomText>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#182340'
          }}
        >
          <View
            style={{
              marginHorizontal: responsiveWidth(2),
              padding: 15
            }}
          >
            <View
              style={
                (styles.outerContainerStyle1, styles[outerContainerStyle1Width])
              }
            >
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1
                }}
              >
                <View
                  style={[styles.outerTextStyle1, styles[outerTextStyle1Width]]}
                >
                  <CustomText
                    accessibilityRole='link'
                    href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                    style={styles.textStyle1}
                    target='_blank'
                  >
                    {TERMS_AND_CONDITIONS}
                  </CustomText>

                  <CustomText
                    accessibilityRole='link'
                    href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                    style={styles.textStyle1}
                    target='_blank'
                  >
                    {DISCLAIMER}
                  </CustomText>

                  <CustomText
                    accessibilityRole='link'
                    href='http://www.icicibankusa.com/remittance_services/money2india/terms-and-conditions.page?id=terms-and-conditions'
                    style={styles.textStyle1}
                    target='_blank'
                  >
                    {PRIVACY_POLICY}
                  </CustomText>

                  <CustomText
                    style={[
                      styles.ICICIBankTextStyle,
                      styles[ICICIBankTextStyleWidth]
                    ]}
                    onPress={() => props.navigation.navigate('HomePage')}
                  >
                    {ICICI_BANK}
                  </CustomText>
                </View>
              </View>
              <CustomText
                style={[
                  styles.ICICIBankTextStyle1,
                  styles[ICICIBankTextStyle1Width]
                ]}
                onPress={() => props.navigation.navigate('HomePage')}
              >
                {ICICI_BANK}
              </CustomText>
              <View>
                <View
                  style={[
                    styles.buttonOuterStyle1,
                    styles[buttonOuterStyle1Width]
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.faceBookContainerBtnStyle,
                        styles[faceBookContainerBtnStyleWidth]
                      ]}
                      // onPress={() =>
                      //   Linking.openURL(
                      //     'https://www.facebook.com/ICICIBankNriServices/'
                      //   )
                      // }
                      accessibilityRole='link'
                      href='https://www.facebook.com/ICICIBankNriServices/'
                      target='_blank'
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require('../assets/images/facebook.png')}
                      ></Image>
                      <View>
                        <CustomText
                          style={[
                            styles.buttonTextStyle1,
                            styles[buttonTextStyle1Width]
                          ]}
                        >
                          {FOLLOW_US}
                        </CustomText>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderLeftWidth: 1,
                      borderColor: 'white'
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        styles.playStoreContainerBtnStyle,
                        styles[playStoreContainerBtnStyleWidth]
                      ]}
                      // onPress={() =>
                      //   Linking.openURL(
                      //     'https://play.google.com/store/apps/details?id=icici.imobile.app'
                      //   )
                      // }
                      accessibilityRole='link'
                      href='https://play.google.com/store/apps/details?id=icici.imobile.app'
                      target='_blank'
                    >
                      <Image
                        style={{ height: 20, width: 19 }}
                        source={require('../assets/images/googlePlay.png')}
                      ></Image>
                      <View>
                        <CustomText
                          style={[
                            styles.buttonTextStyle1,
                            styles[buttonTextStyle1Width]
                          ]}
                        >
                          {GOOGLE_PLAY}
                        </CustomText>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.appStoreBtnContainerStyle,
                      styles[appStoreBtncontainerStyleWidth]
                    ]}
                    // onPress={() =>
                    //   Linking.openURL(
                    //     'https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                    //   )
                    // }
                    accessibilityRole='link'
                    href='https://apps.apple.com/in/app/icici-bank-money2india/id502490650'
                    target='_blank'
                  >
                    <Image
                      style={{ height: 20, width: 16 }}
                      source={require('../assets/images/appleStore.png')}
                    ></Image>
                    <CustomText
                      style={[
                        styles.buttonTextStyle1,
                        styles[buttonTextStyle1Width]
                      ]}
                    >
                      {APP_STORE}
                    </CustomText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default hocComponent(CustomFooter);
