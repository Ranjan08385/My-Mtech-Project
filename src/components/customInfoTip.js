import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Menu, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import CustomText from './customText';

const { Popover } = renderers;
const InfoTip = ({ preferredPlacement, OptionsField, children, styleInfoTip }) => {
  return (
    <Menu
      renderer={Popover}
      rendererProps={{
        preferredPlacement: preferredPlacement || 'top',
        anchorStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <MenuTrigger>
        {children || (
          <Image
            source={require('../assets/images/info.png')}
            style={{
              width: 20,
              height: 20,
            }}
          ></Image>
        )}
      </MenuTrigger>
      <MenuOptions
        style={styleInfoTip ? [styleInfoTip] : [styles.menusOptions]}
        optionsContainerStyle={styles.menuOptions}
      >
        {typeof OptionsField === 'string' ? (
          <CustomText style={styles.contentText}>{OptionsField}</CustomText>
        ) : (
          OptionsField
        )}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuOptions: {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    borderWidth: 0,
    borderRadius: 0,
  },
  menusOptions: {
    maxWidth: 200,
    minHeight: 40,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  contentText: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17,
  },
});

export default InfoTip;
