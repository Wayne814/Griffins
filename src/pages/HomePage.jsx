import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <div id="about" className="page">
          <About />
        </div>
        <div id="skills" className="page">
          <Skills />
        </div>
        <div id="projects" className="page">
          <Projects />
        </div>
        <div id="contact" className="page">
          <Contact />
        </div>
        <div id="quotes" className="page">
          <Quotes />
        </div>
      </main>
      <div className="home-nav-footer">
        <div className="nav-buttons">
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/skills")}>Skills</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
