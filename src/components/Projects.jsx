import { Section } from "./Section";
import agrotrackImage from "../assets/chertnodes.jpg";
import eventHubImage from "../assets/protectx.png";
import ekshopImage from "../assets/kahoot.png";

const featuredProjects = [
  {
    name: "Agrotrack",
    desc: "A mobile farming platform for crop monitoring, pest tracking, and real-time weather insights.",
    tags: ["React Native", "PostgreSQL", "TypeScript"],
    image: agrotrackImage,
    alt: "Agrotrack mobile interface",
  },
  {
    name: "EventHub",
    desc: "A modern event management tool for organizers, ticketing, and attendee engagement.",
    tags: ["React", "Node.js", "Express"],
    image: eventHubImage,
    alt: "EventHub dashboard",
  },
  {
    name: "Ekshop",
    desc: "An e-commerce experience designed for students and local communities.",
    tags: ["PHP", "MySQL", "JavaScript"],
    image: ekshopImage,
    alt: "Ekshop storefront",
  },
];

const completedApps = [
  {
    name: "ChertNodes",
    desc: null,
    tags: ["HTML", "SCSS", "Python", "Flask", "CSS", "Express", "Node.js", "React", "Discord.js"],
  },
  {
    name: "Kahoot Answers Viewer",
    desc: "Get answers to your kahoot quiz",
    tags: ["HTML", "CSS", "JavaScript", "Flask", "Vue", "TypeScript", "Less"],
  },
  {
    name: "ProtectX",
    desc: null,
    tags: ["Python", "Flask", "Node.js", "Express"],
  },
  {
    name: "Minecraft Servers Hosting",
    desc: "Host and manage minecraft servers",
    tags: ["Node.js", "Python", "Flask"],
  },
  {
    name: "Discord Anti-Crash Bot",
    desc: "Protect your discord server from crash attacks",
    tags: ["Discord.js", "Node.js", "Python"],
  },
  {
    name: "Kotik Bot",
    desc: "Multi-functional discord bot. You're using it rn",
    tags: ["Discord.js", "Node.js", "Python"],
  },
  {
    name: "Portfolio",
    desc: "You're using it rn",
    tags: ["React", "Vite", "CSS", "JavaScript"],
  },
];

const getTagClass = (tag) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes("react") || tagLower.includes("vue")) return "react";
  if (tagLower.includes("node") || tagLower.includes("express")) return "node";
  if (tagLower.includes("postgres") || tagLower.includes("mysql")) return "database";
  if (tagLower.includes("python")) return "python";
  if (tagLower.includes("php")) return "php";
  if (tagLower.includes("discord")) return "discord";
  return "";
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <div key={project.name} className="card">
            <img src={project.image} alt={project.alt} className="project-card-image" />
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

      <div className="completed-apps">
        <h3>Completed Apps</h3>
        <div className="apps-list">
          {completedApps.map((app) => (
            <div key={app.name} className="app-item">
              <h4>{app.name}</h4>
              {app.desc && <p className="app-desc">{app.desc}</p>}
              <div className="app-tags">
                {app.tags.map((tag) => (
                  <span key={tag} className={`app-tag ${getTagClass(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
