import * as React from "react";

import styles from "./Timer.module.scss";

interface TimerProps {
  start: number;
}

const Timer: React.FC<TimerProps> = ({start}) => {
  const [time, setTime] = React.useState<number>(start);

  React.useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <span className={styles.container}>{time}</span>;
};

export default Timer;
