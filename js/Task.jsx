import React, { useEffect, useState } from "react";
import Operation from "./Operation";
import {
  addOperation,
  getOperations,
  deleteOperation,
} from "./api/operationMethods";
import OperationAdder from "./OperationAdder";

const Task = ({ task, handleRemoveTask }) => {
  const [finished, setFinished] = useState(false);
  const [operations, setOperations] = useState([]);
  const [operationAdderVisible, setOperationAdderVisible] = useState(false);

  useEffect(() => {
    getOperations(task.id, setOperations);
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    handleRemoveTask(task.id);
  };

  const handleAddOperation = (task, data) => {
    addOperation(task.id, data, setOperations);
    setOperationAdderVisible((prev) => !prev);
  };

  const handleDeleteOperation = (operationId) => {
    deleteOperation(operationId);
    setOperations((prev) => prev.filter((op) => op.id !== operationId));
  };

  const showOperationAdder = (e) => {
    e.preventDefault();
    setOperationAdderVisible((prev) => !prev);
  };

  return (
    <li>
      <h2>{task.title}</h2>
      <h3>{task.description}</h3>
      <button onClick={showOperationAdder}>
        {operationAdderVisible ? "Cancel" : "Add operation"}
      </button>
      <button onClick={() => setFinished(true)}>Finish</button>
      <button onClick={handleRemove}>delete</button>
      {operationAdderVisible ? (
        <OperationAdder
          task={task}
          handleAddOperation={handleAddOperation}
          setOperations={setOperations}
        />
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
