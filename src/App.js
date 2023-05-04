import React, { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=810b2fb3501d5e255b028d8a32f496e6`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="App">
      <div className="container">
          <div className="p-1 mt-3 d-flex justify-content-center">
            <input
              className="fs-5 p-2 rounded-pill bg-secondary bg-opacity-50 text-white"
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder="Enter location"
              onKeyPress={searchLocation}
              type="text"></input>
          </div>
          <div className="middle mt-5">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temperature">
              {data.main ? <h1>{data.main.temp} °</h1> : null}
            </div>
            <div className="description">
              {data.main ? <p className="fw-bold">{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-evenly text-center mt-2 p-3 border border-dark border-2 rounded-2 bg-secondary bg-opacity-50 text-white">
            <div className="col-sm-4 mb-5 mb-sm-0">
              {data.main ? <p className="fw-bold">{data.main.feels_like} °</p> : null}
              <p>Feels like</p>
            </div>
            <div className="col-sm-4 mb-5 mb-sm-0">
              {data.main ? <p className="fw-bold">{data.main.humidity} %</p> : null}
              <p>Humidity</p>
            </div>
            <div className="col-sm-4">
              {data.main ? <p className="fw-bold">{data.wind.speed} mph</p> : null}
              <p>Wind</p>
            </div>
          </div>
          </div>
    </div>
  );
}

export default App;
