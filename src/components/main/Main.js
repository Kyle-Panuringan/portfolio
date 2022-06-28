import React from "react";
import "./main.css";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";

function Main() {
	return (
		<main>
			<Hero />
			<Projects />
			<About />
			<Contact />
		</main>
	);
}

export default Main;
