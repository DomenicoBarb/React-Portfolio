import React from 'react';
import portraitImage from '../../assets/portrait/portraitEX.png'

export default function About() {
  return (
    <div className="about-page">
      <h1 className="page-header">About Me!</h1>

      <div className="holder-container">
        <div className="holder">
          <div className="portraitBG"></div>
          <img src={portraitImage} alt="Portrait" title="Not a picture of me but I do have a moustache" className="portrait-image" />
        </div>
      </div>

      <div className="bio-formatting">
        <p className="bio-text-formatting">
          Hello there! My name is Domenico Antonio Barberi but you can call me Nico.
          I am a recent graduate from the Full Stack Web Developer Bootcamp at the University of Toronto! I am well versed with MERN stack applications but also learning Vue.js and Angular.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          My journey into web development stems from a lifelong fascination with technology and
          I have always been drawn to the exciting challenges of the tech world. Web development offered a perfect path for me to dive in and start creating.
          Make sure to check out the resume section to learn more about the various technologies I've learned.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I am a huge believer in constant learning, growth, and positivity. I'm always ready to step out of my comfort zone to explore new challenges.
          But life isn't all about code! When I'm not behind a computer screen, I cherish spending time with my family. As part of an Italian family, this bond has been an essential part of my life since day one.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          Apart from that, my free time is filled with a variety of interests. I enjoy building custom mechanical keyboards (I have multiple Tofu builds and a recent KBD67 with Durock/JWK T1 Tactile Switches in my collection).
          Photography, especially nature and automotive, is another passion of mine; you'll often find me exploring with my Fujifilm X-T4 in Komoka or at Toronto Motorsports Park!
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I also like to play some video games in my free time, with my current main games being Escapse From Tarkov, Death Stranding, RDR2, CS:GO (CS2), and Super Mario Odyssey.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I am always open to new opportunities and challenges. If you have any questions or would like to get in touch, please feel free to reach out to me/connect on GitHub!
          Whether you're interested in collaborating on a project or just want to chat, feel free to get in touch!
        </p>
      </div>
    </div>
  );
}