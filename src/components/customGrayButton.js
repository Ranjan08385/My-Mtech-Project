/* eslint-disable react/prop-types */
import React from 'react';
import CustomButton from './customButton';
import Style from '../styles/customButton';

export default function CustomGrayButton(props) {
  const { style, minHeight, containerStyle, hoverStyle, ...others } = props;
  return (
    <CustomButton
      style={[Style.commonButtonTextStyle, Style.grayButtonTextStyle, style]}
      containerStyle={[
        containerStyle,
        Style.commonButtonContainerStyle,
        Style.grayButtonContainerStyle,
        { minHeight: minHeight === undefined ? 50 : minHeight }
      ]}
      hoverStyle={hoverStyle || { backgroundColor: '#e4e6e8cc' }}
      {...others}
    />
  );
}
