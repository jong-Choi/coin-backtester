"use client";
import Link from "next/link";
import React from "react";
import styles from "./Tab.module.scss";
import { usePathname } from "next/navigation";

const Tab = ({ name, url = "#" }: ITab) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(url);
  const className = isActive ? styles.tab + " " + styles.active : styles.tab;

  return (
    <Link href={url} className={className}>
      {name}
    </Link>
  );
};

export default Tab;
