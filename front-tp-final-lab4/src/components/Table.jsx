import HeadTable from "./HeadTable";

function Table({ canchas }) {
  return (
    <table>
      <HeadTable header={["Nombre", "Techada"]} />
      <tbody>
        {canchas &&
          canchas.map((cancha) => (
            <tr key={cancha.id}>
              <td>{cancha.nombre}</td>
              <td>{cancha.techada}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
