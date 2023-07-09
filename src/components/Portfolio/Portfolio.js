import React from 'react';
import Project from '../Project/Project';

function Portfolio() {
	const projects = [
		{
			name: 'Recall Rumble',
			description:
				'This app is an MERN SPA game! Match the cards in as few clicks as possible. The game is scored and the top 10 scores are saved to the leaderboard.',
			image: 'RR.gif',
			technologies: [
				'HTML',
				'CSS/Ant Design',
				'JavaScript',
				'Bcrypt',
				'Json Web Tokens',
				'apollo-client/server',
				'graphql',
				'dotenv',
				'Stripe',
				'MongoDB',
				'Express.js',
				'React',
				'Node.js',
				'Heroku',
			],
			github: 'https://github.com/Group1Project3/Recall-Rumble',
			deployed: 'https://recallrumble.herokuapp.com/',
		},
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
		{
			name: 'Express Note Taker',
			description: 'This is an application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.',
			image: 'note.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'Express.js'],
			github: 'https://github.com/DomenicoBarb/Note-Taker',
			deployed: 'https://nicos-note-taker.herokuapp.com/',
		},
		{
			name: 'Google Books Search',
			description: 'This is an MERN stack application that allows you to search for books using the Google Books API. You can make a secure account and save books to your library and delete them as well.',
			image: 'google.png',
			technologies: ['HTML/CSS', 'JavaScript', "bcrypt", 'Json Web Tokens', "MongoDB", 'Express.js', 'React', 'Node.js', 'Heroku'],
			github: 'https://github.com/DomenicoBarb/Book-Search-Engine',
			deployed: 'https://nicos-book-search-engine.herokuapp.com/',
		},
		{
			name: 'About Me Page (Netlify)',
			description: 'This is a simple React app just to test some Ant Design components/animations and deploying to Netlify!',
			image: 'React.gif',
			technologies: ['HTML', 'CSS/Ant Design', 'JavaScript', 'React', 'Netlify'],
			github: 'https://github.com/DomenicoBarb/About-Me',
			deployed: 'https://domenicobarberiwho.netlify.app/',
		},
		{
			name: 'About Me Page (React/Amplify)',
			description: 'This is a simple React app just to test some Ant Design components/animations and deploying to AWS!',
			image: 'React.gif',
			technologies: ['HTML', 'CSS/Ant Design', 'JavaScript', 'React', 'AWS/Amplify'],
			github: 'https://github.com/DomenicoBarb/About-Me',
			deployed: 'https://dev.d3cbjkk0ofnz30.amplifyapp.com/',
		},
		{
			name: 'About Me Page (Vue/Netlify)',
			description: 'This is a simple Vue app just to test some Ant Design components/animations and deploying to Netlify!',
			image: 'Vue.gif',
			technologies: ['HTML', 'CSS/Ant Design', 'JavaScript', 'Vue', 'Netlify'],
			github: 'https://github.com/DomenicoBarb/Vue-Js-Test',
			deployed: 'https://domenicobarberiwhovue.netlify.app/',
		},
		{
			name: 'React Typing Test',
			description: 'This is a simple typing test app built with React and deployed to Netlify! This is a SPA (Single Page Application) and can be installed on your device.',
			image: 'TTLoop.gif',
			technologies: ['HTML', 'CSS/Ant Design', 'JavaScript', 'React', 'Netlify'],
			github: 'https://github.com/DomenicoBarb/typing-test',
			deployed: 'https://nicos-react-typing-test.netlify.app/',
		},
	];

	return (
		<section className="testAnimation2">
			<div className="center">
				<h1 className="page-header">My Portfolio:</h1>
			</div>
			<div className="portfolio-div">
				<ul className="flex-row mobile-row2">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[13]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[12]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row2">
					<li className="padding">
						<Project projects={projects[11]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[9]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row2">
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[7]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row2">
					<li className="padding">
						<Project projects={projects[6]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[8]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row2">
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
