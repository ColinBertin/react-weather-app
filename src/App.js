import './App.css';
import React, { useEffect, useState } from "react";
import { SearchBar } from './components/SearchBar/SearchBar';
import { TodayCard } from './components/Forecast/TodayCard/TodayCard';
import { PrevisionCards } from './components/Forecast/PrevisionCards/PrevisionCards';


export default function App() {
  const [city, setCity] = useState('Tokyo');
  const [query, setQuery] = useState('');
  const [today, setToday] = useState({});
  const [previsions, setPrevisions] = useState([])

  const getCoords = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

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
        // console.log(weatherData.current)
        console.log(weatherData.daily)
      } catch(error) {
        console.log(error.message)
      }
    }
    getWeather();
  }, [city])

  const handleSearch = (e) => {
    if(e.key === "Enter") {
      e.preventDefault()
      const newCity = query.charAt(0).toUpperCase() + query.substring(1).toLowerCase();
      setCity(newCity)
      setQuery('')
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <SearchBar
        handleChange={handleChange}
        handleSearch={handleSearch}
        city={city}
      />
      <div className="weather">
        <h1>{city}</h1>
        <TodayCard today={today}/>
        <div className='previsions'>
          {previsions.slice(1, 6).map((prevision) => {
            const { dt, temp, weather, humidity } = prevision;

            return(
              <PrevisionCards
                key={dt}
                date={dt}
                temp={temp.day}
                weather={weather[0].main}
                humidity={humidity}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
