import { useEffect, useState } from "react";
import axios from "axios";
import Project from "@components/Project";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((reponse) => {
        setProjects(reponse.data);
      });
  }, []);

  return (
    <div className="App">
      <Home />
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default App;
