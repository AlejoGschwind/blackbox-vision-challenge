import * as React from "react";

import DifficultyBar from "../DifficultyBar";

import styles from "./Question.module.scss";

interface QuestionProps {
  category: string;
  questionNumber: number;
  questionTotal: number;
  question: string;
  difficulty: "easy" | "medium" | "hard";
}

const Question: React.FC<QuestionProps> = (props) => (
  <div className={styles.container}>
    <div className={styles.category}>{props.category}</div>
    <div className={styles.questionSteps}>
      {props.questionNumber} / {props.questionTotal}
    </div>
    <h1 className={styles.question}>{props.question}</h1>
    <DifficultyBar difficulty={props.difficulty} />
  </div>
);

export default Question;
