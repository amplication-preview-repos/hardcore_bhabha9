import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DerangementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="executionTimeNs"
          source="executionTimeNs"
        />
        <TextInput label="method" source="method" />
        <NumberInput label="result" source="result" />
      </SimpleForm>
    </Create>
  );
};