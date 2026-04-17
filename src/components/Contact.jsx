import React, { useState } from 'react';
import { Mail, Link, Code2, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const { profile } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Link size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/hema-pavan', href: profile.linkedin },
    { icon: <Phone size={20} />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <MapPin size={20} />, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's build something<br />amazing together.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className={`contact-item ${!item.href ? 'no-click' : ''}`}
                target={item.href && item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </a>
            ))}
            
            <div className="contact-social-footer">
               <a href={profile.github} target="_blank" rel="noreferrer" className="social-pill">
                 <Code2 size={20} /> GitHub Profile
               </a>
            </div>
          </div>

          <div className="contact-form-container">
            {formState === 'success' ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
                <button className="btn-secondary" onClick={() => setFormState('idle')}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Project Inquiry" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
