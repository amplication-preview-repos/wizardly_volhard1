import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adminName" source="adminName" />
        <TextInput label="permissions" multiline source="permissions" />
      </SimpleForm>
    </Create>
  );
};
