import React, { useState, useEffect } from "react";
import "./navbarmini.css";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";

function NavbarMini() {
	const [showNavMini, setShowNavMini] = useState(false);

	const showNavMiniFunction = () => {
		if (window.scrollY > 50) {
			setShowNavMini(true);
		} else {
			setShowNavMini(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", showNavMiniFunction);
		return () => {
			window.removeEventListener("scroll", showNavMiniFunction);
		};
	}, []);

	return (
		<div className={`navbar-mini ${showNavMini && "active-mini"}`}>
			<ul>
				<li>
					<Link
						activeClass="active-mini"
						to="hero"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<AiFillHome />
						<p>Home</p>
					</Link>
				</li>
				<li>
					<Link
						activeClass="active-mini"
						to="about"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<BsFillPersonFill />
						<p>About</p>
					</Link>
				</li>
				<li>
					<Link
						activeClass="active-mini"
						to="projects"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<IoConstructSharp />
						<p>Projects</p>
					</Link>
				</li>
				<li>
					<Link
						activeClass="active-mini"
						to="contact"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<RiContactsBook2Fill />
						<p>Contact</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavbarMini;
