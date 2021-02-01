import * as React from "react";

import styles from "./StartPage.module.scss";

interface StartPageProps {
  startGame: () => void;
}

const StartPage: React.FC<StartPageProps> = ({startGame}) => (
  <div className={styles.container}>
    <div onClick={() => startGame()}>Start Game</div>
  </div>
);

export default StartPage;
