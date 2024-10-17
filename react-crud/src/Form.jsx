import { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form({ url, onAddUser }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      zipcode: "",
    },
  });

  // Para algo mas generico en caso de otra ocasion
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   const keys = name.split(".");
  //   let updatedFormData = { ...formData };
  //   let currentLevel = updatedFormData;

  //   // Recorro las claves para actualizar el valor anidado
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       currentLevel[key] = value; // Si es el último nivel, asignamos el valor
  //     } else {
  //       currentLevel[key] = { ...currentLevel[key] }; // Aseguro que el nivel intermedio sea un objeto
  //       currentLevel = currentLevel[key]; // Muevo el puntero al siguiente nivel
  //     }
  //   });
  //   setFormData(updatedFormData);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "zipcode") {
      setFormData({
        ...formData,
        address: { ...formData.address, zipcode: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, formData)
      .then((res) => onAddUser(res.data))
      .catch((error) => console.error(error));

    setFormData({
      name: "",
      username: "",
      email: "",
      address: { zipcode: "" },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          required
          name="zipcode"
          type="number"
          placeholder="zipcode"
          onChange={handleChange}
          value={formData.address.zipcode}
        />
        <button>Agregar</button>
      </form>
    </>
  );
}
