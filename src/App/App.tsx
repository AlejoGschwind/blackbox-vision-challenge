import * as React from "react";

import Button from "../components/Button";
import Question from "../components/Question";
import Timer from "../components/Timer";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* <header className={styles.header}>
        <h1>
          <img alt="BlackBox Vision" src="/logo.png" width={480} />
        </h1>
        <h3>Lets get this party started</h3>
      </header> */}
      <Timer start={30} />
      <Question
        category="Geografy"
        difficulty="medium"
        question="What is the question?"
        questionNumber={2}
        questionTotal={10}
      />
      <Button icon={"A"}>Hola</Button>
      <Button icon={"B"}>Hola</Button>
      <Button icon={"C"}>Hola</Button>
      <Button icon={"D"}>Hola</Button>
    </main>
  );
};

export default App;
