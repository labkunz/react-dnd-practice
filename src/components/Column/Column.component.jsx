import React from "react";
import "./Column.styles.css";
import DraggableCard from "../DraggableCard/DraggableCard.component";

//引入drop需求
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Constants";

//引入canDrop需求
import Card from "../Card/Card.component";

const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    //由這邊確認相關的變數應該是從DraggableCard傳遞過來
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  //設定drop區塊

  //這裡為了可以設定提示拖曳區塊（canDrop），原本空物件要替換掉
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => {
      const from = item;
      const to = { columnIndex };
    //   console.log("from: ");
    //   console.log(from);
    //   console.log("to: ");
    //   console.log(to);
    //這裡來確認了from是空物件
      handleMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex,
    //多設定collect區塊
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div ref={dropRef} className="column">
      <p className="column__title">{title}</p>
      <div className="column__cards">
        {/* 原始卡片區塊 */}
        {cards}
        {/* 提示拖曳區塊 */}
        {isOver && canDrop ? <Card empty/> : ""}
      </div>
      <div className="column__add-task-input">
        <textarea type="text" placeholder="Type task here ..." />
        <button className="column__add-task-btn">Add Task</button>
      </div>
    </div>
  );
};

export default Column;