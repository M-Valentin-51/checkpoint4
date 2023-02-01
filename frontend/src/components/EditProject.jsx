import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

export default function EditProject() {
  const navigate = useNavigate();
  const { getProject } = useContext(ProjectContext);
  const [form, setForm] = useState({
    titre: null,
    lien: null,
    listTechno: null,
    description: null,
  });

  const { id } = useParams();

  function handleCahnge(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`)
      .then((rep) => {
        setForm({
          titre: rep.data.titre,
          lien: rep.data.lien,
          listTechno: rep.data.list_techno,
          description: rep.data.description,
        });
      });
  }, []);

  const titreRef = useRef();
  const lienRef = useRef();
  const technoRef = useRef();
  const descriptionRef = useRef();

  return (
    <form
      className="formProject"
      onSubmit={(e) => {
        e.preventDefault();

        const data = {
          titre: titreRef.current.value,
          lien: lienRef.current.value,
          listTechno: technoRef.current.value,
          description: descriptionRef.current.value,
        };

        axios
          .put(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`, data)
          .then((rep) => {
            if (rep.status === 204) {
              getProject();
              navigate("/admin");
            }
          })
          .catch(() => {
            alert("Une erreur est survenue");
          });
      }}
    >
      <div>
        <label htmlFor="titre">Titre *</label>
        <input
          ref={titreRef}
          value={form.titre}
          type="text"
          id="titre"
          onChange={(e) => handleCahnge(e)}
        />
      </div>

      <div>
        <label htmlFor="lien">Lien *</label>
        <input
          ref={lienRef}
          value={form.lien}
          type="text"
          id="lien"
          onChange={(e) => handleCahnge(e)}
        />
      </div>

      <div>
        <label htmlFor="listTechno">List techno *</label>
        <input
          ref={technoRef}
          value={form.listTechno}
          type="text"
          id="listTechno"
          onChange={(e) => handleCahnge(e)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          ref={descriptionRef}
          value={form.description}
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => handleCahnge(e)}
        />
      </div>

      <div>
        <button type="submit">Enregistrer</button>

        <button type="button">
          <Link to="/admin">Annuler</Link>
        </button>
      </div>
      <p>* Champ obligatoire</p>
    </form>
  );
}
