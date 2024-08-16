import "./App.css";
import { useState, useEffect } from "react";
import { TaskList } from "./TaskList.jsx";
import { TaskCreator } from "./TaskCreator.jsx";
function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("TaskList");
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(taskList));
  }, [taskList]);

  function createNewTask(taskName) {
    if (!taskList.find((task) => task === taskName)) {
      setTaskList([...taskList, taskName]);
    } else {
      alert("No puede ser la misma tarea.");
    }
  }

  function deleteTask(taskName) {
    const updatedTaskList = taskList.filter((task) => task !== taskName);
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskCreator createNewTask={createNewTask} />
      <TaskList taskList={taskList} onDelete={deleteTask} />
    </>
  );
}

export default App;
