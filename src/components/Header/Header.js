import React from "react";
import Navigation from "../Navigation/Navigation";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header className="navbar">
			<div>
				<h2 title="You found an Easter egg! Are there other ones? 🤔">Domenico Barberi</h2>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;
