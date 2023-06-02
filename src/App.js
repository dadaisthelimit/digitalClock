import React, { useState, useEffect } from 'react';
import DateDisplay from './DateDisplay';


const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <h1>{time}</h1>
      <DateDisplay />      
    </div>
  );
};

export default App;
