import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionCreateInput = {
  content?: string | null;
  quiz?: QuizWhereUniqueInput | null;
};
