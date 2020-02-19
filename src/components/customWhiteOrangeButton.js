/* eslint-disable react/prop-types */
import React from 'react';
import CustomButton from './customButton';
import Style from '../styles/customButton';

export default function CustomWhiteOrangeButton(props) {
  const { style, containerStyle, ...others } = props;
  return (
    <CustomButton
      style={[Style.commonButtonTextStyle, Style.whiteOrangeButtonTextStyle, style]}
      containerStyle={[
        containerStyle,
        Style.commonButtonContainerStyle,
        Style.whiteOrangeContainerStyle,
      ]}
      hoverStyle={{ backgroundColor: '#e7781733' }}
      {...others}
    />
  );
}
