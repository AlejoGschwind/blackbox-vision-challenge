import {Question} from "./types";

export default {
  getQuestions: (numberOfQuestions: number): Promise<Question> =>
    fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}`)
      .then((data) => data.json())
      .then((json) => json.results),
};
