import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <ul>
        <li>
          <p>
            Name: {} Email: {}
          </p>
        </li>
      </ul>
      <Link to="/">Go to home --</Link>
    </div>
  );
}
