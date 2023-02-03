import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ModalConnexion({
  setModalConnexionActive,
  setModalCreationActive,
}) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  return (
    <div className="modalConnexion">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/connexion`, {
              name: nameRef.current.value,
              password: passwordRef.current.value,
            })
            .then((rep) => {
              setAuth({ name: rep.data.name, admin: rep.data.admin });
              if (rep.data.admin) {
                navigate("/admin");
              } else {
                setModalConnexionActive(false);
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
          <button type="submit">Connexion</button>
          <button
            type="button"
            onClick={() => {
              setModalConnexionActive(false);
            }}
          >
            Annuler
          </button>
        </div>
        <button
          className="buttonCreateAccount"
          type="button"
          onClick={() => {
            setModalCreationActive(true);
            setModalConnexionActive(false);
          }}
        >
          Creer un compte
        </button>
      </form>
    </div>
  );
}

ModalConnexion.propTypes = {
  setModalCreationActive: PropTypes.func.isRequired,
  setModalConnexionActive: PropTypes.func.isRequired,
};
