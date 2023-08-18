import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";

function Project(props) {
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const description = currentProject.description;
  const image = currentProject.image;
  const techs = currentProject.technologies;
  const appLink = currentProject.deployed;
  const gitLink = currentProject.github;

  // Define the getTechs function within the component
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

  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Set up a useEffect to load the image
  useEffect(() => {
    const img = new Image();
    img.src = require(`../../images/${image.src}`);
    img.onload = () => {
      setIsLoading(false);
    };
  }, [image.src]);

  // Set up a useEffect to create the flickering effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setShowPlaceholder((prevShowPlaceholder) => !prevShowPlaceholder);
    }, 500); // Adjust the interval duration as needed

    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  // Function to render the image or placeholder
  const renderImage = () => {
    if (isLoading) {
      return (
        <div className={`placeholder-silhouette${showPlaceholder ? ' flicker' : ''}`} />
      );
    } else {
      return (
        <Card.Img
          variant="top"
          src={require(`../../images/${image.src}`)}
          className="card-image"
          loading={image.loading}
        />
      );
    }
  };

  return (
    <Card>
      <div className="card-image-container">
        {renderImage()}
        <div className="card-links">
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
          <Card.Link href={appLink} target="_blank" className="card-link app-link">
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