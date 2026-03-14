import { ExternalLink, Github } from 'lucide-react';
import shoppingBasketImg from '../assets/shopping_basket.png';
import lanternCalendarImg from '../assets/lantern_calendar.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AVAILABLE HERE",
      description: "Web application featuring user authentication, CRUD functionality, and relational database models for managing item listings.",
      tech: ["Python", "Django", "MySQL", "HTML/CSS"],
      github: "https://github.com/shezashervin/Available-Here",
      image: shoppingBasketImg
    },
    {
      title: "RAMADAN TRACKER",
      description: "Tracking application managing and persisting user data across sessions with a responsive, component-based interface.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/shezashervin/Ramadan-Tracker",
      image: lanternCalendarImg
    },
    {
      title: "CAR RENTAL SERVICE SYSTEM",
      description: "Relational database system managing customers, vehicles, and rental bookings with normalized tables and referential integrity.",
      tech: ["MySQL", "SQL"],
      github: "https://github.com/shezashervin/Car-Rental-System",
      image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    {
      title: "WATER CONSUMPTION ANALYZER",
      description: "Data analysis tool to monitor monthly water usage, highlight consumption trends, and calculate key metrics.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/shezashervin/Water-Consumption-Analyzer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    {
      title: "AI-Powered Album Cover Generator",
      description: "Streamlit-based AI application that generates album names, taglines, and custom cover art from a single prompt using OpenAI models.",
      tech: ["Python", "Streamlit", "OpenAI API", "GPT-4o Mini", "GPT Image Model"],
      github: "https://github.com/shezashervin/AI-Album-Cover-Generator",
      image: "https://images.unsplash.com/photo-1711054824441-064a99073a0b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
