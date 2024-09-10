import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DerangementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="executionTimeNs"
          source="executionTimeNs"
        />
        <TextInput label="method" source="method" />
        <NumberInput label="result" source="result" />
      </SimpleForm>
    </Edit>
  );
};
