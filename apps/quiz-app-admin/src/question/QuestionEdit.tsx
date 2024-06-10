import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuizTitle } from "../quiz/QuizTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="quiz.id" reference="Quiz" label="quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
