import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>HTML</h3>
          <p>Building well-structured web pages.</p>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
          <p>Creating responsive and modern designs.</p>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Adding interactivity to websites.</p>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <p>Developing reusable UI components.</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;