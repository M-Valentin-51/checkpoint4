import PropTypes from "prop-types";
import axios from "axios";
import { useContext, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { AuthContext } from "../context/AuthContext";

export default function SendComment({ projectId }) {
  const { getProject } = useContext(ProjectContext);
  const { auth } = useContext(AuthContext);
  const msg = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (msg.current.value.length) {
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/commentaire`, {
              nom: auth.name,
              message: msg.current.value,
              projectId,
            })
            .then((rep) => {
              if (rep.status === 201) {
                getProject();
                msg.current.value = "";
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }}
    >
      <input ref={msg} type="text" />
      <button type="submit"> Envoyer</button>
    </form>
  );
}

SendComment.propTypes = {
  projectId: PropTypes.number.isRequired,
};
