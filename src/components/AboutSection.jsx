import React from 'react';


const AboutSection = () => {
  return (
    <section className="about" id="about">
        
        <div className="about-image">
            <img src="./src/components/Ananya.jpg"/>
            <div className="social-media">
                <a href="https://www.instagram.com/ananya_6082/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/ananya-yadav-783702332/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Ananya-Yadav-Dev"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>

        <div className="about-desc">
            <h3>About Me</h3>
            <h2>I am a Student and an Aspiring Web Developer currently looking for collaborative opportunities</h2>
            <p>Beyond coding, I'm a firm believer in the balance of work and play. Whether it's experimenting with new technologies, contributing to open-source projects, or simply sketching out design ideas, I'm always seeking ways to stay inspired and creative.</p>
            <p>My goal is not just to meet expectations but to exceed them, delivering solutions that not only function flawlessly but also leave a lasting impression.</p>
            <div className="about-personal-info">
                <div><span>Name:</span><span>Ananya Yadav</span></div>
                <div><span>Age:</span><span>21 Years</span></div>
                <div><span>Email:</span><span>ananya12051@gmail.com</span></div>
                <div><span>Hobby:</span><span>Reading Books</span></div>
            </div>
            <button className="btn download-btn">Download CV</button>
        </div>
    
    </section>
  );
};

export default AboutSection;
