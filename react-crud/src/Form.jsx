import "./Form.css"

export default function Form() {
  return (
    <>
      <form>
        <input required name="name" type="text" placeholder="Name" />
        <input required name="username" type="text" placeholder="Username" />
        <input required name="email" type="email" placeholder="Email" />
        <input required name="zipcode" type="number" placeholder="zipcode" />
        <button>Agregar</button>
      </form>
    </>
  );
}
