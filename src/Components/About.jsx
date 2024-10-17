import React from 'react';
import '/src/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="profile-pic-wrapper">
          <img
            src="/src/assets/abhishek.jpg"
            alt="Profile"
            className="profile-pic"
          />
          
        </div>
        <h1 className="about-name">Abhishek</h1>
        <p className="about-text">
          Welcome to my portfolio! I am a passionate developer with a focus on
          delivering high-quality web solutions. With expertise in modern web
          technologies, I am dedicated to building responsive, user-friendly, and
          engaging web applications.
        </p>
        <a href="https://www.linkedin.com/feed/" className="website-link">
          Visit My Website
        </a>
      </div>
    </section>
  );
}

export default About;
