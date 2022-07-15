import React from "react";
import "./main.css";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	);
}

export default Main;
