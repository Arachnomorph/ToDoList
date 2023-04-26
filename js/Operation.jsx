import React from "react";

const Operation = ({ operation }) => {
  const hourFormatter = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <ul>
      <li>
        <p>{operation.description}</p>
        <p>{hourFormatter(operation.timeSpent)}</p>
        <button>Add Time</button>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default Operation;
