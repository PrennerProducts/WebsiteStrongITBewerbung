import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import WhoAmI from '../pages/WhoAmi';
import Downlaods from '../pages/Downloads';
import './home.css';

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
          <WhoAmI />
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
