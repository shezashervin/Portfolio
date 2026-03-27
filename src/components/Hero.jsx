import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting">Hi, I'm</h2>
          <h1 className="hero-name gradient-text">Sheza Shervin Jamal</h1>
          <h3 className="hero-title">Full Stack Developer</h3>
          <div className="open-to-work">
            <span className="status-dot"></span>
            Open to Work
          </div>
          <p className="hero-description">
            Full Stack Developer building modern web applications and exploring AI-powered tools.          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a href="/sheza_shervin_SE.pdf" className='btn btn-secondary' target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
