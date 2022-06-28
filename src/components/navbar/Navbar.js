import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const [active, setActive] = useState(false);
	const [showNav, setShowNav] = useState(true);

	const showNavFunction = () => {
		if (window.scrollY > 50) {
			setShowNav(false);
		} else {
			setShowNav(true);
		}
	};

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
					<Link to="/">
						<h1>
							KYLE<span>PANURINGAN</span>
						</h1>
					</Link>
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">Projects</Link>
						</li>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
