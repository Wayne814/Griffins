import githubIcon from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";
import emailIcon from "../assets/Email.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Griffins Kimotho</h3>
          <p>Building sleek web and AI-powered applications with user-first design.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:griffins2k@gmail.com">
            <img src={emailIcon} alt="Email icon" className="footer-icon" /> griffins2k@gmail.com
          </a>
          <a href="tel:+254700196950">+254700196950</a>
          <a href="#contact">Get in touch</a>
        </div>
        <div className="footer-socials" aria-label="Social links">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2026 Griffins Kimotho. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
