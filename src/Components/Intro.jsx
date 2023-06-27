import "../App.css";

function Intro(props) {
  return (
    <div ref={props.refname} className="section">
      <div className="container">
        <div className="item1">
          <h1 style={{ fontSize: "3rem", marginBottom: "0px" }}>Hello!</h1>
          <h1 style={{ fontSize: "3.5rem", marginTop: "0px" }}>
            I'm <span className="my-name">Millania Sameh</span>
          </h1>
          <h2 style={{ marginBottom: "3rem" }}>
            A Computer Engineering Fresh Graduate
          </h2>
          <p className="description">
            I recently graduated from Cairo University Faculty of Engineering
            with a Bachelor's degree in Computer Engineering. My GPA was 3.78.
          </p>
          <p className="description">
            In my free time, I enjoy reading about ancient history.{" "}
          </p>
        </div>

        <div className="item2">
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
