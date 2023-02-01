import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ProjectContext = createContext();

function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);

  const getProject = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((reponse) => {
        setProjects(reponse.data);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  const value = useMemo(
    () => ({ projects, setProjects, getProject }),
    [projects, setProjects, getProject]
  );
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { ProjectContext, ProjectContextProvider };
ProjectContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
