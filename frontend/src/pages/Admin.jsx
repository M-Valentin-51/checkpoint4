import { useContext } from "react";
import "../admin.scss";
import { ProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects } = useContext(ProjectContext);

  return (
    <section className="pannelAdmin">
      <header>
        <button type="button">Mes project</button>
        <button type="button">+</button>
      </header>
      <section>
        <h3>les offre</h3>
        <table>
          {projects.map((project) => (
            <tr>
              <td>
                {new Date(project.date_ajout).toLocaleDateString("fr-FR")}
              </td>
              <td>{project.titre}</td>
              <td>
                <button type="button">edit</button>
              </td>
              <td>
                <button type="button">delete</button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </section>
  );
}
