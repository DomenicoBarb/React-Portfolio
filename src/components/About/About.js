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
          Hello there! My name is Domenico Antonio Barberi but you can also call me Nico!
          I am currently honing my skills as a Full Stack Web Developmer at the University of Toronto's Coding Bootcamp!
        </p>
        <br></br>
        <p className="bio-text-formatting">
          My journey into web development stems from a lifelong fascination with technology and
          I have always been drawn to the exciting challenges of the tech world. Web development offered a perfect path for me to dive in and start creating.
          Make sure to check out the resume section to learn more about the various technologies I've learned!
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I am a huge believer in constant learning, growth, and positivity. I'm always ready to step out of my comfort zone to explore new challenges.
          But life isn't all about code! When I'm not behind a computer screen, I cherish spending time with my family. As part of an Italian family, this bond has been an essential part of my life since day one.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          Apart from that, my free time is filled with a variety of interests. I enjoy building custom mechanical keyboards (I have multiple Tofu builds and a recent KBD67 with Durock/JWK T1 - Tactile Switches under my belt).
          Photography, especially nature and automotive, is another passion of mine; you'll often find me exploring with my Fujifilm X-T4. And let's not forget video games, an interest that may even become another career path for me!
          Whether you're interested in collaborating on a project or just want to chat, feel free to get in touch!
        </p>
      </div>
    </div>
  );
}