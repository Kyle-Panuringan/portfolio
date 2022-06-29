import React from "react";
import "./about.css";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/javascript.svg";
import RT from "../../assets/react.svg";
import GI from "../../assets/git.svg";
import GH from "../../assets/github.svg";
function About() {
	return (
		<div className="about" id="about">
			<h2>About Me</h2>
			<p>
				Hello my name is Kyle Panuringan, I am looking for a opportunity
				to get a full-time job as a Entry/Junior Front-end Developer and
				learn many new things that will help me to improve more on this
				field.
			</p>
			<hr />
			<h2>Current Tech Stack</h2>
			<ul>
				<li>
					<img src={HTML} alt="HTML5 Logo" />
					<p>HTML5</p>
				</li>
				<li>
					<img src={CSS} alt="CSS3 Logo" />
					<p>CSS3</p>
				</li>
				<li>
					<img src={JS} alt="JavaScript Logo" />
					<p>JavaScript</p>
				</li>
				<li>
					<img src={RT} alt="React Logo" />
					<p>React</p>
				</li>
				<li>
					<img src={GI} alt="Git Logo" />
					<p>Git</p>
				</li>
				<li>
					<img src={GH} alt="GitHub Logo" />
					<p>GitHub</p>
				</li>
			</ul>
		</div>
	);
}

export default About;
