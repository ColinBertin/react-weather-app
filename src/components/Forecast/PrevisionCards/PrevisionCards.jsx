import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsThermometerHalf } from 'react-icons/bs';
import { GiDrop } from 'react-icons/gi';

import './PrevisionCards.css';

export const PrevisionCards = ({ max, min, weather, humidity, date }) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    const setDate = () => {
      const unix = date;

      const prevDate = new Date (unix * 1000);
      const month = prevDate.getMonth() + 1;
      const day = prevDate.getDate();
      setDay(day);
      setMonth(month)
    };

    setDate();
  }, [date]);


  return (
    <div className='prevision-cards'>
      <p><AiOutlineCalendar/> {`${month}/${day}`}</p>
      <img src="http://openweathermap.org/img/wn/01d.png" alt={weather} />
      <p>{Math.floor(max)}° / {Math.floor(min)}°</p>
      {/* <p><GiDrop/> {humidity}%</p> */}
    </div>
  )
}
