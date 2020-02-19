/* eslint-disable react/prop-types */
import React from 'react';
import CustomButton from './customButton';
import Style from '../styles/customButton';

export default function CustomWhiteButton(props) {
  // <Button
  //       containerStyle={{ width: '100%' }}
  //       onPress={() => this.props.navigation.navigate('Registration', {})}
  //     >
  //       Get Started huwe fniuhwi
  //     </Button>
  const { style, containerStyle, ...others } = props;
  return (
    <CustomButton
      style={[Style.commonButtonTextStyle, Style.whiteButtonTextStyle, style]}
      containerStyle={[
        Style.commonButtonContainerStyle,
        Style.whiteButtonContainerStyle,
        containerStyle,
      ]}
      {...others}
    />
  );
}
