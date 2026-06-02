import aboutImage from "../assets/Image.png";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-description">
            Hi, I'm Griffins Kimotho — a second-year student at Kirinyaga University focused on AI-powered web experiences and polished UI design.
          </p>
          <p>
            I build intuitive digital products with clean architecture, strong performance, and thoughtful interfaces that feel professional and easy to use.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Griffins Kimotho" />
        </div>
      </div>
    </section>
  );
}
