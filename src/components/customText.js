import React from 'react';
import { Text, Platform } from 'react-native';

export default function CustomText(props) {
  const { style, ...others } = props;
  return (
    <Text
      {...others}
      style={
        Platform.OS === 'web'
          ? [{ fontFamily: 'Arial', outlineColor: 'transparent' }, style]
          : [{ fontFamily: 'Arial' }, style]
      }

      // fontFamily: 'Arial, Helvetica, sans-serif'
    ></Text>
  );
}
