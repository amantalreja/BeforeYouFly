// Home.js

import React, { useState } from 'react';
import "./App.css"; // Import the custom CSS
import DatePickerInput from './Components/Datepicker';
const Home = () => {
  const [DepartureDate, setDepartureDate] = useState(null);
  const [ArrivalDate, setArrivalDate] = useState(null);
  const [DepartureAirport, setDepartureAirport] = useState('');
  const [ArrivalAirport, setArrivalAirport] = useState('');
  const [DepartureTime, setdepartureTime] = useState('');
  const [ArrivalTime, setArrivalTime] = useState('');

  // Base URL for the API
const baseUrl = "https://test.api.amadeus.com/v1/travel/predictions/flight-delay";

// Parameters for the API request
const originLocationCode = "NCE";
const destinationLocationCode = "IST";
const departureDate = "2020-08-01";
const departureTime = "18:20:00";
const arrivalDate = "2020-08-01";
const arrivalTime = "22:15:00";
const aircraftCode = "321";
const carrierCode = "TK";
const flightNumber = "1816";
const duration = "PT31H10M";

// Construct the complete URL with parameters
const url = `${baseUrl}?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&departureTime=${departureTime}&arrivalDate=${arrivalDate}&arrivalTime=${arrivalTime}&aircraftCode=${aircraftCode}&carrierCode=${carrierCode}&flightNumber=${flightNumber}&duration=${duration}`;

// Headers for the API request
const headers = {
  "Authorization": "Bearer X7XKxPAXcJwiLPWlERrwy3xeG5kV"
};

// Make the API request using fetch
const grabData=()=>{
  fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

  return (
    <div className="home-container">
      <h1 className="home-title">Flight Delay Predictor</h1>
      <div>
        <h1>React Date Picker Example</h1>
        <div class="flexParent">
          <DatePickerInput className="flexChild" selectedDate={DepartureDate} onDateSelect={date => setDepartureDate(date)} />
          <DatePickerInput className="flexChild" selectedDate={ArrivalDate} onDateSelect={date => setArrivalDate(date)} />
          <div className="flexChild" >
            <h2>Departure Airport Code</h2>
            <input 
              type="text"
              placeholder="Departure airport code"
              value={DepartureAirport}
              onChange={(e) => { setDepartureAirport(e.target.value); console.log(DepartureAirport) }}
            />
            <h5>Ex: For Washington Dulles its IAD</h5>
          </div>
          <div className="flexChild">
            <h2>Arrival Airport Code</h2>
            <input 
              type="text"
              placeholder="Arrival airport code"
              value={ArrivalAirport}
              onChange={(e) => { setArrivalAirport(e.target.value); console.log(ArrivalAirport) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>departureTime</h2>
            <input 
              type="text"
              placeholder="departureTime"
              value={departureTime}
              onChange={(e) => { setdepartureTime(e.target.value); console.log(departureTime) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>departureTime</h2>
            <input 
              type="text"
              placeholder="departureTime"
              value={departureTime}
              onChange={(e) => { setdepartureTime(e.target.value); console.log(departureTime) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          
        </div>
        {DepartureDate && <h1>Selected Date: {DepartureDate.toDateString()}</h1>}
      </div>
    </div>

  );
};

export default Home;
