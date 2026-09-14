"use client";
import styles from "./page.module.css";
import * as devLogData from "./devLogs.json";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect } from "react";
import DropdownComponent from "../components/DropdownComponent.jsx";

const DITD = () => {
  //   useEffect(() => {
  //     const id = sessionStorage.getItem("scrollTarget");
  //     if (id) {
  //       document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  //       sessionStorage.removeItem("scrollTarget");
  //     }
  //   }, []);

  const devLogs = devLogData.default.DevLogs;

  return (
    <div className={styles.ditdContainer}>
      <div className={styles.devLogContainer}>
        <h2 className={styles.devLogTitle}>Down in the Dumps Dev Logs</h2>
        {devLogs.map((devLog, idx) => {
          return (
            devLog.showPost && (
              <DropdownComponent
                loading="eager"
                key={"devLog" + idx}
                devLog={devLog}
                devLogNumber={idx}
              />
            )
          );
        })}
      </div>
      {/* <div className={styles.devLogNavigation}></div> */}
    </div>
  );
};

export default DITD;
