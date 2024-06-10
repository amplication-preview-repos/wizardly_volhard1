import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  title?: string | null;
};
