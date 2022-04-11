import { RiFileDownloadLine } from "react-icons/ri";

import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Work from "../Work";
import List from "../List";
import { data } from "../../assets/data";
import cv from "../../assets/giedre_stasione_cv.pdf";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cv}>
        <p>CV</p>
        <a href={cv} download="giedre_stasione_cv.pdf">
          <RiFileDownloadLine className={styles.cvIcon} />
        </a>
        <div className={styles.cvText}>Download CV in PDF</div>
      </div>
      <AboutMe />
      <Skills />
      <Work />
      {Object.keys(data).map((key) => (
        <List key={key} {...data[key]} />
      ))}
    </div>
  );
};

export default App;
