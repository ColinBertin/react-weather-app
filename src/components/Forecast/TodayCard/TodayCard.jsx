import React from 'react';

import './TodayCard.css';

export const TodayCard = ({ today, date }) => {

  return (
    <>
      {Object.keys(today).length === 0 ? <p>Loading ...</p> :
        (
          <div className='today-card'>
            <div className="today-card-temp">
              <img src={`http://openweathermap.org/img/wn/${today.weather[0].icon}.png`} alt={today.weather[0].main} />
              <h2>{Math.floor(today.temp)}°</h2>
            </div>
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
