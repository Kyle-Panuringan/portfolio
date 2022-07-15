import React from "react";
import "./main.css";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
	React.useEffect(() => {
		AOS.init({
			offset: window.innerHeight * 0.3,
			duration: 1700,
			mirror: true,
		});
		AOS.refresh();
	});
	return (
		<main>
			<div data-aos="fade-down">
				<Hero />
			</div>
			<div data-aos="fade-left">
				<About />
			</div>
			<div data-aos="fade-right">
				<Projects />
			</div>
			<div data-aos="fade-left">
				<Contact />
			</div>
		</main>
	);
}

export default Main;
