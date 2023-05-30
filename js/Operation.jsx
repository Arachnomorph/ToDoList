import React, { useState } from "react";
import { deleteOperation } from "./api/operationMethods";

const Operation = ({ operation, handleDeleteOperation }) => {
  const [time, setTime] = useState(0);

  const handleAddTime = () => {};

  const hourFormatter = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const deleteOperation = (e) => {
    e.preventDefault();
    handleDeleteOperation(operation.id);
  };

  return (
    <ul>
      <li>
        <p>{operation.description}</p>
        <p>{hourFormatter(operation.timeSpent)}</p>
        <button onClick={handleAddTime}>Add Time</button>
        <button onClick={deleteOperation}>Delete</button>
      </li>
    </ul>
  );
};

export default Operation;
