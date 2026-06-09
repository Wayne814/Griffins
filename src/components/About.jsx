import aboutImage from "../assets/Image.png";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-description">
            Hi, I'm Griffins Kimotho — a Junior Software Engineer studying at 
            Kirinyaga University. I engineer intuitive digital products using React, 
            JavaScript, and modern CSS.
          </p>
          <p>
            By blending AI-powered web experiences with polished UI design, I focus 
            on writing performance-driven code to build elegant, easy-to-use interfaces.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Griffins Kimotho" />
        </div>
      </div>
    </section>
  );
}