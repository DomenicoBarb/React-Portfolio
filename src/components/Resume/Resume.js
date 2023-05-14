import React from "react";
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume:</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/resume/DomenicoBarberi2023.pdf")} download>
				<h4 className='resume-h4'><BsCloudDownload className="BsCloudDownload" /> Download Resume <BsCloudDownload className="BsCloudDownload" />
				</h4>
				</a>
			</div>
			<div className="resume-formatting">
				<h5>Front-End Experience:</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li>
					<li>responsive design</li>
				</ol>
				<br></br>
				<h5>Back-End Experience:</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Experience:</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Database Technologies Experience:</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;