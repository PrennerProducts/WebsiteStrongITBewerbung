import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import WhoAmI from '../pages/WhoAmi';
import MyCard from '../MyCard';
import './Downloads.css';

// import Contact from './Contact';
// import Gallerie from './Gallerie';
// import UeberMich from './UeberMich';

function Downlaods() {
  return (
    <div className="downloadcontainer">
      <h1 className="titel2">Downloads ...</h1>
      <div className="downloads">
        <a href="/documents/bewerbung.pdf" target="_blank">
          <MyCard
            imageSrc="/images/application-nobg.png"
            title="Open Application"
            description=""
            listItems={[]}
          />
        </a>

        <a href="/documents/bewerbung.pdf" target="_blank">
          <MyCard
            imageSrc="/images/logo-no-background.png"
            title="Open Application"
            description=""
            listItems={[]}
          />
        </a>
      </div>
    </div>
  );
}

export default Downlaods;
