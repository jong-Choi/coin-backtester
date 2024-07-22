import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <main className={styles.main}>
      <div className={styles.app}>{children}</div>
    </main>
  );
};

export default Container;
