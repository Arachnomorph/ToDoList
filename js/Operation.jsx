import React, { useState } from "react";

const Operation = ({ operation }) => {
  const [time, setTime] = useState(0);

  const handleAddTime = () => {};

  const hourFormatter = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const handleDeleteOperation = () => {};

  return (
    <ul>
      <li>
        <p>{operation.description}</p>
        <p>{hourFormatter(operation.timeSpent)}</p>
        <button onClick={handleAddTime}>Add Time</button>
        <button onClick={handleDeleteOperation}>Delete</button>
      </li>
    </ul>
  );
};

export default Operation;
