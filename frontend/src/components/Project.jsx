import PropTypes, { shape } from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SendComment from "./SendComment";

export default function Project({ project }) {
  const techno = project.list_techno.split(" ");
  const { auth } = useContext(AuthContext);

  return (
    <section className="cardProjet">
      <div>
        <h2>{project.titre}</h2>
        <a href={project.lien}>Lien vers le dépot github</a>
        <p>{project.description}</p>
      </div>
      {project.image && (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${project.image}`}
          alt=""
        />
      )}
      <ul>
        {techno.map((tech) => (
          <li key={tech}>
            <span>#</span>
            {tech}
          </li>
        ))}
      </ul>

      {auth.name && <SendComment projectId={project.id} />}
      <div className="comment">
        <ul>
          {project.commentaire[0].name &&
            project.commentaire.map((comment) => (
              <li>
                <p>
                  <span>{comment.nom} : </span>
                  {comment.message}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    date_ajout: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
    list_techno: PropTypes.arrayOf(PropTypes.string.isRequired),
    titre: PropTypes.string.isRequired,
    commentaire: PropTypes.arrayOf(
      shape({
        nom: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        date_ajout: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
