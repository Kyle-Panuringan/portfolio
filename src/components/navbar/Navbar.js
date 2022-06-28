import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Navbar({ icons }) {
	const [active, setActive] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const {
		AiFillHome,
		BsFillPersonFill,
		IoConstructSharp,
		RiContactsBook2Fill,
	} = icons;
	// 2.Hide the "nav-container" when the scrollY is greater than 50
	const showNavFunction = () => {
		if (window.scrollY > 50) {
			setShowNav(false);
		} else {
			setShowNav(true);
		}
	};
	// 1.Hide the "nav-container" when the scrollY is greater than 50
	useEffect(() => {
		window.addEventListener("scroll", showNavFunction);
		return () => {
			window.removeEventListener("scroll", showNavFunction);
		};
	}, []);

	return (
		<nav>
			{/* Hide the box-shadow effect when the nav-links is active */}
			<div
				className={`nav-container ${active && "off-box-shadow"} ${
					showNav || "hide-nav-container"
				} `}
			>
				{/* Nav Header */}
				<div className="nav-header">
					<h1>
						KYLE<span>PANURINGAN</span>
					</h1>

					<button
						className="nav-hamburger"
						onClick={() => setActive(!active)}
					>
						<FaBars />
					</button>
				</div>
				<div
					className={`nav-links-container ${
						active && "show-container"
					}`}
				>
					<ul className="nav-links">
						<li>
							<Link
								to="hero"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={() => setActive(!active)}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="about"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={() => setActive(!active)}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="projects"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={() => setActive(!active)}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={() => setActive(!active)}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
