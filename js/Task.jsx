import React, { useEffect, useState } from "react";
import Operation from "./Operation";
import { removeTask } from "./api/taskMethods";
import { getOperations } from "./api/operationMethods";

const Task = ({ task }) => {
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

  const handleAddOperation = (e) => {
    e.preventDefault();
    console.log("OPERATION ADDED"); //DEBUG
    setOperations((prev) => [...prev, "Op test"]);
    console.log(operations); //DEBUG
  };

  return (
    <li>
      <h2>{task.title}</h2>
      <h3>{task.description}</h3>
      <button onClick={handleAddOperation}>Add operation</button>
      <button onClick={() => setFinished(true)}>Finish</button>
      <button onClick={handleRemove}>delete</button>
      {operations.length
        ? operations.map((operation) => {
            return <Operation operation={operation} key={operation.id} />;
          })
        : null}
    </li>
  );
};

export default Task;
