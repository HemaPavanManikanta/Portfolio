import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const { profile } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.about-stats .stat-card', {
        scrollTrigger: {
          trigger: '.about-stats',
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">01 / Profile</div>
          <h2 className="section-title">Beyond the code</h2>
        </div>

        <div className="bento-grid">
          {/* Main Card: Image & Summary */}
          <div className="bento-card main reveal-text">
            <div className="avatar-wrapper">
              <div className="avatar-frame">
                {profileImg ? (
                  <img src={profileImg} alt={profile.name} className="avatar-img" />
                ) : (
                  <span className="avatar-text">HP</span>
                )}
              </div>
            </div>
            <div className="bento-content">
              <h3>{profile.name}</h3>
              <p>{profile.summary}</p>
            </div>
          </div>

          {/* Card: Education */}
          <div className="bento-card edu reveal-text">
            <div className="icon">🎓</div>
            <h4>Education</h4>
            <p>{profile.university}</p>
            <span className="year">Class of {profile.gradYear}</span>
          </div>

          {/* Card: Focus */}
          <div className="bento-card focus reveal-text">
            <div className="icon">⚡</div>
            <h4>Current Focus</h4>
            <p>Full Stack Development & Scalable Mobile Architectures</p>
          </div>

          {/* Card: Quick Stats */}
          <div className="bento-card stats reveal-text">
            <div className="stat-item">
              <span className="num">5+</span>
              <span className="label">Live Projects</span>
            </div>
            <div className="divider"></div>
            <div className="stat-item">
              <span className="num">4+</span>
              <span className="label">Tech Certs</span>
            </div>
          </div>

          {/* Card: Languages */}
          <div className="bento-card languages reveal-text">
            <h4>Languages</h4>
            <div className="lang-tags">
              <span>English</span>
              <span>Hindi</span>
              <span>Telugu</span>
              <span>French (Basic)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
