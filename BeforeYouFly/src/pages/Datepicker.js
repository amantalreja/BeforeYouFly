// DatePickerInput.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';
const DatePickerInput = ({ selectedDate, onDateSelect }) => {
  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={date => onDateSelect(date)} // Call the handler prop to update the parent's state
        dateFormat="MMMM d, yyyy"
        // Set the default value to today's date
        placeholderText="Select a date"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        todayButton="Today"
      />
    </div>
  );
};

export default DatePickerInput;
