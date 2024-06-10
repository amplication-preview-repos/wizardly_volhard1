import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type QuizWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  title?: StringNullableFilter;
};
