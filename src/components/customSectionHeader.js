import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native-web';
import CustomText from './customText';

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function CustomTextField(props) {
  return (
    <CustomText
      onPress={props.onPress}
      style={styles.titleText}
      color={props.color}
      accessibilityLabel="See an informative alert"
    >
      {props.text}
    </CustomText>
  );
}
