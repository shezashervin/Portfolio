import { Code2, Server, Database, Layout } from 'lucide-react';
import './About.css';

const About = () => {
  const allSkills = [
    "Python", "JavaScript", "C/C++", "HTML5", "CSS3", "Tailwind CSS",
    "React JS", "Django","REST", "MySQL", "Redux Toolkit", "Git", "VS Code", "Gen AI"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-panel">
  <p>
    Hello!
  </p>
  <p>
    I'm Sheza, a full stack developer with experience building web applications using Python, Django, React, MySQL, and JavaScript.
  </p>

  <p>
    I focus on developing clean, maintainable applications and am currently exploring AI integration and modern APIs.
  </p>

  <p>
    Interested in contributing to real-world projects and growing as a full stack developer.
  </p>
</div>

          <div className="skills-container glass-panel">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-tags">
              {allSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
