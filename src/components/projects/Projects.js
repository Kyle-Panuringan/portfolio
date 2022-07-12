import React from "react";
import "./projects.css";
import projectData from "./projectsData";

function Projects() {
	return (
		<div className="projects">
			<h2>Personal Projects</h2>
			<ul>
				{projectData.map((data) => {
					const { id, title, src, description, code, demo } = data;
					return (
						<li key={id}>
							<div>
								<img src={src} alt={title} />
							</div>
							<div className="body-details">
								<h3>{title}</h3>
								<p>{description}</p>
								<div className="body-links">
									<a href={code} target="_blank">
										View Code
									</a>
									<a href={demo} target="_blank">
										Live Demo
									</a>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Projects;
