import React, { useState } from "react";
import TimeAdder from "./TimeAdder";
import { updateOperation } from "./api/operationMethods";

const Operation = ({ operation, handleDeleteOperation }) => {
  const [time, setTime] = useState(0);
  const [timeAdderVisible, setTimeAdderVisible] = useState(false);

  const handleAddTime = (addedTime) => {
    setTime((prev) => prev + addedTime);
    const data = {
      description: operation.description,
      timeSpent: time,
    };
    updateOperation(operation.id, data);
    setTimeAdderVisible((prev) => !prev);
    console.log(addedTime);
  };

  const hourFormatter = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const switchTimeAdderVisibility = () => {
    setTimeAdderVisible((prev) => !prev);
  };

  const deleteOperation = (e) => {
    e.preventDefault();
    handleDeleteOperation(operation.id);
  };

  return (
    <ul>
      <li>
        <p>{operation.description}</p>
        {time ? <p>{hourFormatter(time)}</p> : null}
        {timeAdderVisible ? (
          <>
            <TimeAdder handleAddTime={handleAddTime} />
            <button onClick={switchTimeAdderVisibility}>x</button>
          </>
        ) : (
          <>
            <button onClick={switchTimeAdderVisibility}>Add Time</button>
            <button onClick={deleteOperation}>Delete</button>{" "}
          </>
        )}
      </li>
    </ul>
  );
};

export default Operation;
