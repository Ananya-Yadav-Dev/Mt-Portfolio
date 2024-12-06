import React from 'react';


const SkillSection = () => {
  return (
    <section id="skills">
        <div className="container">
            <h2 className="section-heading text-center">Skills</h2>
            <p className="text-center muted-text mt-3 mb-4">Here are some of the technologies that are part of my current stack:</p>
            <div className="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/HTML.svg" alt="HTML"/>
                        <p className="skill-name">HTML</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/CSS.svg" alt="CSS"/>
                        <p className="skill-name">CSS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/JS.svg" alt="JavaScript"/>
                        <p className="skill-name">JS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/NodeJS.svg" alt="NodeJS"/>
                        <p className="skill-name">NodeJS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/ExpressJS.svg" alt="ExpressJS"/>
                        <p className="skill-name">ExpressJS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/EJS.svg" alt="EJS"/>
                        <p className="skill-name">EJS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/Bootstrap.svg" alt="Bootstrap"/>
                        <p className="skill-name">Bootstrap</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/MySQL-logo.png" alt="C"/>
                        <p className="skill-name">MySQL</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/Python.svg" alt="Python"/>
                        <p className="skill-name">Python</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/MongoDB.svg" alt="MongoDB"/>
                        <p className="skill-name">MongoDB</p>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img className="skill-image" src="/src/assets/skills/react-logo.png" alt="MongoDB"/>
                        <p className="skill-name">React</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SkillSection;
