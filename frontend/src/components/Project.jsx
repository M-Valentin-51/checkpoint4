import PropTypes from "prop-types";

export default function Project({ project }) {
  const techno = project.list_techno.split(" ");
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
  }).isRequired,
};
