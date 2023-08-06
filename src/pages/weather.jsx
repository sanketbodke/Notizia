import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import {
  faLocationDot,
  faTemperatureThreeQuarters,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import '../styles/weather.css';

export default function Weather() {
  const [weatherCity, setWeatherCity] = useState("pune");

  const { data: weather, isLoading, isError, refetch: refetchWeatherData } = useQuery(
    ["weather"],
    () => {
      return Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=e534d6cec835d28e1523f5ffd15c9108&units=metric`
      ).then((resp) => resp);
    }
  );

  const getWeatherSearchData = (event) => {
    setWeatherCity(event.target.value);
  };

  const handleWeatherSearch = () => {
    refetchWeatherData();
  };

  return (
    <div>
      <div className="weather_data_container">
        <div className="weather_data">
          <div className="weather_img">
            <img src="https://i.postimg.cc/fLymsTgD/mist.png" alt="img" />
          </div>
          <div className="weather_search">
            <input
              type="text"
              placeholder="Enter City"
              className="weatherSearchInput"
              onChange={getWeatherSearchData}
            />
            <button onClick={handleWeatherSearch}>Search</button>
          </div>
          {isLoading ? (
            <p>Loading weather data...</p>
          ) : isError ? (
            <p>Error fetching weather data. Please try again later.</p>
          ) : weather ? ( 
            <div className="weather_info">
              <>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {weather.data.name}
                </p>
                <p>
                  <FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {Math.round(weather.data.main.temp)}
                  <sup>°C</sup>{" "}
                </p>
                <p>
                  <FontAwesomeIcon icon={faWater} /> {weather.data.main.humidity}%
                </p>
                <p>
                  <FontAwesomeIcon icon={faWind} /> {Math.round(weather.data.wind.speed)} km/h
                </p>
              </>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
