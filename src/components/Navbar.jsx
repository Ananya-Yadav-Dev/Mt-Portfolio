import React from 'react';


const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="logo">Ananya</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <a href="#contactForm" className="button-wrapper">
          <button className="btn contact-btn">Contact</button>
        </a>
        <div className="menu-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
  );
};

export default Navbar;
