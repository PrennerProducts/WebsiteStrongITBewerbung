import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './HeroSection.css';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  const audioRef = useRef(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playSound = () => {
      if (audioElement) {
        audioElement.play().catch((error) => {
          console.log('Failed to play sound:', error);
        });
      }
    };

    const pauseSound = () => {
      if (audioElement) {
        audioElement.pause();
      }
    };

    if (isSoundPlaying) {
      playSound();
    } else {
      pauseSound();
    }
  }, [isSoundPlaying]);

  const handleToggleSound = () => {
    setIsSoundPlaying((prevState) => !prevState);
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
            fontFamily: 'Rowdies',
          }}
          className="typeAnimation"
        />
      </div>

      <video src="/videos/code.mp4" type="video/mp4" autoPlay muted loop />
      {/* <video width="320" height="240" controls>
        <source src="../../public/videos/tunnel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <button onClick={handleToggleSound} className="toggle-sound-button">
        {isSoundPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>

      <audio ref={audioRef} loop>
        <source src="/sounds/gamesound.wav" type="audio/wav" />
      </audio>
    </div>
  );
}

export default HeroSection;
