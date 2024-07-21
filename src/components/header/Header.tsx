import React from "react";
import styles from "./Header.module.scss";
import Logo from "./logo/Logo";
import Tabs from "./tabs/Tabs";
import MobileTabs from "./mobile-tabs/MobileTabs";
import tabList from "./tabList";

const Header = () => {
  return (
    <header className={styles["app-header"]}>
      <Logo />
      <Tabs tabs={tabList} />
      <MobileTabs tabs={tabList} />
    </header>
  );
};

export default Header;
