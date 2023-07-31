import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './HeroSection.css';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  const audioRef = useRef(null);

  const handleCheckSecurity = () => {
    // Füge hier den Link zur anderen Seite ein, auf der du die Vorlage verwenden möchtest
    const securityCheckUrl = 'https://security.lupre.at';
    window.open(securityCheckUrl, '_blank');
  };

  return (
    <div className="hero-container">
      <div className="begruessungsDiv">
        <TypeAnimation
          sequence={[
            1000, // Waits 1s
            'Welcome to my application page...', // Types 'One'
            2000, // Waits 1s
            '...get to know me...', // Types 'One'
            2000, // Waits 1s
            '...lets hit the scroll!', // Types 'One'
            2000, // Waits 1s

            // Waits 2s
            '', // Types 'Three' without deleting 'Two'
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
          repeat={false}
          speed={35}
          deletionSpeed={75}
          style={{
            top: '250px',
            fontSize: '5em',
            paddingLeft: '0px',
            marginTop: '200px',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'Source Code Pro',
            fontWeight: 700,
          }}
          className="typeAnimation"
        />
      </div>

      <video src="/videos/code1.mp4" type="video/mp4" autoPlay muted loop />

      <button onClick={handleCheckSecurity} className="check-security-button">
        Check System Security
      </button>

      <audio ref={audioRef} loop>
        <source src="/sounds/gamesound.wav" type="audio/wav" />
      </audio>
    </div>
  );
}

export default HeroSection;
