/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { View } from 'react-native';

dateTimePicker.propTypes = {
  value: PropTypes.object.isRequired,
  maximumDate: PropTypes.object,
  minimumDate: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

dateTimePicker.defaultProps = {
  style: { position: 'absolute' },
};

function dateTimePicker(props) {
  return (
    <View style={props.style}>
      <DatePicker
        onChange={props.onChange}
        maxDate={props.maximumDate}
        minDate={props.minimumDate}
        onClickOutside={props.onClickOutside}
        selected={props.value}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        inline
      ></DatePicker>
    </View>
  );
}

export default dateTimePicker;
