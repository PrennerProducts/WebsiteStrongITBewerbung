import React from 'react';
import '../../App.css';
import MyCard from '../MyCard';
import './Downloads.css';
import AsciArt from '../AsciArt';

// import Contact from './Contact';
// import Gallerie from './Gallerie';
// import UeberMich from './UeberMich';

function Downlaods() {
  return (
    <div className="downloadcontainer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="titel2">Downloads ...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a
              href="/documents/bewerbung.pdf"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <MyCard
                imageSrc="/images/Application.png"
                title="My Application"
                description=""
                listItems={[]}
              />
            </a>
          </div>
          <div className="col-sm-6">
            <a
              href="/documents/lebenslauf.pdf"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <MyCard
                imageSrc="/images/cv.png"
                title="My CV"
                description=""
                listItems={[]}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="downloads"></div>
      <div className="bus">
        <AsciArt />
      </div>
      <div className="row mt-5" style={{ width: '100%', margin: 'auto' }}>
        <div className="col">
          <p className="goalsfooter">
            I am excited about the opportunities that lie ahead and I am
            grateful for the chance to pursue my passion in the IT security
            industry. I am eager to contribute to the success of your esteemed
            company, Strong-IT, and gain invaluable experience during this
            internship. Thank you for considering my application, and I look
            forward to the possibility of working together on crucial IT
            security projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Downlaods;
