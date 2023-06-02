import React from "react";

const OperationAdder = ({ task, handleAddOperation }) => {
  const addOperation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const operationName = formData.get("operationName");
    const data = {
      description: operationName,
      timeSpent: 0,
    };
    handleAddOperation(task, data);
  };

  return (
    <form onSubmit={addOperation}>
      <input type="text" name="operationName"></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default OperationAdder;
