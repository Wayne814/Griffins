export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p className="section-description">
        I build modern, polished products with a blend of frontend, backend, and design expertise.
      </p>

      <div className="skills-grid">
        <div className="card">
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML, CSS, Tailwind, responsive UI, accessible interfaces</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Node.js, Express, REST APIs, MySQL/PostgreSQL, performance tuning, deployment</p>
        </div>

        <div className="card">
          <h3>Design & AI</h3>
          <p>Figma, user flows, visual systems, OpenAI, UX research, creative problem solving</p>
        </div>
      </div>
    </section>
  );
}
