import React, { useEffect, useState } from "react";
import Operation from "./Operation";
import { removeTask } from "./api/methods";
import { getOperations } from "./api/operationMethods";

const Item = ({ task }) => {
  const [finished, setFinished] = useState(false);
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations(task.id, setOperations);
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    console.log(task.id); //DEBUG
    removeTask(task.id);
  };

  const handleAddOperation = () => {
    e.preventDefault();
    console.log("OPERATION ADDED"); //DEBUG
    setOperations((prev) => [...prev, "Op test"]);
  };

  return (
    <li>
      <h2>{task.title}</h2>
      <h3>{task.description}</h3>
      <button onClick={handleAddOperation}>Add operation</button>
      <button onClick={() => setFinished(true)}>Finish</button>
      <button onClick={handleRemove}>delete</button>
      {operations.length ? <Operation /> : null}
    </li>
  );
};

export default Item;
