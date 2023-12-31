import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import {
  faLocationDot,
  faTemperatureThreeQuarters,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import WeatherLoading from "./WeatherLoading";
import Weather_Error from "./WeatherError";
import "../styles/weather.css";

export default function Weather() {
  const [weatherCity, setWeatherCity] = useState("pune");

  const {
    data: weather,
    isLoading,
    isError,
    refetch: refetchWeatherData,
  } = useQuery(["weather"], () => {
    return Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=APIKEY&units=metric`
    ).then((resp) => resp);
  });

  const getWeatherSearchData = (event) => {
    setWeatherCity(event.target.value);
  };

  const handleWeatherSearch = () => {
    refetchWeatherData();
  };

  if (isLoading) {
    return (
      <>
        <WeatherLoading />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Weather_Error />
      </>
    );
  }

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

          <div className="weather_info">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {weather.data.name}
            </p>
            <p>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />{" "}
              {Math.round(weather.data.main.temp)}
              <sup>°C</sup>{" "}
            </p>
            <p>
              <FontAwesomeIcon icon={faWater} /> {weather.data.main.humidity}%
            </p>
            <p>
              <FontAwesomeIcon icon={faWind} />{" "}
              {Math.round(weather.data.wind.speed)} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
