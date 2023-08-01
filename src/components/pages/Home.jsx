import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import WhoAmI from '../pages/WhoAmi';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-container">
        <HeroSection />
      </div>
      <div className="about-container">
        <WhoAmI />
      </div>
      {/* <div className="download-container"><Downlaods /></div> */}
    </div>
  );
}

export default Home;
