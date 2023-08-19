// DatePickerInput.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';
const DatePickerInput = ({ selectedDate, onDateSelect,typeOfDate }) => {
  return (
    <div className="flexChild">
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={date => {onDateSelect(date);console.log(date.toISOString().substring(0,10))}} // Call the handler prop to update the parent's state
        dateFormat="MMMM d, yyyy"
        // Set the default value to today's date
        placeholderText={typeOfDate}
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
