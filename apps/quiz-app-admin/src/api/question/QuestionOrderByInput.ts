import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  quizId?: SortOrder;
  updatedAt?: SortOrder;
};
