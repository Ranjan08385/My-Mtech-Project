/* eslint-disable react/prop-types */
import React from 'react';
import CustomButton from './customButton';
import Style from '../styles/customButton';

export default function CustomDarkBlueButton(props) {
  const { style, containerStyle, hoverStyle, ...others } = props;
  return (
    <CustomButton
      style={[Style.commonButtonTextStyle, Style.darkBlueButtonTextStyle, style]}
      containerStyle={[
        containerStyle,
        Style.commonButtonContainerStyle,
        Style.darkBlueButtonContainerStyle,
      ]}
      hoverStyle={hoverStyle || { backgroundColor: '#182340CC' }}
      {...others}
    />
  );
}
