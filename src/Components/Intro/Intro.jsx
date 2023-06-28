import "./Intro.css";

function Intro(props) {
  return (
    <div ref={props.refname} className="section">
      <div className="intro-container">
        <div className="intro-item1">
          <h1 className="hello">Hello!</h1>
          <h1 className="intro-name">
            I'm <span className="my-name">Millania Sameh</span>
          </h1>
          <h2 className="fresh-grad">A Computer Engineering Fresh Graduate</h2>
          <p className="intro-description">
            I recently graduated from Cairo University Faculty of Engineering
            with a Bachelor's degree in Computer Engineering. My GPA was 3.78.
          </p>
          <p className="intro-description">
            In my free time, I enjoy reading about ancient history.{" "}
          </p>
        </div>

        <div className="intro-item2">
          <img
            src="https://drive.google.com/uc?export=view&id=1YRObXoofyqiUm7L5wamAHWZHi54kr98c"
            alt="my picture"
            className="my-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
