import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        <div className="modal-header">
          <div className="modal-badge">{project.status}</div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4>Overview</h4>
            <p>{project.overview}</p>
          </div>
          
          <div className="modal-section">
            <h4>Key Features</h4>
            <ul>
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <div className="modal-section">
            <h4>Tech Stack</h4>
            <div className="stack-tags">
              {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="modal-section">
            <h4>Outcome</h4>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="modal-footer">
          <a href="#" className="modal-btn primary"><ExternalLink size={18} /> Live Demo</a>
          <a href={portfolioData.profile.github} className="modal-btn secondary"><Code2 size={18} /> Source Code</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.project-card');
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: true
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: true
    });
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Selected Works</div>
          <h2 className="section-title">Things I've built</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              onClick={() => {
                setSelectedProject(project);
                document.body.style.overflow = 'hidden';
              }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className={`project-thumb ${project.theme}`} style={{ transform: 'translateZ(30px)' }}>
                <div className="project-icon">{project.icon}</div>
                <div className="project-overlay">
                  <span className="overlay-text">View Case Study</span>
                </div>
              </div>
              <div className="project-info" style={{ transform: 'translateZ(20px)' }}>
                <span className={`status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => {
          setSelectedProject(null);
          document.body.style.overflow = '';
        }} 
      />
    </section>
  );
};

export default Projects;
