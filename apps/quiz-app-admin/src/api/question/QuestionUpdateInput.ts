import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionUpdateInput = {
  content?: string | null;
  quiz?: QuizWhereUniqueInput | null;
};
