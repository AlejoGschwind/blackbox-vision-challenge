import * as React from "react";

import styles from "./LoadingNext.module.scss";

interface LoadingNextProp {
  loadingNext: number;
}

const LoadingNext: React.FC<LoadingNextProp> = ({loadingNext}) => {
  const rotation = (loadingNext / 10) * 360;
  const progress = {
    transform: `rotate( ${rotation + "deg"})`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.circle} style={progress}>
        <div className={styles.fill} style={progress} />
      </div>
    </div>
  );
};

export default LoadingNext;
