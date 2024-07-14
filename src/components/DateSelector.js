import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ selectedDate, onChangeDate }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onChangeDate(date)}
      className="form-control"
      dateFormat="yyyy-MM-dd"
    />
  );
};

export default DateSelector;
