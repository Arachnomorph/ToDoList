import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";
import NewTask from "./NewTask";
import Task from "./Task";
import { getTasks, removeTask, addTask } from "./api/taskMethods";

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  const handleAddTask = function (data) {
    addTask(data);
    getTasks(setTasks);
  };

  const handleRemoveTask = function (taskId) {
    removeTask(taskId);
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <MainContainer>
      <NewTask handleAddTask={handleAddTask} />
      <StyledList>
        {tasks.map((task, i) => (
          <Task handleRemoveTask={handleRemoveTask} key={i} task={task} />
        ))}
      </StyledList>
    </MainContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
