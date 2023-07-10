import React, { useEffect, useState } from "react";
import Operation from "./Operation";
import {
  addOperation,
  getOperations,
  deleteOperation,
} from "./api/operationMethods";
import { updateTask } from "./api/taskMethods";
import OperationAdder from "./OperationAdder";

const Task = ({ task, handleRemoveTask }) => {
  const [status, setStatus] = useState(task.status);
  const [operations, setOperations] = useState([]);
  const [operationAdderVisible, setOperationAdderVisible] = useState(false);

  useEffect(() => {
    getOperations(task.id, setOperations);
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    handleRemoveTask(task.id);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    const data = {
      title: task.title,
      description: task.description,
      status: "closed",
    };
    updateTask(task.id, data, setStatus);
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
      {status === "open" ? (
        <>
          <button onClick={showOperationAdder}>
            {operationAdderVisible ? "Cancel" : "Add operation"}
          </button>{" "}
          <button onClick={handleFinish}>Finish</button>{" "}
        </>
      ) : null}

      {status === "closed" && !operations.length ? (
        <button onClick={handleRemove}>delete</button>
      ) : null}
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
                taskStatus={status}
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
