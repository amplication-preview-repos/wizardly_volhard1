import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  title?: string | null;
};
