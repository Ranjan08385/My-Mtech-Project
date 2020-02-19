/* eslint-disable react/prop-types */
import React from 'react';
import Style from '../styles/customButton';
import CustomButton from './customButton';

export default function CustomOrangeButton(props) {
  const { style, containerStyle, ...others } = props;
  return (
    <CustomButton
      style={[Style.commonButtonTextStyle, Style.orangeButtonTextStyle, style]}
      containerStyle={[
        Style.commonButtonContainerStyle,
        Style.orangeButtonContainerStyle,
        containerStyle,
      ]}
      hoverStyle={{ backgroundColor: '#e77817CC' }}
      {...others}
    />
  );
}
