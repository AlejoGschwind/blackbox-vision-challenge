import * as React from "react";

import styles from "./DifficultyBar.module.scss";

interface DifficultyBarProps {
  difficulty: "easy" | "medium" | "hard";
}

const DifficultyBar: React.FC<DifficultyBarProps> = ({difficulty}) => (
  <div className={styles.container}>
    <div className={`${styles.leftBar} ${styles.greenBar}`} />
    <div
      className={`${styles.centerBar} ${
        difficulty === "medium" || difficulty === "hard" ? styles.yellowBar : ""
      }`}
    />
    <div className={`${styles.rightBar} ${difficulty === "hard" ? styles.redBar : ""}`} />
  </div>
);

export default DifficultyBar;
