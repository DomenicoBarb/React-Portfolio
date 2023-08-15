import React, { useState } from "react";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon from react-icons
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<Card>
			<div className="card-image-container">
				<Card.Img
					variant="top"
					src={require(`../../images/${image}`)}
					className="card-image"
					loading="lazy"
				/>
				<div className="card-links">
					<a href={gitLink} target="_blank" rel="noopener noreferrer">
						<FaGithub className="github-icon" />
					</a>
					<Card.Link
						href={appLink}
						target="_blank"
						className="card-link app-link"
					>
						Deployed Application
					</Card.Link>
				</div>
			</div>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Technology Used:</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
