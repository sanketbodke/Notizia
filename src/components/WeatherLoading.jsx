import React from "react";
import image from '../img/icons_km_weather.gif'
import '../styles/WeatherLoading.css'

export default function WeatherLoading() {
  return (
    <div className="weatherLoadingContainer">
      <img src={image} alt="img" />
    </div>
  );
}
