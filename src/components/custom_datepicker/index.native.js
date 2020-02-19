/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './datepicker';

function dateTimePicker(props) {
  const { onChange, value, minimumDate, maximumDate } = props;
  return (
    <DatePicker
      onDateChange={onChange}
      maxDate={maximumDate}
      minDate={minimumDate}
      date={value}
    ></DatePicker>
  );
}

dateTimePicker.propTypes = {
  value: PropTypes.object.isRequired,
  maximumDate: PropTypes.object,
  minimumDate: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

// dateTimePicker.defaultProps = {
//   maximumDate: new Date(),
//   minimumDate: new Date(),
// };

export default dateTimePicker;
