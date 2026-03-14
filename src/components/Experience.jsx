import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Python Full Stack Development + Gen AI Intern",
      company: "HACA",
      duration: "Sept 2025 - Mar 2026",
      description:
        "Worked on Python-based full stack development projects involving Django applications and MySQL database integration. Practiced structured backend development, debugging, and modular coding workflows.",
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University",
      duration: "Jul 2022 - Aug 2025",
      description:
        "Specialized in Computer Applications and Software Development fundamentals.",
    }
  ];

  const certifications = [
    {
      title: "Python Full Stack Development + Gen AI",
      organization: "HACA",
      duration: "Sept 2025 - Mar 2026",
      description:
        "Comprehensive training in full stack development, Python, Django, MySQL, and Generative AI fundamentals.",
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience, Education & Certifications</h2>

        <div className="timeline-container">

          {/* Experience */}
          <div className="timeline-column">
            <h3 className="column-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel">
                    <h4 className="timeline-role">{exp.role}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-date">{exp.duration}</span>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="timeline-column">
            <h3 className="column-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel">
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <span className="timeline-company">{edu.institution}</span>
                    <span className="timeline-date">{edu.duration}</span>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="timeline-column">
            <h3 className="column-title">Certifications</h3>
            <div className="timeline">
              {certifications.map((cert, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-panel">
                    <h4 className="timeline-role">{cert.title}</h4>
                    <span className="timeline-company">{cert.organization}</span>
                    <span className="timeline-date">{cert.duration}</span>
                    <p className="timeline-desc">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;