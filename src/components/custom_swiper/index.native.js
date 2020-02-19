import React, { Component } from 'react';
import Swiper from './customSwiper';
//import Style from '../../styles/landingPage';
import CustomSwiperStyle from '../custom_swiper/customSwiperStyles';
import CustomStyle from '../../styles/customStyle';
import { View, Image } from 'react-native';
import CustomText from '../../components/customText';
import { hocComponentFetcherWithLoader } from '../../components';
import {
  responsiveHeight,
  responsiveWidth
} from '../../components/customResponsiveDimension';

class SwiperSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderProps: this.props.sliderProps
    };
  }

  render() {
    const sliderClientRateInnerView_Width = `sliderClientRateInnerViewRes_${this.props.measure}`;
    const sliderClientNameView_Width = `sliderClientNameView_${this.props.measure}`;
    const sliderClientCountryView_Width = `sliderClientCountryView_${this.props.measure}`;
    const isLandingPage = this.props.isLandingPage;
    const swiperInnerViewStyle = `${this.props.styleClass}_SwiperInnerViewStyle`;
    const imageStyle = `${this.props.styleClass}_Image`;
    const imageStyle_Res = `${this.props.styleClass}_Image_${this.props.measure}`;
    const swiperImageSec = `${this.props.styleClass}_SwiperImageSec`;
    const swiperOuterView = `${this.props.styleClass}_SwiperOuterView`;

    return (
      <Swiper
        showsButtons={true}
        autoplay={false}
        style={{ height: responsiveHeight(80), backgroundColor: '#fcfcfc' }}
      >
        {this.state.sliderProps.map((item, key) => {
          // const imgName = item.imageName;
          //const clientImg = require('../../resources/images/' + imgName);

          return (
            <View key={key} style={CustomSwiperStyle[swiperOuterView]}>
              <View style={CustomSwiperStyle[swiperInnerViewStyle]}>
                <View style={CustomSwiperStyle.swiperImageView}>
                  <View style={CustomSwiperStyle[swiperImageSec]}>
                    <Image
                      source={item.imageName}
                      style={[
                        CustomSwiperStyle[imageStyle],
                        CustomSwiperStyle[imageStyle_Res]
                      ]}
                      resizeMode={'contain'}
                    ></Image>
                  </View>
                  {isLandingPage && (
                    <View style={CustomSwiperStyle.swiperDetailSec}>
                      <View
                        style={[
                          CustomSwiperStyle.sliderClientNameView,
                          CustomSwiperStyle[sliderClientNameView_Width]
                        ]}
                      >
                        <CustomText style={CustomStyle.h3Style}>
                          {item.name}
                        </CustomText>
                      </View>
                      <View
                        style={[
                          CustomSwiperStyle.sliderClientCountryView,
                          CustomSwiperStyle[sliderClientCountryView_Width]
                        ]}
                      >
                        <CustomText style={CustomStyle.grayTextStyle}>
                          {item.country}
                        </CustomText>
                      </View>
                      <View style={CustomSwiperStyle.sliderClientRateView}>
                        <View
                          style={[
                            CustomSwiperStyle.sliderClientRateInnerView,
                            CustomSwiperStyle[sliderClientRateInnerView_Width]
                          ]}
                        >
                          {item.ratings.map(ratingCnt => {
                            return (
                              <View
                                key={ratingCnt}
                                style={
                                  CustomSwiperStyle.sliderClientRateSingleView
                                }
                              >
                                <Image
                                  source={require('../../resources/images/rate-star.png')}
                                  style={CustomStyle.rateImage}
                                  resizeMode={'contain'}
                                ></Image>
                              </View>
                            );
                          })}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
                <View style={CustomSwiperStyle.sliderClientCommentView}>
                  <CustomText
                    style={CustomSwiperStyle.sliderClientCommentViewText}
                  >
                    {item.comment}
                  </CustomText>
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    );
  }
}
export default hocComponentFetcherWithLoader()(SwiperSection);
