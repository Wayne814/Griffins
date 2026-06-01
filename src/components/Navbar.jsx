import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Home.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = ["home", "about", "skills", "projects", "contact"];
  const routes = {
    home: "/",
    about: "/about",
    skills: "/skills",
    projects: "/projects",
    contact: "/contact",
  };

  const handleNavClick = (item) => {
    navigate(routes[item]);
    setMobileOpen(false);
  };

  const getCurrentPage = () => {
    if (location.pathname === "/") return "home";
    return location.pathname.slice(1);
  };

  const currentPage = getCurrentPage();

  return (
    <nav className={`navbar ${mobileOpen ? "open" : ""}`}>
      <div className="navbar-brand">
        <button type="button" className="brand-button" onClick={() => handleNavClick("home")}>
          <img src={logo} alt="Griffins logo" className="brand-logo" />
          <div>
            <span>Griffins</span>
            <small>Kimotho</small>
          </div>
        </button>
      </div>

      <button
        type="button"
        className="navbar-toggle"
        onClick={() => setMobileOpen((state) => !state)}
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span />
      </button>

      <ul className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
        {links.map((item) => (
          <li
            key={item}
            className={currentPage === item ? "active" : ""}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
