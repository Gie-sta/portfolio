import React from "react";

import "./AboutMe.css";

import profilePhoto from "../../assets/photo.jpg";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section>
      <div>
        <h1>Giedrė Stašionė</h1>
        <div>
          <h2>Phone</h2>
          <p>+37061847077</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>gieddre.stasione@gmail.com</p>
        </div>
        <div>
          <img className="profile-photo" src={profilePhoto} alt="Profile" />
        </div>
      </div>
      <div>
        <h3>Short info about me</h3>
        <p>
          I have been learning frontend development for more than a year now, I
          mastered HTML, CSS, JavaScript, React.js, also learned Node.js,
          Express.js, MongoDb, Now I have started practicing Typescript.
        </p>
        <p>
          I am looking for a team which could help me grow as frontend
          developer.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
