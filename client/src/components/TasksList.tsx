import React from "react";
import { useDispatch } from "react-redux";
import "../styles/index.css";
import { deleteTask, updateTask } from "../api/tasks.api";

interface TaskProps {
  tasks: Array<{
    _id: string;
    done: boolean;
    task: string;
  }>;
}

const TaskList: React.FC<TaskProps> = ({ tasks }) => {
  const dispatch = useDispatch();

  
  if (!tasks || tasks.length === 0) {
    return <h2>No Records</h2>;
  }

  return (
    <>
      {tasks.map(({ _id, done, task }) => (
        <div key={_id} className="task">
          <div className="checkbox" onClick={() => dispatch(updateTask(_id))}>
            <i className={`uil ${done ? "uil-check-circle" : "uil-circle"}`}></i>
            <p className={done ? "line_through" : ""}>{task}</p>
          </div>
          <i
            className="uil uil-trash-alt"
            onClick={() => dispatch(deleteTask(_id))}
          ></i>
        </div>
      ))}
    </>
  );
};

export default TaskList;
