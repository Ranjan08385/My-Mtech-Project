import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from './customResponsiveDimension';
import { ICICI_COPYRIGHT } from '../constants/displayConstants';
import { hocComponent } from '.';
import CustomText from './customText';

const styles = StyleSheet.create({
  textStyle: {
    color: '#CDCDCD',
    textAlign: 'center',
    padding: responsiveWidth(0.75),
    fontSize: 12,
  },
});

function CopyRightFooter(props) {
  return (
    <View
      style={{
        backgroundColor: 'black',
        display: Platform.OS === 'web' ? 'flex' : 'none',
      }}
    >
      <CustomText style={styles.textStyle}>{ICICI_COPYRIGHT}</CustomText>
    </View>
  );
}

export default hocComponent(CopyRightFooter);
