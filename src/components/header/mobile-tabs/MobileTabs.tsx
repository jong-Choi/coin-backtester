"use client";
import React, { useState } from "react";
import styles from "./MobileTabs.module.scss";
import Tab from "../tab/Tab";

const MobileTabs = ({ tabs }: ITabs) => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles["app-header-mobile"]} onClick={onButtonClick}>
      <button className={styles["icon-button"] + " " + "large"}>
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>
      {isOpen && (
        <div className={styles.tabs}>
          {tabs.map((tab, index) => {
            return <Tab key={index} name={tab.name} url={tab.url} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MobileTabs;
