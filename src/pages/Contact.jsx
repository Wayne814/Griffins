function Projects() {
  const projects = [
    {
      title: "Health Assistant AI",
      description: "AI-powered healthcare assistant."
    },
    {
      title: "Employee Management System",
      description: "Manage employee records and departments."
    },
    {
      title: "Drug Discovery AI",
      description: "AI for molecule generation."
    }
  ];

  return (
    <section className="page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;