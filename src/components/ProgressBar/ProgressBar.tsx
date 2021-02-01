import * as React from "react";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  persentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({persentage}) => {
  const progress = {
    width: `${persentage}vw`,
  };

  if (persentage >= 100) return null;

  return <div className={styles.container} style={progress} />;
};

export default ProgressBar;
