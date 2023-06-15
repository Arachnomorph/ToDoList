import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Task from "./Task";
import { getTasks, removeTask } from "./api/taskMethods";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  const handleRemoveTask = function (taskId) {
    removeTask(taskId);
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <NewTask />
      <ul>
        {tasks.map((task, i) => (
          <Task handleRemoveTask={handleRemoveTask} key={i} task={task} />
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
