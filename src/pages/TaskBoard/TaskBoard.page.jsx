import React, { useState } from "react";
import "./TaskBoard.styles.css";
import Column from "../../components/Column/Column.component";

//設定drag & drop的區域
//正確名稱: HTML5Backend
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const TaskBoard = props => {
  const [myTasks, moveMyTask] = useState(props.tasks);

  //設定drop區域
  const handleMoveMyTask = (from, to) => {
    const { task, columnIndex: fromColumnIndex, index } = from;
    const { columnIndex: toColumnIndex } = to;

    const newMyTasks = [...myTasks];
    // remove task
    newMyTasks[fromColumnIndex].tasks.splice(index, 1);  //這裡出錯
    // move task
    newMyTasks[toColumnIndex].tasks.push(task);
    moveMyTask(newMyTasks);
  }

  const columns = myTasks.map((tasks, columnIndex) => {
    //handleMoveMyTask在這裡做使用
    const propsToColumn = { tasks, columnIndex, handleMoveMyTask };
    return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
  });

  return (
    <DndProvider backend={HTML5Backend}>
        <div className="task-board">{columns}</div>
    </DndProvider>
  );
};

export default TaskBoard;