import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import TaskBoard from "./pages/TaskBoard/TaskBoard.page";

const tasks = [
  {
    title: "todo",
    tasks: ["Read chapters for next class"]
  },
  {
    title: "doing",
    tasks: ["Complete in-class activity", "Brainsotrm project ideas"]
  },
  {
    title: "done",
    tasks: []
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskBoard tasks={tasks} />
)
