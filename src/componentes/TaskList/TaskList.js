import { func, string } from "prop-types";
import React from "react";
import "./tasklist.css";
import TaskItem from "../Taskitem/Taskitem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              id={task.id}
              title={task.title}
              taskState={task.state}
              key={task.id}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: string.isRequired,
  onAddTask: func.isRequired
};
