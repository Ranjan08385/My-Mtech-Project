/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from './customIcon';
import Text from './customText';

export default class UploadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      iconColor,
      iconName,
      iconSize,
      containerStyle,
      textStyle,
      onCancel,
      touchableStyle,
      numberOfLines,
      children,
      text,
      pointerEvents,
    } = this.props;
    const color = iconColor || '#e77817';
    const name = iconName || 'cancel';
    const size = iconSize || 15;

    const defaultContainerStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: 'rgba(65, 117, 5, 0.15)',
      borderRadius: 30,
    };

    let defaultTextStyle = {
      color: '#e77817',
      marginHorizontal: 20,
      marginTop: 3,
      fontSize: 16,
    };
    defaultTextStyle = [defaultTextStyle, textStyle];

    let defaultTouchableStyle = {
      marginLeft: 'auto',
      marginRight: 20,
      alignSelf: 'center',
    };

    defaultTouchableStyle = [defaultTouchableStyle, touchableStyle];

    return (
      <View style={[defaultContainerStyle, containerStyle]}>
        {children || (
          <Text numberOfLines={numberOfLines || 1} style={defaultTextStyle}>
            {text}
          </Text>
        )}
        <TouchableOpacity onPress={onCancel} style={defaultTouchableStyle}>
          <Icon color={color} name={name} size={size} />
        </TouchableOpacity>
      </View>
    );
  }
}
