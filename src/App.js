import React, { useState } from "react";
import axios from "axios";

function App() {

  //const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=810b2fb3501d5e255b028d8a32f496e6"

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Glasgow</p>
          </div>
          <div className="temperature">
            <h1>10 Degrees</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>10 Degrees</p>
          </div>
          <div className="humidity">
            <p>10 Degrees</p>
          </div>
          <div className="wind">
            <p>10 Degrees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
