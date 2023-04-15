import React from "react";
import { addTask } from "./api/methods";

const NewTask = () => {
  const test = {
    title: "test title",
    description: "test description",
    status: "test status",
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(test);
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
