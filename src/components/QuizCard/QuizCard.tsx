import * as React from "react";

import {Answer, Question} from "../../types";
import Button from "../Button";
import QuestionHeader from "../QuestionHeader";
import Timer from "../Timer";
import {ReactComponent as CorrectIcon} from "../../assets/icons/correct.svg";
import {ReactComponent as WrongIcon} from "../../assets/icons/wrong.svg";
import {htmlDecode} from "../../helpers/htmlDecode";

import styles from "./QuizCard.module.scss";

interface QuizCardProps {
  question: Question;
  actualQuestion: number;
  totalQuestions: number;
  handleAnswerQuestion: (answer: string) => void;
  time: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  actualQuestion,
  totalQuestions,
  handleAnswerQuestion,
  time,
}) => {
  const [isAnswered, setIsAnswered] = React.useState<boolean>(false);
  const [answeres, setAnswers] = React.useState<Answer[]>([]);
  const options = ["A", "B", "C", "D"];

  React.useEffect(() => {
    setAnswers(
      [...question.incorrect_answers, question.correct_answer]
        .sort((a, b) => a.localeCompare(b))
        .map((a, i) => ({icon: options[i], text: a})),
    );
    setIsAnswered(false);
  }, [question]);

  const answerQuestion = (answer: string) => {
    if (!isAnswered) {
      setIsAnswered(() => true);
      setAnswers(
        answeres.map((a) => {
          if (a.text === answer) {
            if (a.text === question.correct_answer) {
              return {...a, icon: <CorrectIcon />};
            } else {
              return {...a, icon: <WrongIcon />};
            }
          }

          return a;
        }),
      );
      handleAnswerQuestion(answer);
    }
  };

  return (
    <div className={styles.container}>
      <Timer time={time} />
      <QuestionHeader
        category={question.category}
        difficulty={question.difficulty}
        question={question.question}
        questionNumber={actualQuestion + 1}
        questionTotal={totalQuestions}
      />
      {answeres.map((answer, key) => {
        return (
          <Button
            key={answer.text}
            icon={answer.icon}
            isAnswered={isAnswered}
            onClick={() => answerQuestion(answer.text)}
          >
            {htmlDecode(answer.text)}
          </Button>
        );
      })}
    </div>
  );
};

export default QuizCard;
