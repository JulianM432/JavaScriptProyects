export function Task({ taskName, onDelete }) {
  function handleDelete(){
    onDelete(taskName);
  }
  return (
    <div>
      <p >{taskName}</p>
      <button onClick={handleDelete}>Done</button>
    </div>
  );
}
