/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { View } from 'react-native';
import TextInput from './customFloatingInput';
import Customtext from './customText';

export default function CustomTextField(props) {
  const hideOrShowError = error => {
    if (error !== '') {
      return (
        <Customtext
          style={{
            color: 'red',
            fontSize: 13,
          }}
        >
          {error}
        </Customtext>
      );
    }
    return <View />;
  };

  return (
    <Fragment>
      <TextInput
        myRef={props.myRef}
        iconImg={props.iconImg}
        iconStyle={props.iconStyle}
        secureTextEntry={props.securetextentry}
        keyboardType={props.keyboardType}
        inputStyle={props.inputStyle}
        labelStyle={props.labelStyle}
        placeholderTextColor={props.placeholderTextColor}
        underlineColorAndroid={props.underlineColorAndroid}
        selectionColor={props.selectionColor}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        onPress={props.onPress}
        onBlur={props.onBlur}
        value={props.value}
        style={props.style}
        maxLength={props.maxLength}
        onSubmitEditing={props.onSubmitEditing}
        accessibilityLabel="See an informative alert"
        editable={props.editable}
        autoFocus={props.autoFocus}
        returnKeyType={props.returnKeyType}
        blurOnSubmit={props.blurOnSubmit}
        onKeyPress={props.onKeyPress}
        onSelectionChange={props.onSelectionChange}
        onFocus={props.onFocus}
        animatedTextColor={props.animatedTextColor}
      >
        {props.placeholder}
      </TextInput>
      {hideOrShowError(props.error)}
    </Fragment>
  );
}
