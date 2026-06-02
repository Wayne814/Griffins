const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "Lua", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: ["SQLite", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"],
  },
  {
    title: "Frameworks",
    items: ["React", "Vue", "Flask", "Express.js", "Jinja", "Discord.js", "Disnake", "REST"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p className="section-description">
        I build modern, polished products with a blend of frontend, backend, and design expertise.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="card">
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
