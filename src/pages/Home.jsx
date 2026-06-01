function Home() {
  return (
    <section className="page hero home-design">
      <div className="hero-inner">
        <aside className="side-socials" aria-hidden="false">
          <a href="#" className="social-vertical" aria-label="Discord">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </a>
          <a href="#" className="social-vertical" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98h4.6V24H.2V8.98zM8.98 8.98h4.42v2.05h.06c.62-1.17 2.14-2.4 4.4-2.4 4.7 0 5.57 3.09 5.57 7.11V24h-4.6v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.09V24H8.98V8.98z"/></svg>
          </a>
          <a href="#" className="social-vertical" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
        </aside>

        <div className="hero-content">
          <span className="overline">Hello, I'm</span>
          <h1>
            Software Developer, <span className="accent">Designer</span>, and a <span className="accent">Problem</span>
            <br />Solver
          </h1>

          <p className="lead">
            Turning ideas into scalable solutions, with clean architecture and interfaces that just click.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="button outline">Hire Me!</a>
            <a href="/public/Griffins_Kimotho_CV.txt" className="button">Download CV</a>
          </div>

          <div className="status-badge">Currently working on <strong>Agrotrack</strong></div>

          <div className="quote-box">
            <blockquote>To obtain, something of equal value must be lost</blockquote>
            <cite>— Hiromu Arakawa</cite>
          </div>
        </div>

        <div className="hero-illustration">
          <img src="/cyber-trafficking.webp" alt="Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Home;