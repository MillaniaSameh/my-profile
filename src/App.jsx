import { useRef } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import Navigation from "./Components/Navigation";
import Intro from "./Components/Intro/Intro";
import Courses from "./Components/Courses/Courses";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  const intro = useRef(null);
  const courses = useRef(null);
  const skills = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contactme = useRef(null);

  const min_pages = [
    {
      name: "About me",
      ref: intro,
    },
    {
      name: "Experience",
      ref: experience,
    },
    {
      name: "Contact Me",
      ref: contactme,
    },
  ];

  const pages = [
    {
      name: "Intro",
      ref: intro,
    },
    {
      name: "Courses",
      ref: courses,
    },
    {
      name: "Skills",
      ref: skills,
    },
    {
      name: "Experience",
      ref: experience,
    },
    {
      name: "Projects",
      ref: projects,
    },
    {
      name: "Contact Me",
      ref: contactme,
    },
  ];

  return (
    <div>
      <Navigation pages={pages} min_pages={min_pages} />
      <Intro refname={intro} />
      <Courses refname={courses} />
      <Skills refname={skills} />
      <Experience refname={experience} />
      <Projects refname={projects} />
      <ContactMe refname={contactme} />
      <Footer />
    </div>
  );
}

export default App;
