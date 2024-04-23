import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import logo from './cloud.svg';

export default function Header({ title }) {
  const [users, setUsers] = useState([]);

  const [date, setDate] = useState(
    new Date(new Date().toLocaleString('en', { timeZone: users.timezone }))
  );
  const changeTime = () =>
    setDate(
      new Date(new Date().toLocaleString('en', { timeZone: users.timezone }))
    );

  useEffect(() => {
    const timerId = setInterval(changeTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  const fetchData = () => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&current=temperature_2m&hourly=temperature_2m,rain,wind_speed_10m&timezone=auto'
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header class="d-flex text-light">
      <h1 class="me-5">
        <img src={logo} style={{ width: '64px', height: '64px' }} />
        {title}
      </h1>

      <div>
        Strefa czasowa z API: {users.timezone}{' '}
        <p>{date.toLocaleTimeString()}</p>
      </div>
    </header>
  );
}
