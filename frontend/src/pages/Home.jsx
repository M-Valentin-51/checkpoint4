import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home({
  modalConnexionActive,
  setModalConnexionActive,
}) {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <header className="header">
      <h1>Valentin Marlois</h1>
      {auth.name ? (
        <button
          type="button"
          onClick={() => {
            setAuth({ name: null, admin: null });
          }}
        >
          Deconnexion
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setModalConnexionActive(!modalConnexionActive);
          }}
        >
          Connexion
        </button>
      )}
    </header>
  );
}

Home.propTypes = {
  modalConnexionActive: PropTypes.bool.isRequired,
  setModalConnexionActive: PropTypes.func.isRequired,
};
