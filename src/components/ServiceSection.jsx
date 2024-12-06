import React from 'react';


const Services = () => {
  return (
    <section className="services reusable" id="services">
	<header className="headings">
		<h3>My Services</h3>
	</header>
    
	<div className="services-container">
		
		<div className="service-box">
			<div className="icon-wrapper">
				<i className="fa-solid fa-palette"></i>
			</div>
			<h2>UI/UX Design</h2>
			<p>My goal is to not just meet the technical requirements but to create engaging online solutions that leave a lasting impression on users.</p>
			<h3></h3>
		</div>

		<div className="service-box">
			<div className="icon-wrapper">
				<i className="fa-solid fa-code"></i>
			</div>
			<h2>Web Development</h2>
			<p>I am passionate about crafting digital experiences that seamlessly blend functionality and aesthetics. 	I strive to bring ideas to life on the web.</p>
			<h3></h3>
		</div>

		<div className="service-box">
			<div className="icon-wrapper">
				<i className="fa-solid fa-mobile-screen"></i>
			</div>
			<h2>App Development</h2>
			<p>Teechnically sound in developing Android Applications.I am specialising in React-Native which is a library used to build Mobile Apps.</p>
			<h3></h3>
		</div>
	    </div>
    </section>
  );
};

export default Services;
