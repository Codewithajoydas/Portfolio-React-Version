import { useEffect, useState } from "react";
import "./ProjectsStyle.css";

const Projects = () => {
  const [projects, setProjects] = useState([]); // Step 1: create a variable to hold the projects

  useEffect(() => {
    // Step 2: fetch data only once when component loads
    fetch("https://codewithajoydas.live/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data)) // Step 3: save data into React state
      .catch((err) => console.log("Error loading projects:", err));
  }, []);

  return (
    <div className="p-container">
      <div className="ht">
        <h1>My Projects</h1>
        <p>
          These projects are built using HTML, CSS, and JavaScript. More
          projects are coming soon in Electron.js, React Native, and React.
        </p>

      
      </div>

      <div className="projects-list">
        {projects.length === 0 ? (
          <p>Loading...</p>
        ) : (
          projects.map((item, index) => (
            <div className="project-card" key={index}>
              <img src={item.image} alt="" draggable="false" />
              <span
                style={{ fontSize: 25, fontWeight: "bolder", color: "white" }}
              >
                {item.name}
              </span>
              <br />
              <span>{item.description}</span>
              <br />
              <a href={item.live}>
                <button>Preview</button>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
