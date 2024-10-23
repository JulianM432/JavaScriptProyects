import usersJSON from "../mock/users.json";
import '../styles/Table.css';
import HeadTable from "./HeadTable";
export default function Table({ users }) {
  // const usersArray = [users];
  const header = ["Name","Username","Email","Zipcode"]
  return (
    <table>
      <HeadTable header={header}/>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
