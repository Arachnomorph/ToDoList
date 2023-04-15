import React, { useState, useEffect } from "react";
import { getTasks } from "./api/methods";
import Item from "./Item";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log("ile razy?");
    getTasks(setTasks);
  }, []);

  return (
    <ul>
      {tasks.map((item, i) => (
        <Item key={i} task={item} />
      ))}
    </ul>
  );
};

export default Tasks;
