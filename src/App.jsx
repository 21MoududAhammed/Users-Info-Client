import UserEntryForm from "./components/UserEntryForm";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserEntryForm />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
}
