// Home.js

import React, { useState } from 'react';
import "./App.css"; // Import the custom CSS
import DatePickerInput from './Components/Datepicker';
const Home = () => {
  const [DepartureDate, setDepartureDate] = useState(null);
  const [ArrivalDate, setArrivalDate] = useState(null);
  const [DepartureAirport, setDepartureAirport] = useState('');
  const [ArrivalAirport, setArrivalAirport] = useState('');
  const [DepartureTime, setDepartureTime] = useState('');
  const [ArrivalTime, setArrivalTime] = useState('');
  const [AircraftCode, setAircraftCode] = useState('');
  const [CarrierCode, setCarrierCode] = useState('');
  const [FlightNumber, setFlightNumber] = useState('');
  const [Duration, setDuration] = useState('');

  // Base URL for the API
  const baseUrl = "https://test.api.amadeus.com/v1/travel/predictions/flight-delay";

  // Parameters for the API request
  var originLocationCode = "NCE";
  var destinationLocationCode = "IST";
  var departureDate = "2020-08-01";
  const departureTime = "18:20:00";
  var arrivalDate = "2020-08-01";
  const arrivalTime = "22:15:00";
  var aircraftCode = "321";
  var carrierCode = "TK";
  var flightNumber = "1816";
  var duration = "PT31H10M";
  function fixVariables() {
    departureDate = DepartureDate.toISOString().substring(0,10);
    arrivalDate=ArrivalDate.toISOString().substring(0,10);
    originLocationCode=DepartureAirport;
    destinationLocationCode= ArrivalAirport;
    aircraftCode=AircraftCode;
    carrierCode=CarrierCode;
    flightNumber=FlightNumber;

    console.log(departureDate);
  }
  // Construct the complete URL with parameters
 


  // Make the API request using fetch
  const grabData = () => {
    fixVariables();
    const url = `${baseUrl}?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&departureTime=${departureTime}&arrivalDate=${arrivalDate}&arrivalTime=${arrivalTime}&aircraftCode=${aircraftCode}&carrierCode=${carrierCode}&flightNumber=${flightNumber}&duration=${duration}`;
    const urlAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";
    const clientId = "XAZXfpckDVFuKZMuZFZYYY0pBVFHn7a6";
    const clientSecret = "D6EOX9SMKZ8BGi59";

    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");
    data.append("client_id", clientId);
    data.append("client_secret", clientSecret);
    //Fetches the token
    fetch(urlAuth, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data
    })
      .then(response => response.json())
      .then(data => {
        //logs the token
        console.log(data.access_token);
        const headers = {
          "Authorization": "Bearer "+data.access_token
        };
        //fetches the flight data
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
      })
      .catch(error => {
        console.error("Error:", error);
      });

  }

  return (
    <div className="home-container">
      <h1 className="home-title">Flight Delay Predictor</h1>
      <div>
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
            <h2>DepartureTime</h2>
            <input
              type="text"
              placeholder="DepartureTime"
              value={DepartureTime}
              onChange={(e) => { setDepartureTime(e.target.value); console.log(DepartureTime) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>ArrivalTime</h2>
            <input
              type="text"
              placeholder="ArrivalTime"
              value={ArrivalTime}
              onChange={(e) => { setArrivalTime(e.target.value); console.log(ArrivalTime) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>AircraftCode</h2>
            <input
              type="text"
              placeholder="AircraftCode"
              value={AircraftCode}
              onChange={(e) => { setAircraftCode(e.target.value); console.log(AircraftCode) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>CarrierCode</h2>
            <input
              type="text"
              placeholder="CarrierCode"
              value={CarrierCode}
              onChange={(e) => { setCarrierCode(e.target.value); console.log(CarrierCode) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>

          <div className="flexChild">
            <h2>FlightNumber</h2>
            <input
              type="text"
              placeholder="FlightNumber"
              value={FlightNumber}
              onChange={(e) => { setFlightNumber(e.target.value); console.log(FlightNumber) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>
          <div className="flexChild">
            <h2>Duration</h2>
            <input
              type="text"
              placeholder="Duration"
              value={Duration}
              onChange={(e) => { setFlightNumber(e.target.value); console.log(Duration) }}
            />
            <h5>Ex: For Istanbul its IST</h5>
          </div>

        </div>
       
        <button onClick={() => { grabData(); }}>Submit</button>
      </div>
    </div>

  );
};

export default Home;
