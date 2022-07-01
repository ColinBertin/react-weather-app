import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import './TodayCard.css';

export const TodayCard = ({ today }) => {

  return (
    <>
      {Object.keys(today).length === 0 ? <p>Loading ...</p> :
        (
          <div className='today-card'>
            <TiWeatherCloudy/>
            <h2>{Math.floor(today.temp)}°</h2>
            <div className='today-card-body'>
              <p>Humidity: {today.humidity}%</p>
            </div>
          </div>
        )
      }
    </>
  )
}
