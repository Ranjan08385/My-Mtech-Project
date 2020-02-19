/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { responsiveWidth, responsiveHeight } from './customResponsiveDimension';
import { getResponsiveStyle } from '../utils/appUtils';
import Modal from './custom_popup';
import CustomStyle from '../styles/customStyle';
import CustomOrangeButton from './customOrangeButton';
import OrangeWhiteButton from './customWhiteOrangeButton';
import CustomText from './customText';
import Icon from './customIcon';
import { hocComponent } from './hoc/hocComponent';

const styles = StyleSheet.create({
  buttonGap: { width: responsiveWidth(3), padding: responsiveWidth(0) },
  buttonGap_LDPI: { padding: responsiveWidth(4), width: responsiveWidth(0) },
  buttonGap_MDPI: { padding: responsiveWidth(3), width: responsiveWidth(0) },
  buttonGap_HDPI: { padding: responsiveWidth(2), width: responsiveWidth(0) },
  buttonGap_XHDPI: { padding: responsiveWidth(2), width: responsiveWidth(0) },
  containerHeaderOne: {
    flex: 1,
    paddingTop: responsiveWidth(1),
    paddingBottom: responsiveWidth(1),
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  containerHeaderOne_MDPI: {
    paddingTop: responsiveWidth(3),
    paddingBottom: responsiveWidth(3),
  },
  containerHeaderOne_LDPI: {
    paddingTop: responsiveWidth(3),
    paddingBottom: responsiveWidth(3),
  },
  closeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: responsiveHeight(8),
    color: '#DCDCDC',
  },
  closeContainer_LDPI: {
    flexDirection: 'column',
  },
  closeContainer_MDPI: {
    flexDirection: 'column',
  },
  closeContainer_HDPI: {
    flexDirection: 'column',
  },
  closeContainer_XHDPI: {
    flexDirection: 'column',
  },
  confirmButton: { width: '100%' },

  cancelButton: { width: '100%' },

  styleHeaderFirstDetail: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: '#DCDCDC',
  },
  textHeaderFirst: {
    fontSize: 20,
    color: '#4a4a4a',
    fontWeight: 'bold',
  },
  styleHeaderFirst: {
    flexDirection: 'column',
    color: '#4a4a4a',
    borderBottomColor: '#DCDCDC',
  },
  outerContainer: {
    width: responsiveWidth(35),
    flex: 1,
    marginLeft: 0,
    alignSelf: 'center',
    borderRadius: 6,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 12,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  outerContainer_XXXHDPI: {
    width: responsiveWidth(46),
  },
  outerContainer_XXHDPI: {
    width: responsiveWidth(50),
  },
  outerContainer_XHDPI: {
    width: responsiveWidth(80),
  },
  outerContainer_HDPI: {
    width: responsiveWidth(80),
  },
  outerContainer_MDPI: {
    width: responsiveWidth(85),
  },
  outerContainer_LDPI: {
    width: responsiveWidth(90),
  },
});

function RejectPopUp(props) {
  const {
    visible,
    onDeleteClose,
    onDeleteConfirm,
    measure,
    message,
    heading,
  } = props;
  const styleWidth = measure;

  return (
    <Modal
      isVisible={visible}
      style={[
        styles.outerContainer,
        styles[getResponsiveStyle('outerContainer', styleWidth)],
      ]}
    >
      <View
        style={[
          styles.containerHeaderOne,
          styles[getResponsiveStyle('containerHeaderOne', styleWidth)],
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 18,
            alignItems: 'center',
          }}
        >
          <View style={styles.styleHeaderFirstDetail}>
            <CustomText style={CustomStyle.h4Style}>{heading}</CustomText>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              style={[styles.styleHeaderFirst, { paddingLeft: '10%' }]}
              onPress={onDeleteClose}
            >
              <Icon name={'cancel'} size={10} color='#9b9b9b' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 18 }}>
        <View
          style={{
            marginTop: responsiveHeight(2),
          }}
        >
          <View style={{ marginTop: responsiveHeight(4) }}>
            <CustomText style={CustomStyle.textStyle}>{message}</CustomText>
          </View>

          <View
            style={[
              styles.closeContainer,
              styles[getResponsiveStyle('closeContainer', styleWidth)],
            ]}
          >
            <View style={{ flex: 1 }}>
              <OrangeWhiteButton
                containerStyle={[styles.cancelButton]}
                onPress={onDeleteClose}
              >
                Cancel
              </OrangeWhiteButton>
            </View>
            <View
              style={[
                styles.buttonGap,
                styles[getResponsiveStyle('buttonGap', styleWidth)],
              ]}
            ></View>
            <View style={{ flex: 1 }}>
              <CustomOrangeButton
                containerStyle={[styles.confirmButton]}
                onPress={onDeleteConfirm}
              >
                Confirm
              </CustomOrangeButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default hocComponent(RejectPopUp);
