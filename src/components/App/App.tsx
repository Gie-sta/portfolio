import React from "react";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Work from "../Work";

import styles from "./styles.module.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Skills />
      <Work />
    </div>
  );
};

export default App;
