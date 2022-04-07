import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { RiFileDownloadLine } from "react-icons/ri";

import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Work from "../Work";
import Fields from "../Fields";
import { data } from "../../assets/data";
import { WorkExperience, Courses, Education } from "../../types/data";
import cv from "../../assets/giedre_stasione_cv.pdf";

import styles from "./styles.module.scss";

const App = () => {
  const [workExp, setWorkExp] = useState<WorkExperience>(
    data.workExperience[0]
  );
  const [courses, setCourses] = useState<Courses>(data.courses[0]);
  const [education, setEducation] = useState<Education>(data.education[0]);

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
      <section aria-label="work experience">
        <h2>My work experience</h2>
        <div className={styles.content}>
          <Fields
            fields={workExp}
            setFields={setWorkExp}
            dataArray={data.workExperience}
          />
          <ul className={styles.describtion}>
            <li>
              <span>From:</span> {workExp.from}
            </li>
            <li>
              <span>Till: </span>
              {workExp.till}
            </li>
            <li>
              <span>Position: </span>
              {workExp.position}
            </li>
            <li>
              <span>Description: </span> {workExp.describtion}
            </li>
            <li>
              <span>What I bring: </span> {workExp.more}
            </li>
          </ul>
        </div>
      </section>
      <section aria-label="courses">
        <h2>My courses, seminares</h2>
        <div className={styles.content}>
          <Fields
            fields={courses}
            setFields={setCourses}
            dataArray={data.courses}
          />
          <ul className={styles.describtion}>
            <li>
              <span>Date:</span>
              {courses.date}
            </li>
            {courses.hours && (
              <li>
                <span>Duration (in hours):</span>
                {courses.hours}
              </li>
            )}
            <li>
              <span> Organizer:</span>
              {courses.organizer}
            </li>
            <li>
              <span> Describtion:</span>
              {courses.describtion}
            </li>
            {courses.certificate && (
              <li>
                <span> Certificate:</span>Yes <FiCheck />
              </li>
            )}
          </ul>
        </div>
      </section>
      <section aria-label="education">
        <h2>Education</h2>
        <div className={styles.content}>
          <Fields
            fields={education}
            setFields={setEducation}
            dataArray={data.education}
          />
          <ul className={styles.describtion}>
            <li>
              <span> Year:</span>
              {education.year}
            </li>
            <li>
              <span>Speciality:</span>
              {education.speciality}
            </li>
            <li>
              <span>Degree:</span>
              {education.degree}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
