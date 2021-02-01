import {ReactComponentElement} from "react";

export interface Question {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Answer {
  icon: string | any;
  text: string;
}
