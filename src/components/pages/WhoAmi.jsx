import React from "react";
import "./WhoAmI.css";
import MyCard from "../MyCard";
import Downlaods from "./Downloads";

function WhoAmI() {
  return (
    <div className="ueberMich-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="titel">WhoAmI ...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="left">
              <div className="card bg"> </div>
              <div className="card">
                <img src="/images/cap.JPG" alt="Portrait" className="img" />{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="right">
              <div className="text-container">
                <p className="text">
                  My vision is to leverage digital technology to create a better
                  world. As a digital business and software engineering student,
                  I am passionate about solving current problems and driving
                  digital transformation. With a deep understanding of
                  technology and its potential, I am committed to making a
                  positive impact and advancing innovation. Join me on this
                  exciting journey to shape the future of digital business and
                  make a difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leftrightcontainer"></div>
      <div className="container pt-10 pt-30">
        <div className="row">
          <div className="col">
            <h1
              className="titel2"
              style={{ paddingBottom: "10rem !important;" }}
            >
              My college journey ...
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/*  1. Semester */}
            <MyCard
              imageSrc="/images/c++.jpg"
              title="Unlocked Skills from the 1st Semester"
              description="The first semester was both thrilling and exciting as it laid the
          foundation upon which subsequent semesters will build. I found the
          courses on logic and computability, as well as methods of software
          development I, particularly fascinating."
              listItems={[
                "eCollaboration",
                "Wissenschaftliches Arbeiten",
                "Programmiertechnik (Python)",
                "Systemplanung",
                "Logik & Berechenbarkeit",
                "Methoden der Softwareentwicklung I (c)",
              ]}
            />
          </div>
          <div className="col-sm-6">
            {/*  2. Semester */}
            <MyCard
              imageSrc="/images/laptop4.jpg"
              title="Skill Power-Up from the 2nd Semester"
              description="
          In the second semester, the focus was on object-oriented programming in C++, both in Software Development 2 methods and Algorithms & Data Structures. Additionally, fundamental concepts of business administration were taught, providing an insight into ERP systems."
              listItems={[
                "Allgemeine BWL",
                "Mathematik für Software Engineering",
                "Methoden der Software Entwicklung II (c++)",
                "Business Solutions ERP",
                "Algorithmen und Datenstrukturen (c++)",
                "Rechnerstrukturen & Embedded System (c++)",
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/*  3. Semester */}
            <MyCard
              imageSrc="/images/database.jpg"
              title="Skill Tree Progression from the 3rd Semester"
              description="In the third semester, the focus was on utilizing the Posix interface in C. Furthermore, knowledge in the usage and management of relational and NoSQL databases was introduced. Topics such as data networks and mobile system development, particularly with JavaScript, were also covered. In addition, important aspects of project and process management were taught, and Java skills were further enhanced through the Software Engineering I module."
              listItems={[
                "Betriebssysteme (Posix, Bash, C)",
                "Datenbanken (relationale Datenbanken SQL, noSQL)",
                "Datennetze",
                "Entwicklung mobiler Systeme (React Native, JavaScript)",
                "Projekt & Prozessmanagement (Agiles Projektmanagemen, Scrum)",
                "Software Engineering I (Java)",
              ]}
            />
          </div>
          <div className="col-sm-6">
            <MyCard
              imageSrc="/images/laptop2.jpg"
              title="Power Level Raised from the 4th Semester"
              description="In the fourth semester, the focus was on advanced software engineering concepts, including the development of web applications using Java and Vaadin in the Software Engineering 2 module. We also delved into IT strategies and the application of smart systems and machine learning. In the field of databases, knowledge was expanded through the use of Hibernate and the programmatic utilization of SQL and NoSQL in the Databases 2 module. Furthermore, important aspects of information law were addressed, fostering a deeper understanding of information system architecture, including supercomputers and protocolls like MQTT, in the respective module."
              listItems={[
                "Architektur von Informationssystemen (Supercomputer, MQTT)",
                "Informationsrecht",
                "Software Engineering 2 (Java, Vaadin Webapp)",
                "Smart Systems & Machine Learning",
                "Datenbanken 2 (Hibernate, programmatische Anwendung SQL und NoSQL)",
                "IT Strategie",
              ]}
            />
          </div>
        </div>
      </div>
      {/* <div className="studicards"></div> */}
      <div className="goals container">
        <div className="row">
          <div className="col">
            <h1 className="titel3"> My goals...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* shortTermGoals */}
            <MyCard
              imageSrc="/images/now.jpg"
              title="My short-term goals"
              description="In my current pursuit of a career in the gaming industry, my primary objective is to secure an internship at the respected game development studio stillalive. This internship presents an invaluable opportunity for me to further develop my skills and gain hands-on experience in game development. I am eager to contribute to the team's projects and immerse myself in the creative and collaborative environment of the studio. By working alongside industry professionals, I aim to enhance my knowledge and skills in game development and learn from the best in the field. Additionally, I am determined to successfully complete my current semester, ensuring a solid academic foundation as I embark on this internship. I am excited to learn new techniques, tools, and methodologies that are essential to the game development process. Through this internship, I hope to expand my skill set and make significant progress towards my long-term goal of becoming a skilled game developer."
              listItems={[]}
            />
          </div>
          <div className="col-sm-6">
            {/* longTermGoals */}
            <MyCard
              imageSrc="/images/longterm2.jpg"
              title="My long-term goals"
              description="My long-term goal is to be actively involved in the creation of an AAA game. I aspire to contribute my creativity, technical expertise, and passion for gaming to the development of a groundbreaking and immersive gaming experience. With a deep understanding of game development principles and a solid foundation in programming and game design, I am confident in my ability to take on the challenges associated with developing an AAA game. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the industry. By collaborating with talented professionals and working in a dynamic team environment, I aim to refine my skills, broaden my horizons, and ultimately make a significant contribution to the gaming industry. I am driven by the desire to create memorable experiences for gamers and contribute to the advancement of the medium. With determination, perseverance, and a strong work ethic, I am confident in my ability to realize my long-term goal of developing an AAA game."
              listItems={[]}
            />
          </div>
        </div>
      </div>
      <div className="goalscontainer"></div>
      <Downlaods />
    </div>
  );
}

export default WhoAmI;
