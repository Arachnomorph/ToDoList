import React from "react";

const NewTask = ({ handleAddTask }) => {
  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleAddTask({
      title: formData.get("title"),
      description: formData.get("description"),
      status: "open",
    });
    e.target.reset();
  };

  return (
    <div>
      <div>
        <h1>New task</h1>
        <form onSubmit={addTask}>
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
