import styles from "./styles.module.scss";
import { IoLogoHtml5 } from "react-icons/io";
import {
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNpm,
} from "react-icons/si";
import { FaGithub, FaGitAlt } from "react-icons/fa";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section aria-label="my skills" className={styles.container}>
      <h2>My skills</h2>
      <div className={styles.skills}>
        <div>
          <IoLogoHtml5 className={`${styles.icon} ${styles.htmlLogo}`} />
          <div className={styles.skillName}>HTML5</div>
        </div>
        <div>
          <SiCss3 className={`${styles.icon} ${styles.cssLogo}`} />
          <div className={styles.skillName}>CSS3</div>
        </div>
        <div>
          <SiReact className={`${styles.icon} ${styles.reactLogo}`} />
          <div className={styles.skillName}>React.js</div>
        </div>
        <div>
          <SiNodedotjs className={`${styles.icon} ${styles.nodeLogo}`} />
          <div className={styles.skillName}>Node.js</div>
        </div>
        <div>
          <SiMongodb className={`${styles.icon} ${styles.mongoLogo}`} />
          <div className={styles.skillName}>Mongo DB</div>
        </div>
        <div>
          <SiExpress className={`${styles.icon} ${styles.expressLogo}`} />
          <div className={styles.skillName}>Express</div>
        </div>
        <div>
          <SiReact className={`${styles.icon} ${styles.reactNativeLogo}`} />
          <div className={styles.skillName}>React native</div>
        </div>
        <div>
          <SiNpm className={`${styles.icon} ${styles.npmLogo}`} />
          <div className={styles.skillName}>npm</div>
        </div>
        <div>
          <FaGithub className={`${styles.icon}`} />
          <div className={styles.skillName}>Github</div>
        </div>
        <div>
          <FaGitAlt className={`${styles.icon} ${styles.gitLogo}`} />
          <div className={styles.skillName}>Git</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
