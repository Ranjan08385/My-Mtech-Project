/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './customText';

const s = StyleSheet.create({
  containerStyle: {},
  childContainerStyle: { backgroundColor: '#fff' },

  touchableStyle: {},
  mainTextStyle: {
    justifyContent: 'space-between',
  },
  childTouchableStyle: {},
  childStyle: {},
});
class ExpandableView extends Component {
  state = {
    childVisible: false,
  };

  onPressChild = (item, index) => {
    const { onClickChild } = this.props;
    if (onClickChild) {
      onClickChild(item, index);
    } else {
      this.setState({
        childVisible: false,
      });
    }
  };

  onPressMain = () => {
    const { onClickMain } = this.props;
    const { childVisible } = this.state;
    if (onClickMain) {
      onClickMain();
    } else {
      this.setState({
        childVisible: !childVisible,
      });
    }
  };

  render() {
    const {
      containerstyle,
      mainTextStyle,
      touchableStyle,
      childTouchableStyle,
      title,
      item,
      childSelectedStyle,
      childUnSelectedStyle,
      children,
      isChildVisible,
      childContainerStyle,
    } = this.props;

    const { childVisible } = this.state;

    const items = item
      ? item.map((data, index) => {
          let style = data.isSelected
            ? [s.childStyle, childSelectedStyle]
            : [s.childStyle, childUnSelectedStyle];
          style = data.isSelected !== undefined ? style : null;
          return (
            <TouchableOpacity
              style={[s.childTouchableStyle, childTouchableStyle]}
              onPress={() => this.onPressChild(data, index)}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              >
                <Image
                  resizeMode="center"
                  style={{
                    width: 25,
                    height: 25,
                    margin: 10,
                  }}
                  source={data.image}
                />
                <CustomText style={style} key={data.key}>
                  {data.label}
                </CustomText>
              </View>
            </TouchableOpacity>
          );
        })
      : null;

    const view = childVisible === true ? items : null;

    const isChild = isChildVisible === true ? items : null;

    const isShow = isChildVisible ? isChild : view;

    return (
      <View style={[s.containerStyle, containerstyle]}>
        <TouchableOpacity onPress={this.onPressMain} style={[s.touchableStyle, touchableStyle]}>
          {children || <CustomText style={[s.mainTextStyle, mainTextStyle]}>{title}</CustomText>}
        </TouchableOpacity>

        <View style={[s.childContainerStyle, childContainerStyle]}>{isShow}</View>
      </View>
    );
  }
}

ExpandableView.defaultProps = {};

export default ExpandableView;
