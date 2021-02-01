import * as React from "react";

import styles from "./Timer.module.scss";

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({time}) => {
  return <span className={styles.container}>{time}</span>;
};

export default Timer;
