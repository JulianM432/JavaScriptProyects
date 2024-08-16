import { useContext } from "react";
import { ContextChars } from "./App";

export default function Comp2() {
  const index = 0;
  const [char,setChars] = useContext(ContextChars);
    function handleClick() {
    localStorage.setItem("Name", char[index].name);
  }

  function handleDelete(){
    localStorage.removeItem("Name");
  }
  return (
    <>
      <h1>Component 2: {char[index]?.name}</h1>
      <button onClick={handleClick}>button</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
