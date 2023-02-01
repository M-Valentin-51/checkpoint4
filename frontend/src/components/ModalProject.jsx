import axios from "axios";
import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { ProjectContext } from "../context/ProjectContext";

export default function ModalProject({ setFormActive }) {
  const { getProject } = useContext(ProjectContext);

  const titreRef = useRef();
  const imageRef = useRef();
  const lienRef = useRef();
  const technoRef = useRef();
  const descriptionRef = useRef();

  return (
    <form
      className="modalForm"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageRef.current.files[0]);
        formData.append("titre", titreRef.current.value);
        formData.append("lien", lienRef.current.value);
        formData.append("listTechno", technoRef.current.value);
        formData.append("description", descriptionRef.current.value);

        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/project`, formData)
          .then((rep) => {
            if (rep.status === 201) {
              getProject();
              setFormActive(false);
            }
          })
          .catch(() => {
            alert("Une erreur est survenue");
          });
      }}
    >
      <div>
        <label htmlFor="titre">Titre *</label>
        <input ref={titreRef} type="text" id="titre" />
      </div>

      <div>
        <label htmlFor="file">Image</label>
        <input ref={imageRef} type="file" id="file" />
      </div>

      <div>
        <label htmlFor="lien">Lien *</label>
        <input ref={lienRef} type="text" id="lien" />
      </div>

      <div>
        <label htmlFor="techno">List techno *</label>
        <input ref={technoRef} type="text" id="techno" />
      </div>

      <div>
        <label htmlFor="describ">Description</label>
        <textarea ref={descriptionRef} id="describ" cols="30" rows="10" />
      </div>

      <button type="submit">Enregistrer</button>

      <p>* Champ obligatoire</p>
    </form>
  );
}

ModalProject.propTypes = {
  setFormActive: PropTypes.func.isRequired,
};
