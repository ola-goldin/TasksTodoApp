import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setTasks } from "../store/tasksSlice";
import Create from "./Create";
import { useLoaderData, useNavigation } from "react-router-dom";
import "../styles/index.css";
import TaskList from "./TasksList";
import { createTask } from "../api/tasks.api";
import { ToastContainer } from "react-toastify";

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks?.tasks || []);
  const dispatch: AppDispatch = useDispatch();
  const initialTasks = useLoaderData() || [];
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setTasks(initialTasks));
  }, [initialTasks, dispatch]);

  if (navigation.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div className="home">
      <h2>
        To Do List <i className="uil uil-clipboard-notes"></i>
      </h2>
      <Create addTodo={(task) => dispatch(createTask(task))} />
      <TaskList tasks={tasks} />
      <ToastContainer/>
    </div>
  );
};

export default Home;
