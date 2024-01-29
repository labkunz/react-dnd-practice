import React from "react";
import "./Column.styles.css";
import DraggableCard from "../DraggableCard/DraggableCard.component";

//引入drop需求
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Constants";

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

  //設定drop區塊
  const [{}, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => {
      const from = item;
      const to = { columnIndex };
      handleMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex
  });

  return (
    <div ref={dropRef} className="column">
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