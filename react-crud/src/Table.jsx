import usersJSON from "./mock/users.json"
import "./Table.css"
export default function Table({ users }) {
  // const usersArray = [users];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Zip-Code</th>
        </tr>
      </thead>
      <tbody>
        { users && users.map((user) => (
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
