import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { profile } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">01 / Profile</div>
          <h2 className="section-title">Beyond the code</h2>
        </div>

        <div className="bento-grid">
          {/* Main Card: Image & Summary */}
          <div className="bento-card main reveal">
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
          <div className="bento-card edu reveal">
            <div className="icon">🎓</div>
            <h4>Education</h4>
            <p>{profile.university}</p>
            <span className="year">Class of {profile.gradYear}</span>
          </div>

          {/* Card: Focus */}
          <div className="bento-card focus reveal">
            <div className="icon">⚡</div>
            <h4>Current Focus</h4>
            <p>Full Stack Development & Scalable Mobile Architectures</p>
          </div>

          {/* Card: Quick Stats */}
          <div className="bento-card stats reveal">
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
          <div className="bento-card languages reveal">
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
