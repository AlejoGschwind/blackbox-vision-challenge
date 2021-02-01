import * as React from "react";

import api from "../api";
import Button from "../components/Button";
import LoadingNext from "../components/LoadingNext";
import ProgressBar from "../components/ProgressBar";
import QuizCard from "../components/QuizCard";
import EndPage from "../pages/EndPage";
import StartPage from "../pages/StartPage";
import {Question} from "../types";

import styles from "./App.module.scss";

enum Status {
  Init = "init",
  Pending = "pending",
  Resolved = "resolved",
  Rejected = "rejected",
}

enum GameStaus {
  Init = "init",
  Playing = "playing",
  Finish = "Finish",
}

const App: React.FC = () => {
  const [actualQuestion, setActualQuestion] = React.useState<number>(0);
  const [questions, setQuestions] = React.useState<any | null>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);
  const [error, setError] = React.useState<string | null>(null);
  const [points, setPoints] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(30);
  const [start, setStart] = React.useState<boolean>(false);
  const [gameStatus, setGameStaus] = React.useState<GameStaus>(GameStaus.Init);
  const waitingNextQuestion = 3;

  const question = questions[actualQuestion];

  React.useEffect(() => {
    if (gameStatus !== GameStaus.Init) return;
    setStatus(Status.Pending);
    api
      .getQuestions(10)
      .then((questions) => {
        setQuestions(questions);
        setStatus(Status.Resolved);
      })
      .catch((error) => {
        setStatus(Status.Rejected);
        setError(error);
      });
  }, [gameStatus]);

  React.useEffect(() => {
    if (!start) return;
    if (time <= 0) {
      handleNextQuestion();

      return;
    }
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, start]);

  // React.useEffect(() => {
  //   if (loadingNext <= 0) {
  //     handleNextQuestion();

  //     return;
  //   }

  //   const loadingInterval = setInterval(() => {
  //     setLoadingNext((loadingNext) => loadingNext - 1);
  //   }, 1000);

  //   return () => clearInterval(loadingInterval);
  // }, [loadingNext]);

  const handleNextQuestion = () => {
    if (actualQuestion < questions.length - 1) {
      // setLoadingNext(0);
      setActualQuestion(actualQuestion + 1);
      setTime(30);
    } else {
      setGameStaus(GameStaus.Finish);
    }
  };

  const handleAnswerQuestion = (answer: any) => {
    if (question.correct_answer === answer) {
      const newPoints = question.type === "boolean" ? 5 : 10;

      setPoints((points) => points + newPoints);
      setTime(3);
    } else {
      setTime(3);
    }
  };

  if (status !== Status.Resolved) {
    return <span style={{color: "white"}}>Loading...</span>;
  }

  if (gameStatus === GameStaus.Init)
    return (
      <StartPage
        startGame={() => {
          setGameStaus(GameStaus.Playing);
          setStart(true);
        }}
      />
    );

  if (gameStatus === GameStaus.Finish)
    return (
      <EndPage
        playAgain={() => {
          setGameStaus(GameStaus.Init);
          setStatus(Status.Init);
          setTime(30);
          setActualQuestion(0);
          setStart(false);
          setPoints(0);
        }}
        points={points}
      />
    );

  return (
    <main className={styles.container}>
      {/* <header className={styles.header}>
        <h1>
          <img alt="BlackBox Vision" src="/logo.png" width={480} />
        </h1>
        <h3>Lets get this party started</h3>
      </header> */}
      <QuizCard
        actualQuestion={actualQuestion}
        handleAnswerQuestion={handleAnswerQuestion}
        question={question}
        time={time}
        totalQuestions={questions.length}
      />
      {/* {loadingNext > 0 ? (
        <span onClick={handleNextQuestion}>Next Question in {loadingNext + " >>"}</span>
      ) : null} */}
      {/* <ProgressBar persentage={((waitingNextQuestion - loadingNext) / waitingNextQuestion) * 100} /> */}
    </main>
  );
};

export default App;
