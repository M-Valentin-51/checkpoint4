import ModalProject from "@components/ModalProject";
import axios from "axios";
import { useContext, useState } from "react";
import "../admin.scss";
import { ProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects, setProjects } = useContext(ProjectContext);
  const [formActive, setFormActive] = useState(false);

  const deleteProject = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`);
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <section className="pannelAdmin">
      <header>
        <button type="button">Mes project</button>
        <button type="button" onClick={() => setFormActive(!formActive)}>
          +
        </button>
      </header>

      {formActive ? (
        <ModalProject setFormActive={setFormActive} />
      ) : (
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
                  <button type="button">edit</button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteProject(project.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </section>
      )}
    </section>
  );
}
