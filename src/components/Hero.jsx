import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, delay: 0.5 })
        .to(titleRef.current.querySelectorAll('.line'), { opacity: 1, y: 0, stagger: 0.2 }, '-=0.8')
        .to(descRef.current, { opacity: 1, y: 0 }, '-=0.8')
        .to(actionsRef.current, { opacity: 1, y: 0 }, '-=1');
      
      // Ambient orb movement
      gsap.to('.orb-1', {
        x: '30%', y: '20%', duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });
      gsap.to('.orb-2', {
        x: '-20%', y: '-30%', duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });
      gsap.to('.orb-3', {
        x: '20%', y: '-40%', duration: 15, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge" ref={badgeRef}>
            <span className="badge-dot"></span>
            Available for Internships & Projects
          </div>

          <h1 className="hero-title" ref={titleRef}>
            <span className="line">Hema Pavan</span>
            <span className="line gradient-text">Manikanta</span>
          </h1>

          <p className="hero-desc" ref={descRef}>
            3rd-year CSE student building scalable web & mobile applications. Passionate about clean architecture, smooth UX, and turning ideas into production-ready software.
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <a href="#projects" className="btn-primary">
              View My Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
