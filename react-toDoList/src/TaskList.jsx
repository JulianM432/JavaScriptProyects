import { Task } from "./Task.jsx";

export function TaskList({ taskList, onDelete }) {
  return taskList.map((task) => (
    <Task key={task} taskName={task} onDelete={onDelete} />
  ));
}
