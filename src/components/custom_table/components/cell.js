/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import CustomText from '../../customText';

const styles = StyleSheet.create({
  cell: { justifyContent: 'center' },
  text: { backgroundColor: 'transparent' },
});

export default function Cell(props) {
  const { data, width, height, flex, style, textStyle, borderStyle } = props;

  const textDom = React.isValidElement(data) ? (
    data
  ) : (
    <CustomText style={[textStyle, styles.text]} {...props}>
      {data}
    </CustomText>
  );
  const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        {
          borderTopWidth,
          borderRightWidth,
          borderColor,
        },
        styles.cell,
        width && { width },
        height && { height },
        flex && { flex },
        !width && !flex && !height && !style && { flex: 1 },
        style,
      ]}
    >
      {textDom}
    </View>
  );
}

Cell.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  borderStyle: ViewPropTypes.style,
};
