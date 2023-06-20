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
            imageSrc="/images/logo-application.png"
            title="Open Application"
            description=""
            listItems={[]}
          />
        </a>

        <a href="/documents/lebenslauf.pdf" target="_blank">
          <MyCard
            imageSrc="/images/logo-color.png"
            title="Open Application"
            description=""
            listItems={[]}
          />
        </a>
      </div>
      <div className="goalscontainer">
        <p className="goalsfooter">
          I am excited about the possibilities that lie ahead and grateful for
          the opportunity to pursue my passion in the gaming industry. I am
          eager to contribute to the success of your esteemed gaming studio and
          gain invaluable experience during this internship. Thank you for
          considering my application, and I look forward to the possibility of
          working together on exciting gaming projects.
        </p>
      </div>
    </div>
  );
}

export default Downlaods;
