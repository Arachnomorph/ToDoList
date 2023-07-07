import React from "react";

const TimeAdder = ({ handleAddTime }) => {
  const addTime = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleAddTime(+formData.get("time"));
    e.target.reset();
  };

  return (
    <form onSubmit={addTime}>
      <input name="time" type="number" placeholder="Time spent in minutes" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TimeAdder;
