import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Task from "./Task";
import { getTasks } from "./api/taskMethods";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("useEffect fired"); //DEBUG
    getTasks(setTasks);
  }, []);

  return (
    <>
      <NewTask />
      <ul>
        {tasks.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
