import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className="app-header-logo">
      <div className={styles["logo"]}>
        <span className={styles["logo-icon"]}>
          <a href="https://codepen.io/havardob/pen/ExvwGBr"></a>
          <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
        </span>
      </div>
    </div>
  );
};

export default Logo;
