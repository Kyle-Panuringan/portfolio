import React from "react";
import "./hero.css";
import { AiFillPhone } from "react-icons/ai";
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
						<AiFillPhone />
					</li>
					<li>
						<MdEmail />
					</li>
					<li>
						<ImGithub />
					</li>
					<li>
						<FaLinkedin />
					</li>
				</ul>
			</div>
			<button>Download Resume</button>
		</div>
	);
}

export default Hero;
