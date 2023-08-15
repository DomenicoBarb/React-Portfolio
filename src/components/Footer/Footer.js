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
          loading="lazy"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/domenico-a-barberi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../../images/linkedin-logo.png")}
          alt="LinkedIn"
          className="logo"
          title="My LinkedIn profile"
          loading="lazy"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    </footer>
  );
}

export default Footer;
