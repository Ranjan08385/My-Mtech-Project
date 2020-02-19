import { StyleSheet, Platform } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight
} from '../customResponsiveDimension';

export default StyleSheet.create({
  landing_SwiperOuterView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '2%',
    marginBottom: '2%',
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOpacity: 0.5
  },
  signUp_SwiperOuterView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '2%',
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOpacity: 0.5
  },
  landing_SwiperInnerViewStyle: {
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingTop: '10%',
    paddingBottom: '25%',
    height: 400
  },

  signUp_SwiperInnerViewStyle: {
    height: 330
  },
  landing_Image: {
    height: responsiveHeight(14),
    width: responsiveWidth(6)
  },
  landing_Image_LDPI: {
    height: responsiveHeight(20),
    width: responsiveWidth(25)
  },
  landing_Image_MDPI: {
    height: responsiveHeight(20),
    width: responsiveWidth(25)
  },
  landing_Image_HDPI: {
    height: responsiveHeight(20),
    width: responsiveWidth(25)
  },
  landing_Image_XHDPI: {
    height: responsiveHeight(20),
    width: responsiveWidth(25)
  },
  signUp_Image: {
    height: responsiveHeight(20),
    width: responsiveWidth(26.5)
  },
  signUp_Image_LDPI: {
    height: responsiveHeight(33),
    width: responsiveWidth(81)
  },
  signUp_Image_HDPI: {
    height: responsiveHeight(33),
    width: responsiveWidth(81)
  },
  signUp_Image_MDPI: {
    height: responsiveHeight(33),
    width: responsiveWidth(81)
  },
  signUp_Image_XHDPI: {
    // height: responsiveHeight(25),
    // width: responsiveWidth(79)
    height: 195
    // width: 363
  },
  swiperImageView: {
    display: 'flex',
    flexDirection: 'row'
  },
  signUp_SwiperImageSec: {
    width: '100%',
    overflow: 'hidden',
    height: '100%'
  },
  landing_SwiperImageSec: {
    marginRight: '5%'
  },
  swiperDetailSec: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  sliderClientNameView: {
    width: '100%',
    marginBottom: '10%',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0%'
  },
  sliderClientNameView_LDPI: {
    marginLeft: '6%',
    justifyContent: 'flex-start',
    marginBottom: '6%'
  },
  sliderClientNameView_MDPI: {
    marginLeft: '6%',
    justifyContent: 'flex-start',
    marginBottom: '6%'
  },
  sliderClientNameView_HDPI: {
    marginLeft: '6%',
    justifyContent: 'flex-start',
    marginBottom: '6%'
  },
  sliderClientNameView_XHDPI: {
    marginLeft: '6%',
    justifyContent: 'flex-start',
    marginBottom: '6%'
  },
  // sliderClientNameView_XXHDPI: {
  //   marginLeft: '3%'
  // },
  sliderClientCountryView: {
    width: '100%',
    marginBottom: '10%',
    // justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0%'
  },
  sliderClientCountryView_LDPI: {
    marginLeft: '6%',
    marginBottom: '6%'
  },
  sliderClientCountryView_HDPI: {
    marginLeft: '6%',
    marginBottom: '6%'
  },
  sliderClientCountryView_MDPI: {
    marginLeft: '6%',
    marginBottom: '6%'
  },
  sliderClientCountryView_XHDPI: {
    marginLeft: '6%',
    marginBottom: '6%'
  },
  // sliderClientCountryView_XXHDPI: {
  //   marginLeft: '3%'
  // },
  sliderClientRateView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '10%'
  },
  sliderClientRateInnerView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // paddingLeft: '45%',
    // paddingRight: '45%',
    marginLeft: '1%'
  },
  sliderClientRateInnerView_LDPI: {
    paddingLeft: '5%',
    paddingRight: '5%'
    // marginLeft: '1%'
  },
  sliderClientRateInnerView_MDPI: {
    paddingLeft: '5%',
    paddingRight: '5%'
    // marginLeft: '1%'
  },
  sliderClientRateInnerView_HDPI: {
    paddingLeft: '5%',
    paddingRight: '5%'
    // marginLeft: '1%'
  },
  sliderClientRateInnerView_XHDPI: {
    paddingLeft: '15%',
    paddingRight: '15%'
    // marginLeft: '1%'
  },
  sliderClientRateInnerView_XXHDPI: {
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  sliderClientRateInnerView_XXXHDPI: {
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  sliderClientRateInnerViewRes_LDPI: {
    paddingLeft: '0%',
    paddingRight: '60%',
    marginBottom: '6%'
  },
  sliderClientRateInnerViewRes_MDPI: {
    paddingLeft: '0%',
    paddingRight: '60%',
    marginBottom: '6%'
  },
  sliderClientRateInnerViewRes_HDPI: {
    paddingLeft: '0%',
    paddingRight: '60%',
    marginBottom: '6%'
  },
  sliderClientRateInnerViewRes_XHDPI: {
    paddingLeft: '0%',
    paddingRight: '60%',
    marginBottom: '6%'
  },
  // sliderClientRateInnerView_XXHDPI: {
  //   paddingLeft: '35%',
  //   paddingRight: '35%',
  //   marginLeft: '1%'
  // },
  sliderClientRateSingleView: {
    width: '20%'
  },
  sliderLandingClientCommentView: {
    justifyContent: 'center',
    paddingTop: '5%',
    borderTopWidth: 1,
    borderTopColor: '#f7f6f6',
    marginTop: '10%'
  },
  sliderSignUpClientCommentView: {
    justifyContent: 'center',
    paddingTop: '5%'
  },
  sliderClientCommentViewText: {
    paddingTop: '2%',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'normal',
    position: 'relative',
    color: '#4a4a4a',
    textAlign: 'center'
  },

  nextbtn: {
    transform: [{ rotate: '180deg' }]
  }
});
