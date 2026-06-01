import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/projects");
    }
  };

  return (
    <section id="home" className="hero home-design">
      <div className="hero-content">
        <span className="overline">Hello, I'm</span>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Griffins <span className="accent">Kimotho</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Software Developer, Designer, and Problem Solver building scalable web and mobile experiences with clean architecture, polished interfaces, and strong user focus.
        </motion.p>

        <div className="hero-meta">
          <span>AI & Web Developer</span>
          <span>React / Node.js</span>
          <span>Figma / UI Design</span>
        </div>

        <div className="hero-buttons">
          <button type="button" className="button" onClick={() => navigate("/contact")}>
            Hire Me!
          </button>
          <a href="/Griffins_Kimotho_CV.txt" download className="button outline">
            Download CV
          </a>
          <button type="button" className="button outline" onClick={handleReadMore}>
            Read more
          </button>
        </div>

        <div className="quote-box">
          <blockquote>
            “Good design is obvious. Great design is transparent.”
          </blockquote>
          <cite>— Joe Sparano</cite>
        </div>
      </div>

      <div className="hero-image">
        <motion.img
          src={heroImg}
          alt="Griffins Kimotho"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <footer className="hero-footer">
        <p>Want to see more? Explore the projects section below.</p>
        <button type="button" onClick={handleReadMore} className="link-button">
          Read more
        </button>
      </footer>
    </section>
  );
}
