/* eslint-disable react/prop-types */
import TagsInput from 'react-tagsinput';
import React from 'react';
import 'react-tagsinput/react-tagsinput.css';
import './style.css';

function CustomTagInput(props) {
  const {
    value,
    text,
    onChange,
    onChangeInput,
    inputProps,
    onlyUnique,
    validationRegex,
    removeKeys,
  } = props;

  return (
    <TagsInput
      addKeys={[9, 13]}
      value={value}
      onChange={onChange}
      inputValue={text}
      // addKeys={addKeys}
      onChangeInput={onChangeInput}
      inputProps={inputProps}
      onlyUnique={onlyUnique}
      removeKeys={removeKeys}
      validationRegex={validationRegex}
    />
  );
}

export default CustomTagInput;
