import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/DomenicoBarb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../images/github-logo.png")}
						alt="Github"
						className="logo"
						title="My GitHub profile"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;