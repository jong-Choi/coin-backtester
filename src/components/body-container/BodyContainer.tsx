import React from "react";
import styles from "./BodyContainer.module.scss";

const BodyContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={styles["app-body"]}>{children}</div>;
};

export default BodyContainer;
