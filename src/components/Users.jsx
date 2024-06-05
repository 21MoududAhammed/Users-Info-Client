import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users`);
        if (res.status === 200) {
          const data = await res.json();
          setUsers(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="m-5">
      <h1 className="text-3xl">All Users </h1>
      <ul>
        {users?.length > 0 &&
          users.map((user) => (
            <li key={user._id}>
              <p>
                Name: {user.name} Email: {user.email}
              </p>
              <Link
                to={`/users/${user._id}`}
                className="bg-green-600 px-3 rounded text-white font-semibold"
              >
                update
              </Link>{" "}
              {"  "}
              <button
                className="bg-green-600 px-3 rounded text-white font-semibold"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
      <Link className="text-blue-600" to="/">
        Go to home --
      </Link>
    </div>
  );
}
