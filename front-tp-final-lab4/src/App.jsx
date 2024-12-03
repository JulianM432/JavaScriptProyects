import { useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/canchas/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {;
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Canchas de paddle</h1>
      <Table />
    </>
  );
}

export default App;
