import './App.css';
import React, { useEffect, useState } from "react";
import { TodayCard } from './components/Forecast/TodayCard/TodayCard';


export default function App() {
  const [city, setCity] = useState('tokyo');
  const [today, setToday] = useState({});
  const [previsions, setPrevisions] = useState([])

  const getCoords = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  const getWeatherData = async (lonlat) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lonlat[0].lat}&lon=${lonlat[0].lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url);
    const data = await response.json();

    // console.log(lonlat[0].lat)

    return data;
  }



  useEffect(() => {
    const getWeather = async () => {
      try {
        const coords = await getCoords();

        const weatherData = await getWeatherData(coords);

        setToday(weatherData.current);
        setPrevisions(weatherData.daily)
        // console.log(weatherData)
        console.log(weatherData.current)
        console.log(weatherData.daily)
      } catch(error) {
        console.log(error.message)
      }
    }
    getWeather();
  }, [])

  return (
    <div className="App">
      <h1>{city}</h1>
    </div>
  );
}
