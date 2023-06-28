import SliderCustom from "../Slider/SliderCustom";
import "./Courses.css";

const carouselItems = [
  <div className="course-container" key={1}>
    <div className="course-item1">
      <h1 className="course-name">React-The Complete Guide</h1>
      <h1 className="course-provider">
        Offered by <span className="my-name">Udemy</span>
      </h1>
      <p className="course-description">
        This course covers the fundamentals of building web applications with
        React, a popular JavaScript library for building user interfaces.{" "}
      </p>
      <p className="course-description">
        Throughout the course, I learned the basics of React, including JSX
        syntax, component structure, and state management, as well as more
        advanced topics such as React Hooks, Redux, and Next.js. The course also
        covered best practices for React development, including testing,
        debugging, and deployment.
      </p>
    </div>

    <div className="course-item2">
      <img
        src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
        alt="react-logo"
        className="my-img"
        style={{ width: "75%" }}
      />
    </div>
  </div>,
  <div className="course-container" key={2}>
    <div className="course-item1">
      <h1 className="course-name">Complete C# unity game developer</h1>
      <h1 className="course-provider">
        Offered by <span className="my-name">Udemy</span>
      </h1>
      <p className="course-description">
        Throughout the course, I learned how to create games from scratch using
        Unity and C#, including how to design game mechanics, create game
        objects, program game logic, and implement game physics.
      </p>
      <p className="course-description">
        The course covered various topics such as game design principles, 2D
        game development, user interface design and implementation, and
        multiplayer game development.
      </p>
    </div>

    <div className="course-item2">
      <img
        src="https://store-speedtree-com.exactdn.com/site-assets/uploads/Unity-Logo-White.png?strip=all&lossy=1&quality=73&w=2560&ssl=1"
        alt="unity-logo"
        className="my-img"
        style={{ width: "75%" }}
      />
    </div>
  </div>,
  <div className="course-container" key={3}>
    <div className="course-item1">
      <h1 className="course-name">Web development challenger track</h1>
      <h1 className="course-provider">
        Offered by <span className="my-name">FWD-Udacity</span>
      </h1>
      <p className="course-description">
        Throughout the course, I learned the fundamentals of web development,
        including HTML and CSS, which are the building blocks of the web. I also
        gained experience working with advanced CSS, including responsive
        design, CSS frameworks, and preprocessors.
      </p>
      <p className="course-description">
        Additionally, the course covered WordPress, a popular content management
        system (CMS) used for building websites and blogs.
      </p>
    </div>

    <div className="course-item2">
      <img
        src="https://www.aqskill.com/wp-content/uploads/2021/08/maxresdefault.jpg"
        alt="web-logo"
        style={{ width: "75%" }}
      />
    </div>
  </div>,
  <div className="course-container" key={4}>
    <div className="course-item1">
      <h1 className="course-name">Data analysis challenger track</h1>
      <h1 className="course-provider">
        Offered by <span className="my-name">FWD-Udacity</span>
      </h1>
      <p className="course-description">
        Throughout the course, I learned how to analyze and interpret data using
        various statistical techniques, including measures of central tendency,
        variability, and correlation.
      </p>
      <p className="course-description">
        I also gained experience working with spreadsheets, including
        manipulating data, creating charts and graphs, and using advanced
        formulas and functions. Additionally, the course covered business
        metrics.
      </p>
    </div>

    <div className="course-item2">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/872/358/original/analytics-icon-logo-illustration-data-analysis-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg"
        alt="statistics-logo"
        style={{ width: "80%", borderRadius: "50%" }}
      />
    </div>
  </div>,
  <div className="course-container" key={5}>
    <div className="course-item1">
      <h1 className="course-name">Delf B2</h1>
      <h1 className="course-provider">
        Offered by{" "}
        <span className="my-name">Institut Français d'Égypte au Caire</span>
      </h1>
      <p className="course-description">
        The Diplôme d'études en langue française (DELF) B2 is a certification of
        French language proficiency that is recognized internationally. It is
        designed for non-native speakers of French who have achieved an
        intermediate to advanced level of proficiency in the language.
      </p>
    </div>

    <div className="course-item2">
      <img
        src="https://www.alliancefrancaise.org.tw/wp-content/uploads/2018/09/DelfDalf-CMJN.jpg"
        alt="delf-logo"
        style={{ width: "60%" }}
      />
    </div>
  </div>,
  <div className="course-container" key={6}>
    <div className="course-item1">
      <h1 className="course-provider" style={{ marginBottom: "2rem" }}>
        Attended below courses at{" "}
        <span className="my-name">Cairo University</span>
      </h1>
      <ul>
        <li>
          <p className="course-description-item">
            Programming techniques, Data structures, Design and analysis of
            algorithm
          </p>
        </li>
        <li>
          <p className="course-description-item">
            Logic Circuits, Microprocessor Systems, Computer Architecture
          </p>
        </li>
        <li>
          <p className="course-description-item">
            Computer networks, Operating Systems, Languages and Compilers
          </p>
        </li>
        <li>
          <p className="course-description-item">Software Engineering</p>
        </li>
        <li>
          <p className="course-description-item">
            Machine intelligence, Image Processing and Computer Vision, Pattern
            Recognition
          </p>
        </li>
        <li>
          <p className="course-description-item">Big data and data analysis</p>
        </li>
      </ul>
    </div>

    <div className="course-item2">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/b9/Cairo_University_Crest.png"
        alt="cairo-university-logo"
      />
    </div>
  </div>,
];

function Courses(props) {
  return (
    <div ref={props.refname} className="section">
      <SliderCustom items={carouselItems} />
    </div>
  );
}

export default Courses;
