import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built using React, HTML, and CSS.
          </p>
        </div>

        <div className="project-card">
          <h3>Counter App</h3>
          <p>
            A simple React counter application using the useState Hook.
          </p>
        </div>

        <div className="project-card">
          <h3>Product Card App</h3>
          <p>
            A React project that displays products using reusable components
            and props.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;