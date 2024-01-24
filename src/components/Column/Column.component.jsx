import React from "react";
import "./Column.styles.css";
import DraggableCard from "../DraggableCard/DraggableCard.component";

const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  return (
    <div className="column">
      <p className="column__title">{title}</p>
      <div className="column__cards">{cards}</div>
      <div className="column__add-task-input">
        <textarea type="text" placeholder="Type task here ..." />
        <button className="column__add-task-btn">Add Task</button>
      </div>
    </div>
  );
};

export default Column;