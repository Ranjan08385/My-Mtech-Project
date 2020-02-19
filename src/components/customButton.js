import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Hoverable from './hover/hoverable';
import Style from '../styles/customButton';
import CustomText from './customText';
import coalesceNonElementChildren from './coalesceNonElementChildren';

const systemButtonOpacity = 0.2;

CustomButton.propTypes = {
  ...TouchableOpacity.propTypes,
  accessibilityLabel: PropTypes.string,
  allowFontScaling: Text.propTypes.allowFontScaling,
  containerStyle: ViewPropTypes.style,
  disabledContainerStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  styleDisabled: Text.propTypes.style,
  childGroupStyle: ViewPropTypes.style,
};

CustomButton.defultProps = {};

const _renderGroupedChildren = props => {
  const { disabled } = props;
  const style = [
    Style.text,
    disabled ? Style.disabledText : null,
    props.style,
    disabled ? props.styleDisabled : null,
  ];
  const childGroupStyle = [Style.group, props.childGroupStyle];

  const children = coalesceNonElementChildren(props.children, (children, index) => {
    return (
      <CustomText key={index} style={style} allowFontScaling={props.allowFontScaling}>
        {children}
      </CustomText>
    );
  });

  switch (children.length) {
    case 0:
      return null;
    case 1:
      return children[0];
    default:
      return <View style={childGroupStyle}>{children}</View>;
  }
};

const _computeActiveOpacity = props => {
  if (props.disabled) {
    return 1;
  }
  return props.activeOpacity != null ? props.activeOpacity : systemButtonOpacity;
};

export default function CustomButton(props) {
  const touchableProps = {
    activeOpacity: _computeActiveOpacity(props),
  };
  const containerStyle = [
    props.containerStyle,
    props.disabled ? props.disabledContainerStyle : null,
  ];
  if (!props.disabled) {
    touchableProps.onPress = props.onPress;
    touchableProps.onPressIn = props.onPressIn;
    touchableProps.onPressOut = props.onPressOut;
    touchableProps.onLongPress = props.onLongPress;
    touchableProps.delayPressIn = props.delayPressIn;
    touchableProps.delayPressOut = props.delayPressOut;
    touchableProps.delayLongPress = props.delayLongPress;
  }
  return (
    <Hoverable onHoverIn={() => {}} onHoverOut={() => {}}>
      {isHovered => (
        <TouchableOpacity
          {...touchableProps}
          testID={props.testID}
          style={[
            containerStyle,
            isHovered && (props.hoverStyle || { backgroundColor: '#041f6533' }),
          ]}
          accessibilityLabel={props.accessibilityLabel}
          accessibilityRole="button"
        >
          {_renderGroupedChildren(props, isHovered)}
        </TouchableOpacity>
      )}
    </Hoverable>
  );
}
