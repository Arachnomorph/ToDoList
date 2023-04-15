import React from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Tasks from "./Tasks";

const App = () => {
  return (
    <>
      <NewTask />
      <Tasks />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
