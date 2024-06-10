import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  quiz?: QuizWhereUniqueInput;
};
