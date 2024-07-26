import React, { ReactNode } from "react";
import styles from "./SideNav.module.scss";

const SideNav = ({ navElement = <></> }: { navElement?: ReactNode }) => {
  return (
    <div className={styles["app-body-navigation"]}>
      <nav className="navigation">{navElement}</nav>
      <footer className="footer">
        <h1>
          Almeria<small>©</small>
        </h1>
        <div>
          Almeria ©<br />
          All Rights Reserved 2021
        </div>
      </footer>
    </div>
  );
};

export default SideNav;
