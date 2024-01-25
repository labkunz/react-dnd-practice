import React, { useState } from "react";
import "./TaskBoard.styles.css";
import Column from "../../components/Column/Column.component";

//設定drag & drop的區域
//正確名稱: HTML5Backend
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const TaskBoard = props => {
  const [myTasks, moveMyTask] = useState(props.tasks);

  const columns = myTasks.map((tasks, columnIndex) => {
    const propsToColumn = { tasks, columnIndex };
    return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
  });

  return (
    <DndProvider backend={HTML5Backend}>
        <div className="task-board">{columns}</div>
    </DndProvider>
  );
};

export default TaskBoard;