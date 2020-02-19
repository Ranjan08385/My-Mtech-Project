/* eslint-disable prettier/prettier */
/* eslint-disable react/require-default-props */
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const renderChildren = props => {
  if (props.children !== undefined) {
    return React.Children.map(props.children, child =>
      React.cloneElement(
        child,
        props.borderStyle ? { borderStyle: props.borderStyle } : {}
      )
    );
  }
};

export default function TableWrapper(props) {
  const { style } = props;
  return <View style={style}>{renderChildren(props)}</View>;
}

TableWrapper.propTypes = {
  style: ViewPropTypes.style,
};
