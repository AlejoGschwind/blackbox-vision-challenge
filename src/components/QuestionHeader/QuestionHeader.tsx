import * as React from "react";

import {htmlDecode} from "../../helpers/htmlDecode";
import DifficultyBar from "../DifficultyBar";

import styles from "./QuestionHeader.module.scss";

interface QuestionHeaderProps {
  category: string;
  questionNumber: number;
  questionTotal: number;
  question: string;
  difficulty: "easy" | "medium" | "hard";
}

const QuestionHeader: React.FC<QuestionHeaderProps> = (props) => (
  <div className={styles.container}>
    <div className={styles.category}>{props.category}</div>
    <div className={styles.questionSteps}>
      {props.questionNumber} / {props.questionTotal}
    </div>
    <h1 className={styles.question}>{htmlDecode(props.question)}</h1>
    <DifficultyBar difficulty={props.difficulty} />
  </div>
);

export default QuestionHeader;
