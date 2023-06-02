import React from 'react';
import './DateDisplay.css';

const DateDisplay = () => {
  const currentDate = new Date();

  const options = { weekday: 'long', month: 'long', day: 'numeric', separator: '-' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="date-display">
        <h3 className="date">{formattedDate}</h3>
    </div>
  );
};

export default DateDisplay;
