import React from "react";

function Footer() {
  return (
    <footer className="footer">
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
        />
      </a>
	  {/* placeholder for linkedin */}
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
        />
      </a>
    </footer>
  );
}

export default Footer;
