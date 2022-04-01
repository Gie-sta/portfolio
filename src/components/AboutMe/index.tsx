import { BsLinkedin, BsGithub } from "react-icons/bs";

import { MdContentCopy } from "react-icons/md";

import styles from "./styles.module.scss";

import profilePhoto from "../../assets/photo.jpg";

type Props = {};

const AboutMe = (props: Props) => {
  const email: string = "giedre.stasione@gmail.com";

  const handleCoppyClick = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <section aria-label="about me">
      <div className={styles.content}>
        <div className={styles.info}>
          <div>
            <h1>Giedrė Stašionė</h1>
            <h2>frontend developer</h2>
          </div>
          <div>
            <div>
              <a
                href="https://github.com/Gie-sta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/giedre-stasione/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className={`${styles.icon} ${styles.linkedin}`} />
              </a>
            </div>
            <div className={styles.contacts}>
              <div>Email:</div>
              <p>giedre.stasione@gmail.com</p>
              <MdContentCopy
                className={styles.copyIcon}
                onClick={handleCoppyClick}
              />
              <div className={styles.copyText}>Copy</div>
            </div>
            <div className={styles.contacts}>
              <div>Phone:</div>
              <p>+37061847077</p>
            </div>
          </div>
        </div>
        <img
          className={styles.profile_photo}
          src={profilePhoto}
          alt="Profile"
        />
      </div>

      <div className={styles.text}>
        <h3>Short info about me</h3>
        <p>
          I have been learning frontend development for more than a year now. I
          have mastered HTML, CSS, JavaScript, React.js, also learned Node.js,
          Express.js, MongoDb. Now I am practicing Typescript. This cv is made
          with React.js and Typescript.
        </p>
        <p>
          I am looking for a team which could help me grow as profesional
          frontend developer.
        </p>
        <p>
          I am a mentee at Women Go Tech, Frontend track. I have a mentor who
          guides me in the frontend development world.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
