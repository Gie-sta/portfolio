import { useMediaQuery } from "react-responsive";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

import space from "../../assets/space.png";
import calc from "../../assets/screen.png";
import moviesBrowse from "../../assets/moviesBrowse.png";
import moviesDetails from "../../assets/moviesDetails.png";

import styles from "./styles.module.scss";

const Work = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 961px)" });
  const isOverlay = () =>
    !isTabletOrMobile ? styles.overlay : styles.no_overlay;

  return (
    <section aria-label="work examples" className={styles.container}>
      <h2>My work examples</h2>
      <div className={styles.works_container}>
        <div className={styles.works}>
          <div className={styles.work}>
            <img src={calc} alt="" />
            <div className={`${isOverlay()} ${styles.blur}`}>
              <h4>Number frequency calculator</h4>
              <div className={styles.links}>
                <a
                  href="https://gie-sta.github.io/Number_frequency_calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <FaExternalLinkAlt className={styles.icon} />
                </a>
                <a
                  href="https://github.com/Gie-sta/Number_frequency_calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code <FaGithub className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.work} ${styles.movies}`}>
            <div className={styles.movies_imgs}>
              <img src={moviesBrowse} alt="" />
              <img src={moviesDetails} alt="" />
            </div>
            <div className={`${isOverlay()} ${styles.blur}`}>
              <h4>
                The Movie Database (TMDB) app
                <span>Made with React Native</span>
              </h4>
              <div className={styles.links}>
                <a
                  href="https://github.com/Gie-sta/movieAppRS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code <FaGithub className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.work}>
            <img src={space} alt="space tourism website | Frontend mentor" />
            <div className={`${isOverlay()} ${styles.blur}`}>
              <h4>
                Space tourism multi-page website
                <span>from Frontend Mentor</span>
              </h4>
              <div className={styles.links}>
                <a
                  href="https://space-tourism-website-gie-sta.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <FaExternalLinkAlt className={styles.icon} />
                </a>
                <a
                  href="https://github.com/Gie-sta/space-tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code <FaGithub className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.work} ${styles.more}`}>
            <FiMoreHorizontal className={styles.moreIcon} />
            <div className={`${isOverlay()} ${styles.blur}`}>
              <h4>See more on </h4>
              <div className={styles.links}>
                <a
                  href="https://github.com/Gie-sta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <FaGithub className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default Work;
