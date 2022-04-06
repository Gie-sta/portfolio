import React from "react";
import { WorkExperience, Courses, Education } from "../../types/data";

import styles from "./styles.module.scss";

type Props = {
  fields: WorkExperience | Courses | Education;
  dataArray: WorkExperience[] | Courses[] | Education[];
  setFields: React.Dispatch<React.SetStateAction<any>>;
};

const Fields = ({ fields, setFields, dataArray }: Props) => {
  const handleExpClick = (id: number) => {
    if (id === 1) {
      setFields(dataArray[0]);
    } else if (id === 2) {
      setFields(dataArray[1]);
    } else if (id === 3) {
      setFields(dataArray[2]);
    } else {
      setFields(dataArray[3]);
    }
  };

  const activeClass = (id: number) => {
    if (id === fields.id) {
      return styles.active;
    } else {
      return "";
    }
  };

  function isWork(
    item: WorkExperience | Courses | Education
  ): item is WorkExperience {
    return "companyName" in item;
  }
  function isCourses(
    item: WorkExperience | Courses | Education
  ): item is Courses {
    return "organizer" in item;
  }
  function isEducation(
    item: WorkExperience | Courses | Education
  ): item is Education {
    return "institution" in item;
  }
  const name = (item: WorkExperience | Courses | Education) => {
    if (isWork(item)) {
      return item.companyName;
    } else if (isEducation(item)) {
      return item.institution;
    } else if (isCourses(item)) {
      return item.title;
    }
  };

  return (
    <div>
      <ul className={styles.title}>
        {dataArray.map((item) => {
          return (
            <li
              onClick={() => handleExpClick(item.id)}
              className={activeClass(item.id)}
            >
              {name(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fields;
