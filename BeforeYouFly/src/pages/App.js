// Home.js

import React, { useState } from 'react';
import "./App.css"; // Import the custom CSS
import DatePickerInput from './Datepicker';
const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateSelect = date => {
    setSelectedDate(date);
  };
  return (
    <div className="home-container">
      <h1 className="home-title">Flight Delay Predictor</h1>
      <div>
        <h1>React Date Picker Example</h1>
        <DatePickerInput selectedDate={selectedDate} onDateSelect={handleDateSelect} />
        {selectedDate && <h1>Selected Date: {selectedDate.toDateString()}</h1>}
      </div>
    </div>

  );
};

export default Home;
