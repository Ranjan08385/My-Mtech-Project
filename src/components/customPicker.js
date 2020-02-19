import React from 'react';
import { Picker, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

CustomPicker.propTypes = {
  items: PropTypes.array.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  booleanProp: PropTypes.bool,
  numberProp: PropTypes.number,
  stringProp: PropTypes.string,
  functionProp: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

function CustomPicker(props) {
  const items = props.items.map((item, index) => {
    return <Picker.Item key={item.key} value={JSON.stringify(item)} label={item.value} />;
  });
  return (
    <Picker
      style={props.style}
      selectedValue={props.selectedValue}
      onValueChange={(itemValue, itemIndex) => props.onValueChange(itemValue, itemIndex)}
    >
      {items}
    </Picker>
  );
}

CustomPicker.defultProps = {
  items: ['Selected'],
  selectedValue: 'selected',
};

export default CustomPicker;
