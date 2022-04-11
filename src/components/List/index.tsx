import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { IList } from "../../assets/data";

import styles from "./styles.module.scss";

type Props = IList;

const filter = (key: string) => key !== "id" && key !== "label";
const isNil = (val: any) => val == null;
const isBoolean = (val: any) => "boolean" === typeof val;
const writeBool = (val: any) => (val ? <FcCheckmark /> : "No");

const List = ({ title, items, labels }: Props) => {
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <div>
          <ul className={styles.title}>
            {items.map((item, i) => (
              <li
                key={i}
                onClick={() => setActiveId(i)}
                className={i === activeId ? styles.active : ""}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.describtion}>
          {Object.keys(items[activeId])
            .filter(filter)
            .map((key) =>
              !isNil(items[activeId][key]) ? (
                <li key={key}>
                  <span>{labels[key]}:</span>
                  {isBoolean(items[activeId][key])
                    ? writeBool(items[activeId][key])
                    : items[activeId][key]}
                </li>
              ) : null
            )}
        </ul>
      </div>
    </section>
  );
};

export default List;
