import React, { Fragment } from 'react';
import { Text, View, TextInput } from 'react-native';
import CustomText from './customText';

export default function CustomInput(props) {
  const hideOrShowError = error => {
    if (error !== '') {
      return (
        <CustomText
          style={{
            color: 'red',
            fontSize: 13,
            // marginLeft: 5
          }}
        >
          {error}
        </CustomText>
      );
    }
    return <View />;
  };

  return (
    <Fragment>
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        underlineColorAndroid={props.underlineColorAndroid}
        selectionColor={props.selectionColor}
        onChangeText={props.onChangeText}
        onPress={props.onPress}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
        accessibilityLabel="See an informative alert"
        defaultValue={props.defaultValue}
        className="input"
        editable={props.editable}
        maxLength={props.maxLength}
      />
      {hideOrShowError(props.error)}
    </Fragment>
  );
}
