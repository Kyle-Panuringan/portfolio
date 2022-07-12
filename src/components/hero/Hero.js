import React from "react";
import "./hero.css";
import RM from "../../assets/resume.pdf";
import { MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
function Hero() {
	return (
		<div className="hero-content" id="hero">
			<h2>
				HELLO,<span> MY NAME IS</span>
			</h2>
			<h2>KYLE PANURINGAN</h2>
			<h3>
				<i>&#60;FRONT-END/&#62;</i>
			</h3>
			<div className="hero-social-links">
				<ul>
					<li>
						<a href="mailto:kylepanuringan@gmail.com">
							<MdEmail />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Kyle-Panuringan"
							target="_blank"
						>
							{" "}
							<ImGithub />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/kyle-panuringan/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
			<a className="resume" href={RM} target="_blank">
				Download Resume
			</a>
		</div>
	);
}

export default Hero;
