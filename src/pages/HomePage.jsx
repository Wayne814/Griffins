import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Quotes from "../components/Quotes";

export default function HomePage() {
  const navigate = useNavigate();

  const navButtons = [
    { label: "About", route: "/about" },
    { label: "Projects", route: "/projects" },
    { label: "Skills", route: "/skills" },
    { label: "Contact", route: "/contact" },
  ];

  const handleNavClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <main className="pt-24">
        <Hero />
        <div id="about" className="page">
          <About />
        </div>
        <div id="projects" className="page">
          <Projects showCompletedApps={false} />
        </div>
        <div id="skills" className="page">
          <Skills />
        </div>
        <div id="contact" className="page">
          <Contact />
        </div>
        <div id="quotes" className="page">
          <Quotes />
        </div>
      </main>
    </>
  );
}
