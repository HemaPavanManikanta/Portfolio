import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
      });

      gsap.from('.cert-card', {
        scrollTrigger: {
          trigger: '.certs-grid',
          start: 'top 90%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">My Journey</div>
          <h2 className="section-title">Education & Experience</h2>
        </div>

        <div className="timeline">
          {portfolioData.experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">{item.org}</div>
                <div className="timeline-desc">
                  <ul>
                    {item.points.map((p, pIdx) => (
                      <li key={pIdx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-footer">
          <div className="section-label">Certifications</div>
          <h2 className="section-title small">Credentials</h2>
          
          <div className="certs-grid">
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-icon" style={{ backgroundColor: cert.color }}>{cert.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-type">{cert.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
