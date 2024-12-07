import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Install react-icons with `npm install react-icons`

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This creates a sliding effect
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
