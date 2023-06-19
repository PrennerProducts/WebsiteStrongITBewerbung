import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import UeberMich from '../pages/UeberMich';
import Downlaods from '../pages/Downloads';

import './home.css';

// import Contact from './Contact';
// import Gallerie from './Gallerie';
// import UeberMich from './UeberMich';

function Home() {
  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  return (
    componentDidMount(),
    (
      <div className="home-container">
        <div className="hero-container">
          <HeroSection />
        </div>
        <div className="about-container">
          <UeberMich />
        </div>
        <div className="download-container">
          <Downlaods />
        </div>
        {/*<<div className="gallerie-container">
          <Gallerie />
        </div> */}
      </div>
    )
  );
}

export default Home;
