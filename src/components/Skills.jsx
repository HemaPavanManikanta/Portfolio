import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial "Flying" Entry
      const cards = sectionRef.current.querySelectorAll('.skill-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          y: 50,
          rotation: i % 2 === 0 ? -10 : 10,
          scale: 0.9,
          duration: 1.2,
          ease: 'power4.out',
        });
      });

      // 2. Continuous "Zero-Gravity" Floating Loop
      const icons = sectionRef.current.querySelectorAll('.skill-icon');
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: 'random(-10, 10)',
          rotation: 'random(-10, 10)',
          duration: 'random(2, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2 // Stagger the start of floating
        });
      });

      // 3. Progress bars reveal
      const categories = sectionRef.current.querySelectorAll('.skill-card');
      categories.forEach(cat => {
        const bars = cat.querySelectorAll('.bar-fill');
        bars.forEach(bar => {
          gsap.to(bar, {
            scrollTrigger: {
              trigger: cat,
              start: 'top 85%',
            },
            width: bar.dataset.width + '%',
            duration: 1.8,
            ease: 'expo.out',
            delay: 0.5
          });
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
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;  // Max 10 deg

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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Technical Proficiency</div>
          <h2 className="section-title">Tools of the trade</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((cat, idx) => (
            <div 
              key={idx} 
              className="skill-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className="skill-card-head" style={{ transform: 'translateZ(30px)' }}>
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-list" style={{ transform: 'translateZ(20px)' }}>
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="name">{skill.name}</span>
                      <span className="percent">{skill.level}%</span>
                    </div>
                    <div className="bar-bg">
                      <div 
                        className="bar-fill" 
                        style={{ backgroundColor: skill.color }}
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
