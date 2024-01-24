import React, { useState } from "react";
import "./TaskBoard.styles.css";
import Column from "../../components/Column/Column.component";

const TaskBoard = props => {
  const [myTasks, moveMyTask] = useState(props.tasks);

  const columns = myTasks.map((tasks, columnIndex) => {
    const propsToColumn = { tasks, columnIndex };
    return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
  });

  return <div className="task-board">{columns}</div>;
};

export default TaskBoard;