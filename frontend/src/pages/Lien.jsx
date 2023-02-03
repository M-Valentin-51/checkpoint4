import EditProject from "@components/EditProject";
import NewProject from "@components/NewProject";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import App from "../App";
import Admin from "./Admin";

export default function Lien() {
  const { auth } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin"
          element={auth.admin ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/edit-project/:id" element={<EditProject />} />
        <Route path="/new-project" element={<NewProject />} />
      </Routes>
    </Router>
  );
}
