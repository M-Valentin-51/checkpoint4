import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../admin.scss";
import { ProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects, setProjects } = useContext(ProjectContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteProject = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`);
    setProjects(projects.filter((project) => project.id !== id));
  };

  if (!auth.admin) {
    navigate("/");
  }

  return (
    <section className="pannelAdmin">
      <header>
        <button type="button">Mes project</button>
        <Link to="/new-project">+</Link>
      </header>

      <section>
        <h3>les offre</h3>
        <table>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>
                {new Date(project.date_ajout).toLocaleDateString("fr-FR")}
              </td>
              <td>{project.titre}</td>
              <td>
                <button type="button">
                  <Link to={`/edit-project/${project.id}`}>Edit</Link>
                </button>
              </td>
              <td>
                <button type="button" onClick={() => deleteProject(project.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </section>
  );
}
