/* eslint-disable react/prop-types */
import TagInput from 'react-native-tag-input';

import React from 'react';

function CustomTagInput(props) {
  const {
    value,
    text,
    onChange,
    onChangeInput,
    labelExtractor,
    tagColor,
    tagTextColor,
    tagContainerStyle,
    tagTextStyle,
    inputProps,
    scrollViewProps,
    inputDefaultWidth,
    onHeightChange,
    onKeyPress,
  } = props;

  return (
    <TagInput
      value={value}
      labelExtractor={labelExtractor}
      onChange={onChange}
      text={text}
      tagColor={tagColor}
      tagContainerStyle={tagContainerStyle}
      tagTextColor={tagTextColor}
      tagTextStyle={tagTextStyle}
      onChangeText={onChangeInput}
      inputProps={inputProps}
      maxHeight={100}
      scrollViewProps={scrollViewProps}
      inputDefaultWidth={inputDefaultWidth}
      onHeightChange={onHeightChange}
      onKeyPress={onKeyPress}
    />
  );
}

export default CustomTagInput;
