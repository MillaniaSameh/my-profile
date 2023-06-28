import SliderCustom from "../Slider/SliderCustom";
import "./Projects.css";
// import "../App.css";

const carouselItems = [
  <div className="custom-card" key={1}>
    <div>
      <h1 className="project-name">
        <span className="my-name">WeatherEye - Graduation Project</span>
      </h1>
      <h1 className="project-tech">
        Technologies: Python, PyTorch, Machine Learing and Deep Learning
        Techniques
      </h1>
      <p className="project-description">
        The problem addressed in this project is the limitation of traditional
        object detection systems in adverse weather conditions such as rain,
        fog, snow and low light. These weather conditions can significantly
        reduce the visibility of camera sensors, leading to inaccurate or
        incomplete object detection, which can have serious consequences in
        critical applications.
      </p>
      <p className="project-description">
        The objective is to improve the accuracy and reliability of object
        detection in adverse weather conditions, by developing a system that can
        detect and recognize objects in real-time, even in challenging weather
        conditions.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={2}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Twitter - Frontend</span>
      </h1>
      <h1 className="project-tech">
        Technologies: HTML, CSS, JavaScript, ReactJS, Material UI, Bootstrap
      </h1>
      <p className="project-description">
        The project aims to design and implement a software product using
        state-of-the-art tools and technologies in the software industry. The
        product mimics some functionalities of Twitter.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={3}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Simple Programming Language Compiler</span>
      </h1>
      <h1 className="project-tech">Technologies: Lex, Yacc, C Language</h1>
      <p className="project-description">
        This project implement a simple programming language using the Lex and
        Yacc compiler generating packages.
      </p>
      <p className="project-description">Main components implemented:</p>
      <ul>
        <li>
          <p className="project-description-item">
            Lexical analyzer using Lex.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Action rules to produce the output quadruples.
          </p>
        </li>
        <li>
          <p className="project-description-item">Parser using YACC.</p>
        </li>
        <li>
          <p className="project-description-item">Symbol table.</p>
        </li>
        <li>
          <p className="project-description-item">Syntax error handler.</p>
        </li>
        <li>
          <p className="project-description-item">Simple semantic analyzer.</p>
        </li>
      </ul>
    </div>
  </div>,
  <div className="custom-card" key={4}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Game</span>
      </h1>
      <h1 className="project-tech">Technologies: C++, OOP</h1>
      <p className="project-description">
        In this project we built a simple game application that is a mixture
        between{" "}
        <span className="my-name">the Snakes & Ladders and Monopoly </span>{" "}
        games.
      </p>
      <p className="project-description">
        The general idea of the game is four players moving in a grid having
        snakes, ladders, and Cards. The player goal is to get to the last cell
        before anyone else. He also takes advantage of the special cells to
        boost his game and obstruct his opponents. The game ends when a player
        reaches the last cell.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={5}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Restaurant Management</span>
      </h1>
      <h1 className="project-tech">Technologies: C++, data structures</h1>
      <p className="project-description">
        The project involves developing a simulation program for a restaurant.
      </p>
      <p className="project-description">
        The goal is to use computer simulation to assess and improve the service
        provided by the restaurant. The program will be used to determine the
        service criteria for orders, which will maximize average customer
        satisfaction.
      </p>
      <p className="project-description">
        The simulation program will model the kitchen system of the restaurant
        and calculate statistics that measure average customer satisfaction.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={6}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Music Score Reader</span>
      </h1>
      <h1 className="project-tech">
        Technologies: Python, Image processing tools (OpenCV and Scikit-image)
      </h1>
      <p className="project-description">
        The aim of the project is to take from the user an image, scanned or
        digitized, of a musical sheet, and apply the appropriate image
        processing techniques to convert it into audio samples that are played
        back to the user.
      </p>
      <p className="project-description">
        The process was mainly divided into three steps.
      </p>
      <ul>
        <li>
          <p className="project-description-item">
            Pre-processing: the musical sheet would be restored, split into
            lines, stripped from staff lines, making it ready for the next
            steps.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Next: notes detection and identification.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Final Step: the result is converted into audio format the user can
            play.
          </p>
        </li>
      </ul>
    </div>
  </div>,
  <div className="custom-card" key={7}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Hand Gesture Recognition</span>
      </h1>
      <h1 className="project-tech">
        Technologies: Python, Image processing tools (OpenCV and Scikit-image),
        Machine Learning Techniques
      </h1>
      <p className="project-description">
        This project implements a Hand Gesture Recognition System.
      </p>
      <p className="project-description" style={{ marginBottom: "0" }}>
        Given an image containing a single hand, the system classify the hand
        gesture into one of six digits (from 0 to 5). The system handle
        different lighting effects and different hand poses. The machine
        learning pipeline used was:
      </p>
      <ul>
        <li>
          <p className="project-description-item">Preprocessing Module.</p>
        </li>
        <li>
          <p className="project-description-item">
            Feature Extraction/Selection Module.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Model Selection and Training Module.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Performance Analysis Module.
          </p>
        </li>
      </ul>
    </div>
  </div>,
  <div className="custom-card" key={8}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Movie Recommendation System</span>
      </h1>
      <h1 className="project-tech">
        Technologies: Python, PySpark, Machine Learing Techniques
      </h1>
      <p className="project-description">
        The project proposes a system that leverages data analysis and machine
        learning technique to understand movie features and patterns to generate
        accurate recommendations based on these data.
      </p>
      <p className="project-description">
        Additionally, the system also provides another feature which is
        filtering movies based on other works. Improving the quality of movie
        recommendations can lead to increased user engagement, satisfaction, and
        ultimately, revenue for the business related to the movie industry.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={9}>
    <div>
      <h1 className="project-name">
        <span className="my-name">Cinema Movies Reservation System</span>
      </h1>
      <h1 className="project-tech">
        Technologies: HTML, CSS, JavaScript, jQuery, PHP
      </h1>
      <p className="project-description">
        The project requires the creation of a web application for an automated
        system that keeps track of movie schedules, seat availability,
        registered users and ticket reservation system for a cinema.
      </p>
      <p className="project-description">
        The application should enable the cinema management to create and manage
        current and upcoming movie schedules, while allowing users to reserve
        specific seats for their desired screenings.
      </p>
    </div>
  </div>,
  <div className="custom-card" key={10}>
    <div>
      <h1 className="project-name">
        <span className="my-name">
          The Online Documented Health Report (ODHR)
        </span>
      </h1>
      <h1 className="project-tech">Technologies: C#, .NET Framework, SQL</h1>
      <p className="project-description">
        The Project aims to provide doctors with the needed information about a
        patient in only few seconds such as "medical history, blood type any
        kind of allergies".
      </p>
      <p className="project-description">
        In this project, we had 4 types of users.
      </p>
      <ul>
        <li>
          <p className="project-description-item">
            Doctors: They can view and edit patients' profiles.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Patients: They can only view their account.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Pharmacies: Such users can only view the prescriptions part in
            others accounts.
          </p>
        </li>
        <li>
          <p className="project-description-item">
            Investigation labs: They are authorized only to upload the lab
            investigation report results to patients' accounts.
          </p>
        </li>
      </ul>
    </div>
  </div>,
];

function Projects(props) {
  return (
    <div ref={props.refname} className="section">
      <SliderCustom items={carouselItems} />
    </div>
  );
}

export default Projects;
