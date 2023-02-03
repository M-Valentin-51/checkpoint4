import React from "react";
import ReactDOM from "react-dom/client";
import Lien from "./pages/Lien";
import { AuthContextProvider } from "./context/AuthContext";
import { ProjectContextProvider } from "./context/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <AuthContextProvider>
        <Lien />
      </AuthContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
