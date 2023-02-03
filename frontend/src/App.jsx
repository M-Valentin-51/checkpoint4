import { useContext, useState } from "react";
import Project from "@components/Project";
import Home from "./pages/Home";
import "./App.scss";
import { ProjectContext } from "./context/ProjectContext";
import ModalConnexion from "./components/ModalConnexion";
import ModalCreation from "./components/ModalCreation";

function App() {
  const { projects } = useContext(ProjectContext);
  const [modalConnexionActive, setModalConnexionActive] = useState(false);
  const [modalCreationActive, setModalCreationActive] = useState(false);

  return (
    <div className="App">
      {modalConnexionActive && (
        <ModalConnexion
          setModalConnexionActive={setModalConnexionActive}
          setModalCreationActive={setModalCreationActive}
        />
      )}

      {modalCreationActive && (
        <ModalCreation setModalCreationActive={setModalCreationActive} />
      )}
      <Home
        modalConnexionActive={modalConnexionActive}
        setModalConnexionActive={setModalConnexionActive}
      />
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default App;
