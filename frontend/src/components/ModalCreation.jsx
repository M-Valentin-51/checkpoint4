import axios from "axios";
import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

export default function ModalCreation({ setModalCreationActive }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const { setAuth } = useContext(AuthContext);
  return (
    <div className="modalConnexion">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/createaccount`, {
              name: nameRef.current.value,
              password: passwordRef.current.value,
            })
            .then((rep) => {
              if (rep.status === 200) {
                /*
                nom : req.data.name
                */
                setAuth({ name: rep.data.name, admin: null });
                setModalCreationActive(false);
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }}
      >
        <label htmlFor="name">Nom</label>
        <input ref={nameRef} id="name" type="text" placeholder="Nom" />
        <label htmlFor="password">Mot de passe</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Mot de passe"
        />
        <div>
          <button type="submit">Creer</button>
          <button
            type="button"
            onClick={() => {
              setModalCreationActive(false);
            }}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

ModalCreation.propTypes = {
  setModalCreationActive: PropTypes.func.isRequired,
};
