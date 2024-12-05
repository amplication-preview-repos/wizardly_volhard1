import { Question } from "../question/Question";

export type Quiz = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  title: string | null;
  updatedAt: Date;
};
