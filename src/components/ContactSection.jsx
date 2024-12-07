import React from 'react';


const ContactSection = () => {
  return (


  <section className="contact-form" id="contactForm">
	<div className="contact-row">
	<div className="contact-col column-1">
		<div className="contactTitle">
			<h2>Get In Touch</h2>
			<p>Have collaboration ideas?<br/>Feel free to connect.</p>
		</div>
		<div className="contactSocialMedia">
				<a href="https://www.instagram.com/ananya_6082/"><i className="fa-brands fa-instagram"></i></a>
				<a href="https://www.linkedin.com/in/ananya-yadav-783702332/"><i className="fa-brands fa-linkedin-in"></i></a>
				<a href="https://github.com/Ananya-Yadav-Dev"><i className="fa-brands fa-github"></i></a>
			</div>
		<form className="form-1" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="1984319b-b8d1-4d04-9f77-54c4d6be1651"></input>
				<div className="inputGroup">
					<input type="text" name="name" required="required"/>
					<label>Your Name</label>
				</div>

				<div className="inputGroup">
					<input type="email" name="email" required="required"/>
					<label>Email</label>
				</div>
			
			<div className="form-2">
				<div className="inputGroup">
					<center><h6>Write you message here</h6></center>
					<textarea required="required" name="message"></textarea>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
				</div>
				<button className="form-button" type="submit">MESSAGE ME</button>
			</div>
            </form>
	</div>
	</div>
</section>
  );
};

export default ContactSection;
