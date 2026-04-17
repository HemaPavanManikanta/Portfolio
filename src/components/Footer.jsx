import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            H<span>.</span>Pavan
          </div>
          <div className="footer-tagline">
            Full Stack Developer · CSE Student · Builder
          </div>
          <div className="footer-links">
             <a href="#about">About</a>
             <a href="#skills">Skills</a>
             <a href="#projects">Projects</a>
             <a href="#experience">Experience</a>
             <a href="#contact">Contact</a>
          </div>
          <div className="footer-copy">
            Built with <span className="heart">♥</span> by Hema Pavan Manikanta · {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
