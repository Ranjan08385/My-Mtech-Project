/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import Style from '../styles/customButton';
import CustomButton from './customButton';
import LinearGradient from './gradient';
import Hoverable from './hover/hoverable';

export default function CustomLinearDarkBlueButton(props) {
  const { style, containerStyle, hoverStyle, hoverColor, colors, minHeight, ...others } = props;
  return (
    <View>
      <Hoverable>
        {isHovered => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={
              isHovered
                ? hoverColor || ['#20438Ce6', '#18367Be6', '#132C6Ee6']
                : colors || ['#20438C', '#18367B', '#132C6E']
            }
            style={[Style.commonLinearBlueGradientButtonContainerStyle, containerStyle]}
          >
            <CustomButton
              style={[Style.commonButtonTextStyle, Style.darkBlueButtonTextStyle, style]}
              containerStyle={[
                containerStyle,
                Style.commonLinearButtonContainerStyle,
                { minHeight: minHeight === undefined ? 50 : minHeight },
                // Style.commonButtonContainerStyle,
                //   Style.darkBlueButtonContainerStyle,
              ]}
              hoverStyle={{ backgroundColor: 'transparent' }}
              {...others}
            />
          </LinearGradient>
        )}
      </Hoverable>
    </View>
  );
}
