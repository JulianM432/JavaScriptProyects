import "./App.css";
import Card from "./Card.jsx";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

import Comp1 from "./Comp1.jsx";
import Comp2 from "./Comp2.jsx";

const url = "https://rickandmortyapi.com/api/character";

export const ContextChars = createContext();

function App() {
  const [chars, setChars] = useState([]);
  const [index, setIndex] = useState(0);
  const [guardado, setGuardado] = useState(null);

  useEffect(() => {
    let aux = localStorage.getItem("Name");
    if (aux !== null) {
      setGuardado(aux);
    }
  }, []);

  if (chars?.length === 0) {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setChars(response.results));
  }

  // useEffect(() => {
  //   if (index === 0 && chars?.length > 0) {
  //     setIndex(index);
  //   }
  // }, [chars]);

  function handleClickNext() {
    if (index < chars.length - 1) {
      setIndex(index + 1);
      console.log(index);
    }
  }

  function handleClickPrev() {
    if (index > 0) {
      setIndex(index - 1);
      console.log(index);
    }
  }
  return (
    <ContextChars.Provider value={[chars, setChars]}>
      {/* <p>{guardado ? guardado : null}</p> */}
      {/* <Comp1 /> */}
       <h1>Rick and Morty API</h1>
      <Card character={chars[index]} />
      <button onClick={handleClickPrev} disabled={index === 0}>
        Previous Character
      </button>
      <button onClick={handleClickNext} disabled={index === chars?.length - 1}>
        Next Character
      </button>
    </ContextChars.Provider>
  );
}

export default App;
