import React from 'react';
import './UeberMich.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function UeberMich() {
  const openLink = (link) => {
    let theForm = document.getElementById('award');
    theForm.submit();
  };

  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="ueberMich-container">
      <h1 className="titel">WhoAmI ...</h1>
      <div className="leftrightcontainer">
        <div className="left">
          <div className="card bg"> </div>
          <div className="card">
            <img src="/images/cap.JPG" alt="Portrait" className="img" />{' '}
          </div>
        </div>

        <div className="right">
          <div className="text-container">
            <p className="text">
              My vision is to leverage digital technology to create a better
              world. As a digital business and software engineering student, I
              am passionate about solving current problems and driving digital
              transformation. With a deep understanding of technology and its
              potential, I am committed to making a positive impact and
              advancing innovation. Join me on this exciting journey to shape
              the future of digital business and make a difference in the world.
            </p>
          </div>
        </div>
      </div>

      <h1 className="titel2">My college journey ...</h1>
      <div className="studicards">
        {/* // 1. Semester */}
        <Card
          style={{
            width: '30rem',
            borderRadius: '30px',
            margin: '10%',
            marginTop: '10%',
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image="/images/c++.jpg"
            alt="c++.img"
            style={{ objectFit: 'fill' }}
          />
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Mein Studium
            </Typography>
            <Typography variant="h5" component="div">
              1. Semester
            </Typography>
            <Typography color="text.secondary">adjective</Typography>
            <Typography variant="body2">
              Das erste Semester war aufregend und spannend zugleich, da hier
              vor allem die Grundlagen geschaffen wurden, auf denen in den
              folgenden Semestern aufgebaut wird. Besonders faszinierend für
              mich waren die Kurse Logik und Berechenbarkeit sowie Methoden der
              Softwareentwicklung I.
              <br />
              <br />
              <ul>
                <li>eCollaboration</li>
                <li>Wisenschaftliches Arbeiten</li>
                <li>Programmiertechnik (Python)</li>
                <li>Systemplanung</li>
                <li>Logik & Berechenbarkeit</li>
                <li>Methoden der Softwareentwicklung I (c)</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* // 2. Semester */}
        <Card
          style={{
            width: '30rem',
            borderRadius: '30px',
            margin: '10%',
            marginTop: '10%',
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image="/images/study.jpg"
            alt="c++.img"
            style={{ objectFit: 'fill' }}
          />
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Mein Studium
            </Typography>
            <Typography variant="h5" component="div">
              2. Semester
            </Typography>
            <Typography color="text.secondary">adjective</Typography>
            <Typography variant="body2">
              Im zweiten Semester war der Focus auf Objekt orientierte
              Programmierung in C++ sowohl in Methoden der Softwareentwicklung 2
              als auch in Algorithmen & Datenstrukturenn. Auch wurden
              Betriebswirtschaftliche Grundlagen vermittelt und ein einblick in
              ERP Systeme vermittelt.
              <br />
              <br />
              <ul>
                <li>Allgemeine BWL</li>
                <li>Mathematik für Software Engineering</li>
                <li>Methoden der Software Entwicklung II (c++)</li>
                <li>Business Solutions ERP</li>
                <li>Algorithmen und Datenstrukturen (c++)</li>
                <li>Rechnerstrukturen & Embedded System (c++)</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* // 3. Semester */}
        <Card
          style={{
            width: '30rem',
            borderRadius: '30px',
            margin: '10%',
            marginTop: '10%',
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image="/images/database.jpg"
            alt="c++.img"
            style={{ objectFit: 'fill' }}
          />
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Mein Studium
            </Typography>
            <Typography variant="h5" component="div">
              3. Semester
            </Typography>
            <Typography color="text.secondary">adjective</Typography>
            <Typography variant="body2">
              Im dritten Semester lag der Fokus auf der Verwendung von der Posix
              Schnittstelle in C. Zudem wurden Kenntnisse in der Nutzung und
              Verwaltung von relationalen und noSQL Datenbanken eingeführt. Die
              Themen Datennetze und die Entwicklung mobiler Systeme,
              insbesondere mit JavaScript, wurden ebenfalls behandelt. Darüber
              hinaus wurden wichtige Aspekte des Projekt- und Prozessmanagements
              vermittelt und die Fertigkeiten in Java durch das Modul "Software
              Engineering I" weiter vertieft.
              <br />
              <br />
              <ul>
                <li>Betriebssysteme (Posix, Bash, C)</li>
                <li>Datenbanken (relationale Datenbanken SQL, noSQL)</li>
                <li>Datennetze</li>
                <li>Entwicklung mobiler Systeme (React Native, JavaScript)</li>
                <li>
                  Projekt & Prozessmanagement (Agiles Projektmanagemen, Scrum)
                </li>
                <li>Software Engineering I (Java)</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* // 4. Semester */}
        <Card
          style={{
            width: '30rem',
            borderRadius: '30px',
            margin: '10%',
            marginTop: '10%',
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image="/images/laptop2.jpg"
            alt="c++.img"
            style={{ objectFit: 'fill' }}
          />
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Mein Studium
            </Typography>
            <Typography variant="h5" component="div">
              4. Semester
            </Typography>
            <Typography color="text.secondary">adjective</Typography>
            <Typography variant="body2">
              Im vierten Semester wurde der Fokus auf fortgeschrittene
              Software-Engineering-Konzepte gelegt, einschließlich der
              Entwicklung von Webanwendungen mit Java und Vaadin im Modul
              "Software Engineering 2". Zudem haben wir uns mit IT-Strategien
              und der Anwendung von Smart Systems und Machine Learning
              auseinandergesetzt. Im Bereich Datenbanken wurde das Wissen durch
              die Anwendung von Hibernate und der programmatischen Nutzung von
              SQL und NoSQL im Modul "Datenbanken 2" erweitert. Des Weiteren
              wurden wichtige Aspekte des Informationsrechts behandelt und ein
              tieferes Verständnis der Architektur von Informationssystemen,
              einschließlich Supercomputern und MQTT, im entsprechenden Modul
              vermittelt.
              <br />
              <br />
              <ul>
                <li>Software Engineering 2 (Java, Vaadin Webapp)</li>
                <li>IT Strategie</li>
                <li>Smart Systems & Machine Learning</li>
                <li>
                  Datenbanken 2 (Hibernate, programmatische Anwendung SQL und
                  NoSQL)
                </li>
                <li>Informationsrecht</li>
                <li>
                  Architektur von Informationssystemen (Supercomputer, MQTT)
                </li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default UeberMich;
