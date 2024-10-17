import React from 'react';
import { Link } from 'react-router-dom';
import '/src/Header.css';

function Header() {
  return (
    <header className="header">
      <img 
        src="/src/assets/abhishek.jpg" 
        alt="Profile" 
        className="header-profile-picture" 
      />
      
      <h1 className="header-title">Portfolio...</h1>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

