import * as React from "react";

import styles from "./EndPage.module.scss";

interface EndPageProps {
  points: number;
  playAgain: () => void;
}

const EndPage: React.FC<EndPageProps> = ({points, playAgain}) => (
  <div className={styles.container}>
    <span className={styles.points}>You score is {points} points.</span>
    <div className={styles.button} onClick={() => playAgain()}>
      Play Again
    </div>
  </div>
);

export default EndPage;
