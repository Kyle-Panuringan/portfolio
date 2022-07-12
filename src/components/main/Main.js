import React, { useEffect } from "react";
import "./main.css";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";

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
