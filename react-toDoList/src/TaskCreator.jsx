import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          required
          placeholder="Ingrese una tarea"
          value={newTask}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};