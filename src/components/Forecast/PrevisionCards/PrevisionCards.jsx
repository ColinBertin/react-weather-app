import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsThermometerHalf } from 'react-icons/bs';
import { GiDrop } from 'react-icons/gi';

import './PrevisionCards.css';

export const PrevisionCards = ({ temp, weather, humidity, date }) => {
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
      <h3><BsThermometerHalf/> {Math.floor(temp)}°</h3>
      <p>{weather}</p>
      <p><GiDrop/> {humidity}%</p>
    </div>
  )
}
