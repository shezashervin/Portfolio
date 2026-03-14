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
              Hello! I'm Sheza, a software developer with hands-on experience building web applications
              using Python, Django, React, MySQL, and JavaScript. With a BCA background, I have developed
              projects implementing CRUD operations, authentication, and relational database integration.
            </p>

            <p>
              I enjoy building structured and reliable applications from backend logic to user interfaces,
              focusing on clean, maintainable code and systematic problem solving.
            </p>

            <p>
              I am also exploring AI integration in applications and learning how modern APIs and tools
              can enhance software functionality and user experience.
            </p>

            <p>
              I'm interested in contributing to real-world projects, collaborating with development teams,
              and continuously improving my skills as a full stack developer.
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
