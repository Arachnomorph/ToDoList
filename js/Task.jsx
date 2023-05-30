import React, { useEffect, useState } from "react";
import Operation from "./Operation";
import { removeTask } from "./api/taskMethods";
import {
  addOperation,
  getOperations,
  deleteOperation,
} from "./api/operationMethods";
import OperationAdder from "./OperationAdder";

const Task = ({ task }) => {
  const [finished, setFinished] = useState(false);
  const [operations, setOperations] = useState([]);
  const [operationAdderVisible, setOperationAdderVisible] = useState(false);

  useEffect(() => {
    getOperations(task.id, setOperations);
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    console.log(task.id); //DEBUG
    removeTask(task.id);
  };

  const handleAddOperation = (task, data) => {
    addOperation(task.id, data, setOperations);
    getOperations(task.id, setOperations);
    setOperationAdderVisible((prev) => !prev);
  };

  const handleDeleteOperation = (operationId) => {
    deleteOperation(operationId);
    getOperations(task.id, setOperations);
  };

  const showOperationAdd = (e) => {
    e.preventDefault();
    setOperationAdderVisible((prev) => !prev);
  };

  return (
    <li>
      <h2>{task.title}</h2>
      <h3>{task.description}</h3>
      <button onClick={showOperationAdd}>
        {operationAdderVisible ? "Cancel" : "Add operation"}
      </button>
      <button onClick={() => setFinished(true)}>Finish</button>
      <button onClick={handleRemove}>delete</button>
      {operationAdderVisible ? (
        <OperationAdder task={task} handleAddOperation={handleAddOperation} />
      ) : null}
      {operations.length
        ? operations.map((operation) => {
            return (
              <Operation
                operation={operation}
                handleDeleteOperation={handleDeleteOperation}
                key={operation.id}
              />
            );
          })
        : null}
    </li>
  );
};

export default Task;
