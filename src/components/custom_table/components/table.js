/* eslint-disable prettier/prettier */
/* eslint-disable react/require-default-props */
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const renderChildren = props => {
  return React.Children.map(props.children, child =>
    React.cloneElement(
      child,
      props.borderStyle && child.type.displayName !== 'ScrollView'
        ? { borderStyle: props.borderStyle }
        : {},
    ),
  );
};

export default function Table(props) {
  const { borderStyle, style } = props;
  const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderBottomWidth = borderLeftWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        style,
        {
          borderLeftWidth,
          borderBottomWidth,
          borderColor,
        },
      ]}
    >
      {renderChildren(props)}
    </View>
  );
}

Table.propTypes = {
  style: ViewPropTypes.style,
  borderStyle: ViewPropTypes.style,
};
