import "./Skills.css";

function Skills(props) {
  return (
    <div ref={props.refname} className="section">
      <div>
        <h1 className="skill-head">
          <span className="my-name">Skill Set</span> I have acquired through my
          education
        </h1>
      </div>
      <div className="skill-container">
        <div className="skill-card">
          <h1 className="skill-name">Web Development Skills</h1>
          <ul style={{ listStyleType: "circle" }}>
            <li className="skill-item">HTML, CSS</li>
            <li className="skill-item">React JS</li>
            <li className="skill-item">Angular</li>
            <li className="skill-item">Material UI</li>
            <li className="skill-item">Bootstrap</li>
            <li className="skill-item">Node JS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h1 className="skill-name">Programming Skills</h1>
          <ul style={{ listStyleType: "circle" }}>
            <li className="skill-item">C++</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">C#</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">PHP</li>
            <li className="skill-item">Java</li>
            <li className="skill-item">MATLAB</li>
          </ul>
        </div>
        <div className="skill-card card-3">
          <h1 className="skill-name">Other Skills</h1>
          <ul style={{ listStyleType: "circle" }}>
            <li className="skill-item">Arabic</li>
            <li className="skill-item">English</li>
            <li className="skill-item">Français</li>
            <li className="skill-item">Microsoft Word</li>
            <li className="skill-item">Microsoft Excel</li>
            <li className="skill-item">Microsoft PowerPoint</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
