import { createRoot } from 'react-dom/client';
import './index.css';
import Mainpage from './pages/Mainpage';
import About from './pages/About';
import Service from './pages/Services';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import React, { useEffect, useState } from 'react';
import BackToTopButton from './components/Back-to-top'


// MouseCursor Component
const MouseCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyleOuter = {
    visibility: "visible",
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
  };

  const cursorStyleInner = {
    visibility: "visible",
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
  };

  return (
    <>
      <div className="mouse-cursor cursor-outer" style={cursorStyleOuter}></div>
      <div className="mouse-cursor cursor-inner" style={cursorStyleInner}></div>
    </>
  );
};

// Render the Application
createRoot(document.getElementById('root')).render(
  <div>
    <MouseCursor />
    <Mainpage />
    <About />
    <Service />
    <Skill />
    <Projects />
    <Contact />
    <Footer/>
    <BackToTopButton/>
  </div>
);
