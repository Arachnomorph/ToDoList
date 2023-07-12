import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 0.75rem;
  margin-top: 0;
`;

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
    <>
      <StyledTitle>New task</StyledTitle>
      <form onSubmit={addTask}>
        <div>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export default NewTask;
