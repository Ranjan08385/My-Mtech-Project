import React, { Component } from 'react';
import Swiper from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { View, Image, Dimensions } from 'react-native';
import CustomText from '../customText';
import { hocComponentFetcherWithLoader } from '..';
import CustomSwiperStyle from './customSwiperStyles';
import CustomStyle from '../../styles/customStyle';
import Icon from '../customIcon';
import { responsiveWidth } from '../customResponsiveDimension';
// export default Swiper;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      {className === 'slick-arrow slick-next slick-disabled' ? (
        <View></View>
      ) : (
        <View style={CustomSwiperStyle.nextbtn}>
          <Icon color='#d4d4d4' size={25} name='arrow'></Icon>
        </View>
      )}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      {className === 'slick-arrow slick-prev slick-disabled' ? (
        <View></View>
      ) : (
        <View>
          <Icon color='#d4d4d4' size={25} name='arrow'></Icon>
        </View>
      )}
    </div>
  );
}
class SwiperSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderProps: this.props.sliderProps
    };
  }

  render() {
    const { measure, styleClass, isLandingPage } = this.props;
    const sliderClientRateInnerViewWidth = `sliderClientRateInnerView_${measure}`;
    const sliderClientNameViewWidth = `sliderClientNameView_${measure}`;
    const sliderClientCountryViewWidth = `sliderClientCountryView_${measure}`;
    const swiperInnerViewStyle = `${styleClass}_SwiperInnerViewStyle`;
    const imageStyle = `${styleClass}_Image`;
    const imageStyleRes = `${styleClass}_Image_${measure}`;
    const swiperImageSec = `${styleClass}_SwiperImageSec`;
    const swiperOuterView = `${styleClass}_SwiperOuterView`;
    const divStyle = {
      paddingLeft: '8%',
      paddingRight: '8%',
      paddingBottom: '5%',
      paddingTop: '5%'
    };

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div style={divStyle}>
        <Swiper {...settings}>
          {this.state.sliderProps.map(
            (
              { name, imageName, country, comment, ratings, ratingImage },
              sliderCnt
            ) => {
              let rateImg = '';
              if (Dimensions.get('window').width > 968) {
                rateImg = require(`../../resources/images/star.png`);
              } else if (
                Dimensions.get('window').width > 767 &&
                Dimensions.get('window').width < 968
              ) {
                rateImg = require(`../../resources/images/star@2x.png`);
              } else {
                rateImg = require(`../../resources/images/star@3x.png`);
              }

              return (
                <div key={sliderCnt}>
                  <View style={CustomSwiperStyle[swiperOuterView]}>
                    <View style={CustomSwiperStyle[swiperInnerViewStyle]}>
                      <View style={CustomSwiperStyle.swiperImageView}>
                        <View style={CustomSwiperStyle[swiperImageSec]}>
                          <Image
                            source={imageName}
                            style={[
                              CustomSwiperStyle[imageStyle],
                              CustomSwiperStyle[imageStyleRes]
                            ]}
                            resizeMode='contain'
                          ></Image>
                        </View>
                        {isLandingPage && (
                          <View style={CustomSwiperStyle.swiperDetailSec}>
                            <View
                              style={[
                                CustomSwiperStyle.sliderClientNameView,
                                CustomSwiperStyle[sliderClientNameViewWidth]
                              ]}
                            >
                              <CustomText style={CustomStyle.h3Style}>
                                {name}
                              </CustomText>
                            </View>
                            <View
                              style={[
                                CustomSwiperStyle.sliderClientCountryView,
                                CustomSwiperStyle[sliderClientCountryViewWidth]
                              ]}
                            >
                              <CustomText style={CustomStyle.grayTextStyle}>
                                {country}
                              </CustomText>
                            </View>
                            <View
                              style={CustomSwiperStyle.sliderClientRateView}
                            >
                              <View
                                style={[
                                  CustomSwiperStyle.sliderClientRateInnerView,
                                  CustomSwiperStyle[
                                    sliderClientRateInnerViewWidth
                                  ]
                                ]}
                              >
                                {ratings.map(ratingCnt => {
                                  return (
                                    <View
                                      style={
                                        CustomSwiperStyle.sliderClientRateSingleView
                                      }
                                    >
                                      <Image
                                        source={rateImg}
                                        style={CustomStyle.rateImage}
                                        resizeMode='contain'
                                      ></Image>
                                    </View>
                                  );
                                })}
                              </View>
                            </View>
                          </View>
                        )}
                      </View>
                      <View
                        style={
                          isLandingPage
                            ? CustomSwiperStyle.sliderLandingClientCommentView
                            : CustomSwiperStyle.sliderSignUpClientCommentView
                        }
                      >
                        <CustomText
                          style={
                            isLandingPage
                              ? CustomSwiperStyle.sliderClientCommentViewText
                              : [
                                  CustomSwiperStyle.sliderClientCommentViewText,
                                  {
                                    marginHorizontal: responsiveWidth(2),
                                    fontWeight: '550'
                                  }
                                ]
                          }
                        >
                          {isLandingPage && (
                            <Icon
                              color='#4a4a4a'
                              size={20}
                              name='quotes'
                            ></Icon>
                          )}
                          {comment}
                        </CustomText>
                      </View>
                    </View>
                  </View>
                </div>
              );
            }
          )}
        </Swiper>
      </div>
    );
  }
}
export default SwiperSection;
