import React from 'react';
import Project from '../Project/Project';

function Portfolio() {
	const projects = [
		{
			name: 'Shift-Wiz',
			description:
				'This is an employee scheduling application that allows employees to view their schedule, submit PTO, modify their availability, and call in sick all in one place!',
			image: 'shiftwiz.gif',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku',
			],
			github: 'https://github.com/DomenicoBarb/Shift_Wiz_Nico',
			deployed: 'https://shift-wiz.herokuapp.com/',
		},
		{
			name: 'JATE',
			description:
				'A simple text editor that can be used offline. It is a PWA (Progressive Web App) and can be installed on your device.',
			image: 'JATE.png',
			technologies: ['HTML/CSS', 'JavaScript', 'WebPack', 'babel-loader', 'css-loader', 'Workbox'],
			github: 'https://github.com/DomenicoBarb/Text-Editor',
			deployed: 'https://nicos-jate.herokuapp.com/',
		},
		{
			name: 'Password-Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'pass.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/DomenicoBarb/password-generator',
			deployed: 'https://domenicobarb.github.io/password-generator/',
		},
		{
			name: 'Weather Dashboard',
			description: 'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/DomenicoBarb/weather-dashboard',
			deployed: 'https://DomenicoBarb.github.io/weather-dashboard/',
		},
		{
			name: 'Employee Tracker',
			description: "A command-line application to manage a company's employee database, using Node.js, Inquirer, MySQL and console.table/Chalk for styling.",
			image: 'emp-demo.gif',
			technologies: ['HTML/CSS', 'JavaScript', 'MySQL', 'Inquirer', 'Chalk', 'console.table'],
			github: 'https://github.com/DomenicoBarb/employee-tracker',
			deployed: 'https://github.com/DomenicoBarb/employee-tracker',
		},
		{
			name: 'Workday Scheduler',
			description: 'This is a calendar that allows a user to save events for each hour of the day. This app will run in the browser & feature dynamically updated HTML & CSS.',
			image: 'work.png',
			technologies: ['HTML/CSS', 'JavaScript/jQuery', 'Moment.js'],
			github: 'https://github.com/DomenicoBarb/work-day-scheduler',
			deployed: 'https://DomenicoBarb.github.io/work-day-scheduler/',
		},
		{
			name: 'Pokemon Battle',
			description: 'This generator offers valuable information about the selected Pokémon character and the most advantageous opponent in battle.',
			image: 'poke.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/DomenicoBarb/PokemonBattle',
			deployed: 'https://DomenicoBarb.github.io/PokemonBattle/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio:</h1>
			</div>
			<div className="portfolio-div">
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[6]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;