import React from "react";
import taps from "./Taps";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["app-header-navigation"]}>
      {taps.map((tap) => {
        return (
          <Link key={tap.name} href={tap.url}>
            {tap.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
