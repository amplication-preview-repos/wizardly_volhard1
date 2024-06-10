import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuizTitle } from "../quiz/QuizTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="quiz.id" reference="Quiz" label="quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
