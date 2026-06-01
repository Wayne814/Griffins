import { Section } from "./Section";

const projects = [
  {
    name: "Agrotrack",
    desc: "A mobile farming platform for crop monitoring, pest tracking, and real-time weather insights.",
    tags: ["React Native", "PostgreSQL", "TypeScript"],
  },
  {
    name: "EventHub",
    desc: "A modern event management tool for organizers, ticketing, and attendee engagement.",
    tags: ["React", "Node.js", "Express"],
  },
  {
    name: "Ekshop",
    desc: "An e-commerce experience designed for students and local communities.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
];

const getTagClass = (tag) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes("react") || tagLower.includes("vue")) return "react";
  if (tagLower.includes("node") || tagLower.includes("express")) return "node";
  if (tagLower.includes("postgres") || tagLower.includes("mysql")) return "database";
  if (tagLower.includes("python")) return "python";
  if (tagLower.includes("php")) return "php";
  return "";
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="card">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className={`project-tag ${getTagClass(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
