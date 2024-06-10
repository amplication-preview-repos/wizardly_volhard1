import { Quiz } from "../quiz/Quiz";

export type Question = {
  content: string | null;
  createdAt: Date;
  id: string;
  quiz?: Quiz | null;
  updatedAt: Date;
};
