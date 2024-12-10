import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTask, deleteTask, updateTask } from "../api/tasks.api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        toast.success("Task added successfully!");
      })
      .addCase(createTask.rejected, (state, action) => {
        toast.error(`Error: ${action.payload}`);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTaskIndex = state.tasks.findIndex(
          (task) => task._id === action.payload
        );
        if (updatedTaskIndex !== -1) {
          state.tasks[updatedTaskIndex].done =
            !state.tasks[updatedTaskIndex].done;
        }
        toast.success("Task update successfully!");
      })
      .addCase(updateTask.rejected, (state, action) => {
        toast.error(`Error: ${action.payload}`);
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
        toast.success("Task deleted successfully!");
      })
      .addCase(deleteTask.rejected, (state, action) => {
        toast.error(`Error: ${action.payload}`);
      });
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
