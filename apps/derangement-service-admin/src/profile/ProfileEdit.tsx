import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="fastDerangement" source="fastDerangement" />
        <NumberInput step={1} label="fastTimeNs" source="fastTimeNs" />
        <NumberInput label="naiveDerangement" source="naiveDerangement" />
        <NumberInput step={1} label="naiveTimeNs" source="naiveTimeNs" />
        <NumberInput step={1} label="testSize" source="testSize" />
      </SimpleForm>
    </Edit>
  );
};
