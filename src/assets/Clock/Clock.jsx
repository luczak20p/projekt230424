import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const changeTime = () => setDate(new Date());

  useEffect(() => {
    const timerId = setInterval(changeTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div className="clock">{date.toLocaleTimeString()}</div>;
};

export default Clock;
