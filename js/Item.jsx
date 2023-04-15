import React from "react";
import { removeTask } from "./api/methods";

const Item = ({ task }) => {
  const handleRemove = () => {
    console.log(task.id);
    removeTask(task.id);
  };

  return (
    <li>
      {task.title}
      <button onClick={handleRemove}>delete</button>
    </li>
  );
};

export default Item;
