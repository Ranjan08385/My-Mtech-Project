/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Style from '../styles/customButton';
import LinearGradient from './gradient';
import Hoverable from './hover/hoverable';

export default function CustomLinearDarkBlueButton(props) {
  const {
    style,
    containerStyle,
    hoverStyle,
    hoverColor,
    colors,
    children,
    onPress,
    start,
    end,
  } = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Hoverable>
          {isHovered => (
            <LinearGradient
              start={{ x: 0, y: 0 } || start}
              end={{ x: 1, y: 0 } || end}
              colors={
                isHovered
                  ? hoverColor || ['#20438Ce6', '#18367Be6', '#132C6Ee6']
                  : colors || ['#20438C', '#18367B', '#132C6E']
              }
              style={[Style.commonLinearBlueGradientButtonContainerStyle, containerStyle]}
            >
              {children}
            </LinearGradient>
          )}
        </Hoverable>
      </TouchableOpacity>
    </View>
  );
}
