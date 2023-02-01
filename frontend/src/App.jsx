import { useContext } from "react";
import Project from "@components/Project";
import Home from "./pages/Home";
import "./App.scss";
import { ProjectContext } from "./context/ProjectContext";

function App() {
  const { projects } = useContext(ProjectContext);

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
