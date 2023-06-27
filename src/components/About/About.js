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
          Hello there! My name is Domenico Antonio Barberi but you can call me Nico and I am a recent graduate from the Full Stack Web Developer Bootcamp at the University of Toronto!
          I am experienced with building MERN stack applications but also currently exploring Vue.js (3.X)!
        </p>
        <br></br>
        <p className="bio-text-formatting">
          My journey into web development stems from a lifelong fascination with technology and
          I have always been tinkering with all forms of tech. Web development offered a perfect path for me to dive in and start creating!
          Make sure to explore my portfolio and resume sections to learn more about the various technologies I've learned and projects I have created/been a part of.
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I am a big believer in constant constantly evolving and positivity, if you smile at the world it will eventually smile back.
          I'm always ready to step out of my comfort zone to explore new challenges within or outside tech!
          But life isn't just about web development, when I'm not behind a computer screen I cherish spending time with my family. Being in an Italian family this bond has been an essential part of my life since day one and I always make time for my family (and everyone should!).
        </p>
        <br></br>
        <p className="bio-text-formatting">
          Apart from that, my free time is filled with a variety of interests/hobbies to decompress. I really enjoy building custom mechanical keyboards (I have multiple Tofu builds and a recent KBD67 with Durock/JWK T1 Tactile Switches in my collection).
          Photography, especially nature and automotive, is another passion of mine; you'll often find me exploring with my Fujifilm X-T4 in Komoka or at Toronto Motorsports Park!
        </p>
        <br></br>
        <p className="bio-text-formatting">
          I am also a bit of a gamer, with my current main games being Escapse From Tarkov, Death Stranding, RDR2, CS:GO (CS2), and recently beat Super Mario Odyssey (I highly recommend Super Mario Odyssey for ANY Mario fans 10/10).
        </p>
        <br></br>
        <p className="bio-text-formatting">
          If you want to get in touch please feel free to reach out to me/connect on GitHub or LinkedIn!
          Whether you're interested in collaborating on a project, just want to chat about games or have any questions about one of my projects feel free to get in touch!
        </p>
      </div>
    </div>
  );
}