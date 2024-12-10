import React, { useState } from "react";
interface CreateProps {
  addTodo: (task: string) => void; // Accept addTodo as a prop
}

const Create: React.FC<CreateProps> = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTask(value);

    if (value.trim() !== "") {
      setError("");
    }
  };
  const handleAdd = () => {
    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    addTodo(task); // Use the addTodo function passed from the parent
    setTask("");
    setError("");
  };

  return (
    <>
      <div className="create_form">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Create;
