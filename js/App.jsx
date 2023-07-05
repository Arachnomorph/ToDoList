import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Task from "./Task";
import { getTasks, removeTask, addTask } from "./api/taskMethods";

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
    <>
      <NewTask handleAddTask={handleAddTask} />
      <ul>
        {tasks.map((task, i) => (
          <Task handleRemoveTask={handleRemoveTask} key={i} task={task} />
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
