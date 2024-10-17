import React from 'react';
import '/src/Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="text-container animated-text">
          <h1 className="home-heading">Hello, I'm Abhishek</h1>
          <p className="home-description">
            A passionate web developer creating responsive and dynamic web experiences.
          </p>
        </div>
        <div className="profile-container">
          <img
            src="/src/assets/abhishek.jpg"
            alt="Profile"
            className="square-profile-pic"
          />
        </div>
      </div>
      <footer className="home-footer">
        <p>© 2024 Abhishek. All Rights Reserved.</p>
      </footer>
    </section>
  );
}

export default Home;
