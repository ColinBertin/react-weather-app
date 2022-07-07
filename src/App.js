import './App.css';
import React, { useEffect, useState } from "react";
import { SearchBar } from './components/SearchBar/SearchBar';
import { TodayCard } from './components/Forecast/TodayCard/TodayCard';
import { PrevisionCards } from './components/Forecast/PrevisionCards/PrevisionCards';

let countCall = 0

export default function App() {
  const [city, setCity] = useState('Tokyo');
  const [formatedCity, setFormatedCity] = useState('');
  const [query, setQuery] = useState('');
  const [today, setToday] = useState({});
  const [previsions, setPrevisions] = useState([]);
  const [todayDate, setTodayDate] = useState('');
  const [currentTime, setCurrentTime] = useState(6);


  const date = new Date();

  const getCoords = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    setFormatedCity(`${data[0].name}, ${data[0].country}`)

    countCall += 1;
    return data;
  };

  const getWeatherData = async (lonlat) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lonlat[0].lat}&lon=${lonlat[0].lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url);
    const data = await response.json();

    countCall += 1;
    console.log(countCall)
    return data;
  }


  useEffect(() => {
    const getWeather = async () => {
      try {
        const coords = await getCoords();

        const weatherData = await getWeatherData(coords);

        setToday(weatherData.current);
        setPrevisions(weatherData.daily);
        console.log(weatherData.current)
      } catch(error) {
        console.log(error.message)
      }
    };
    const getCurrentTime = () => {
      const hours = date.getHours();
      setCurrentTime(hours);
    }
    getCurrentTime();
    getWeather();
  }, [city])

  useEffect(() => {
    const getTodayDate = () => {
      const todayDate = date.getDate();
      const month = date.getMonth() + 1;
      setTodayDate(`${month}/${todayDate}`);
    }
    getTodayDate();
  })

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
    <div className={`App ${(currentTime >= 6 && currentTime <= 18 ? 'day' : 'night')}`}>
      <SearchBar
        handleChange={handleChange}
        handleSearch={handleSearch}
        city={city}
      />
      <div className="weather">
        <h1>{formatedCity}</h1>
        <TodayCard
          today={today}
          date={todayDate}
        />
        <div className='previsions'>
          {previsions.slice(1, 6).map((prevision) => {
            const { dt, temp, weather, humidity } = prevision;
            return(
              <PrevisionCards
                key={dt}
                date={dt}
                max={temp.max}
                min={temp.min}
                weather={weather[0].main}
                icon={weather[0].icon}
                humidity={humidity}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
