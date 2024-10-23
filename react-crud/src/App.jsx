import { useEffect } from "react";
import "./styles/App.css";
import Table from "./components/Table";
import { useState } from "react";
import Form from './components/Form';
import { usersAPI } from "./api/usersAPI";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersAPI.getAllUsers().then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);
  const handleUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <>
      <h1>React CRUD</h1>
      <Form onAddUser={handleUser} />
      {users && <Table users={users} />}
    </>
  );
}

export default App;

{
  /* <form>
  <input required name="nombre" type="text" placeholder="Nombre" />
  <input required name="apellido" type="text" placeholder="Apellido" />
  <input required name="dni" type="number" placeholder="Documento" />
  <input required name="edad" type="number" placeholder="Edad" />
  <button>Agregar</button>
</form> */
}
{
  /* <h2>Tabla</h2>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Documento</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    {arr.map((item) => {
      return (
        <tr key={item.dni}>
          {Object.values(item).map((value) => (
            <td key={value}>{value}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
</table> */
}
// const juan = {
//   nombre: "Juan",
//   apellido: "Gomez",
//   dni: 123,
//   edad: 33,
// };
// const maria = {
//   nombre: "Maria",
//   apellido: "Moreira",
//   dni: 345,
//   edad: 55,
// };
// const jose = {
//   nombre: "Jose",
//   apellido: "Fernandez",
//   dni: 768,
//   edad: 22,
// };
// const arr = [juan, maria, jose];
