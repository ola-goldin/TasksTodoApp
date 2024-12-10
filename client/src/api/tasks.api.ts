import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTasksFromDB = async (): Promise<any[]> => {
  try {
    const response = await fetch('/get');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching Tasks:', error);
    return [];
  }
};

export const createTask = createAsyncThunk(
  'tasks/addTaskToDB',
  async (task: string, { rejectWithValue }) => {
    try {
      const response = await fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding Task:', error);
      return rejectWithValue('Failed to add task');
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/update/${id}`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      return id;
    } catch (error) {
      console.error('Error updating Task:', error);
      return rejectWithValue(error.message || 'Unknown error');
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTaskFromDB', 
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      return id; 
    } catch (error) {
      console.error('Error deleting Task:', error);
      return rejectWithValue(error.message); 
    }
  }
);
