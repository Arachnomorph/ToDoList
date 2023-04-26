import React from "react";
import { addTask } from "./api/methods";

const NewTask = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addTask({
      title: formData.get("title"),
      description: formData.get("description"),
      status: "open",
    });
  };

  return (
    <div>
      <div>
        <h1>New task</h1>
        <form onSubmit={handleAddTask}>
          <div>
            <input type="text" name="title" placeholder="Title" />
          </div>
          <div>
            <input type="text" name="description" placeholder="Description" />
          </div>
          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
