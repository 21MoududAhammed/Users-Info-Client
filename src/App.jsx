import UserEntryForm from "./components/UserEntryForm";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserEntryForm />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}
