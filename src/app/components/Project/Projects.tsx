import React, { useState } from "react";

import { Hind } from "next/font/google";
import ProjectsList from "./ProjectsList/ProjectsList";
const technologies = ["Todas", "React", "Node", ".NET", "JavaScript", "TypeScript"];

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400"],
});

function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");

  return (
    <React.Fragment>
      <div
        className="bg-[#041012]"
        id="portfolio"
        style={{
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div className="container m-auto mb-4 lg:mb-6 mt-6 md:mt-12 lg:mt-12">
          <h2 className="text-[#EEEEEE] text-5xl md:text-5xl lg:text-8xl xl:text-8xl text-center md:text-start lg:text-start xl:text-start">Proyectos</h2>
        </div>

        <div className="m-auto">
          {technologies.map((tech) => (
            <button
              key={tech}
              className={`tab ${selectedTechnology === tech ? "active" : ""}`}
              onClick={() => setSelectedTechnology(tech)}
              style={{
                backgroundColor: selectedTechnology === tech ? '#172427' : '#041012',
                color: selectedTechnology === tech ? '#ffffff' : '#a0a0a0',
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                border: "none",
                fontSize: "1rem",
                margin: "0.5rem",
              }}
            >
              {tech}
            </button>
          ))}
        </div>

        <ProjectsList selectedTechnology={selectedTechnology} />

      </div>
    </React.Fragment>
  );
}

export default Projects;
