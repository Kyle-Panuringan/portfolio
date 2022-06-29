import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import LN from "../../assets/linkedin.svg";
import GH from "../../assets/github.svg";
import { Link } from "react-scroll";

function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		console.log(form);
		emailjs
			.sendForm(
				"service_8358j9k",
				"template_isn6df1",
				form.current,
				"H1sdfKiKpPw3YT-QM"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Email Sent Sucessfully!");
					e.target.reset();
				},
				(error) => {
					alert("Email Sent Fail!");
					console.log(error.text);
				}
			);
	};
	return (
		<div className="contact">
			<h2>Contact Me</h2>
			<div className="form-base">
				<form ref={form} onSubmit={sendEmail}>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Name..."
						required
					/>
					<label type="email" htmlFor="email">
						Gmail:
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Gmail..."
						required
					/>
					<label htmlFor="message">Message: </label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="1"
						placeholder="Message..."
						required
					></textarea>
					<input type="submit" value="Send" />
				</form>
				<div className="form-contact-info">
					<h3>Contact</h3>
					<div className="email-contact">
						<h4>
							<i>You can directly email me at:</i>
						</h4>
						<a href="mailto:kylepanuringan@gmail.com">
							kylepanuringan@gmail.com
						</a>
					</div>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/kyle-panuringan/"
								target="_blank"
							>
								<img src={LN} alt="Linkedin Logo" />
								<p>Linkedin</p>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Kyle-Panuringan"
								target="_blank"
							>
								<img src={GH} alt="GitHub Logo" />
								<p>Github</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Contact;
