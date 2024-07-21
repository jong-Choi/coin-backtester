import React from "react";
import styles from "./Tabs.module.scss";
import Tab from "../tab/Tab";

const Tabs = ({ tabs }: ITabs) => {
  return (
    <div className={styles["app-header-navigation"]}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => {
          return <Tab key={index} name={tab.name} url={tab.url} />;
        })}
      </div>
    </div>
  );
};

export default Tabs;
