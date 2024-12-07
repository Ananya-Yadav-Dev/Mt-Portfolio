import React from 'react';


const MainSection = () => {
  return (
      <div className="hero">
        <div className="hero-text">
          <h3>Hello!</h3>
          <h1>I am Ananya Yadav</h1>
          <h2>
            I am a <span id="element"></span>
          </h2>
          <p>
            I am a student currently studying in Thadomal Shahani Engineering College, Bandra West. I believe in the power of collaboration and continuous learning. I'm currently open to new opportunities and collaborations. If you're looking for a dedicated and forward-thinking web developer to bring your ideas to life, let's connect! Feel free to explore my portfolio, and don't hesitate to reach out for a chat about your next project.
          </p>
          <button className="btn hire-btn">Hire Me</button>
        </div>
        <div className="hero-image">
          <img src="./src/components/hero-img.png" alt="Ananya's hero" />
        </div>
      </div>
  );
};

export default MainSection;
