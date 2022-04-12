import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

import profilePhoto from "../../assets/photo.jpg";

import styles from "./styles.module.scss";

const AboutMe = () => {
  const email: string = "giedre.stasione@gmail.com";

  const handleCoppyClick = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <section aria-label="about me">
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.header}>
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
          alt="Giedre Stasione"
        />
      </div>

      <div className={styles.text}>
        <h3>Short info about me</h3>
        <p>
          In the past 1.5 year I was learning frontend development as I have
          decided to change my career completely. So far I have learned and have
          experience in HTML, CSS, JavaScript, React.js, Redux, Node.js,
          MongoDb, even a little with React Native. Now I am practicing
          Typescript. This CV is made with React.js, SCSS and Typescript
          <a
            href="https://github.com/Gie-sta/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className={styles.copyIcon} />
          </a>
          .
        </p>
        <p>
          I am looking for a team which could help me grow as a professional. I
          am learning fast and eager to get real experience in the tech company.
          I am ready to dive deep in the work, to be a team member, to grow as a
          professional and as a person. I believe I can be a valuable member of
          a company and a team.
        </p>
        <p>I am a mentee at Women Go Tech, Frontend track.</p>
      </div>
    </section>
  );
};

export default AboutMe;
