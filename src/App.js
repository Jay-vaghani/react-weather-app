import React, { useState } from 'react';
import Search from './components/search/search';
import './App.css'
import CurrentWether from './components/current-weather/current-weather';
import { TEMPERATURE_UNIT, WEATHER_API_KEY, WEATHER_API_URL } from './api';
import axios from 'axios';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)



  const handleOnSearchChange = async (searchData) => {



    const [lat, log] = await [searchData.value.lat, searchData.value.lon]

    const CurrentWetherFetch = axios.get(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${log}&appid=${WEATHER_API_KEY}&${TEMPERATURE_UNIT}`).then((response) => {
      setCurrentWeather({
        city: searchData.label,
        ...response.data.main
      })
    }).catch((error) => {
      console.log(error)
    })

    const ForecastFetch = axios.get(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${log}&appid=${WEATHER_API_KEY}&${TEMPERATURE_UNIT}`).then((response) => {

      setForecast({
        city: searchData.label,
        ...response.data.list
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWether />
    </div>
  );
}

export default App;





