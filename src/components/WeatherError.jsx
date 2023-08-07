import React from 'react'
import WeatherError from "../img/weatherError.gif"
import "../styles/WeatherError.css"

export default function Weather_Error() {
  return (
    <div className='WeatherErrorContainer'>
      <img src={WeatherError} alt="img" />
      <p>No data found</p>
    </div>
  )
}
