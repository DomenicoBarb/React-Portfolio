import React from "react";
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume:</h1>
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
					<li>Ant Design 5</li>
					<li>Responsive/Mobile First Design</li>
					<li>Version Control/Git</li>
				</ol>
				<br></br>
				<h5>Back-End Experience:</h5>
				<ol>
					<li>NodeJS</li>
					<li>Express</li>
					<li>APIs (Moment.js, PokeAPI, OpenWeather)</li>
					<li>MVC (Model View Controller)</li>
					<li>REST (RESTful API Design)</li>
					<li>PWA (Progressive Web Applications)</li>
				</ol>
				<br></br>
				<h5>Database Technologies Experience:</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>MongoDB Atlas Database</li>
					<li>Mongoose</li>
				</ol>
				<br></br>
				<h5>Dev Tool Experience:</h5>
				<ol>
					<li>VS Code</li>
					<li>Git</li>
					<li>npm</li>
					<li>Webpack</li>
					<li>Jest</li>
					<li>Nano (Text editor)</li>
					<li>Vim (Text editor)</li>
				</ol>
				<br></br>
				<h5>Deployment/Hosting Platforms Experience:</h5>
				<ol>
					<li>Heroku</li>
					<li>GitHub Pages</li>
					<li>Netlify</li>
					<li>AWS/Amplify</li>
				</ol>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/resume/DomenicoBarberiResume.pdf")} download>
					<h4 className='resume-h4'><BsCloudDownload className="BsCloudDownload" /> Download Resume <BsCloudDownload className="BsCloudDownload" />
					</h4>
				</a>
			</div>
		</section>
	);
}

export default Resume;