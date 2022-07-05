import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import './TodayCard.css';

export const TodayCard = ({ today, date }) => {

  return (
    <>
      {Object.keys(today).length === 0 ? <p>Loading ...</p> :
        (
          <div className='today-card'>
            {/* <div className="today-card-temp"> */}
              <TiWeatherCloudy/>
              <h2>{Math.floor(today.temp)}°</h2>
            {/* </div> */}
            <div className='today-card-body'>
              <p>{date}</p>
              <p>Humidity: {today.humidity}%</p>
            </div>
          </div>
        )
      }
    </>
  )
}
