import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="fastDerangement" source="fastDerangement" />
        <NumberInput step={1} label="fastTimeNs" source="fastTimeNs" />
        <NumberInput label="naiveDerangement" source="naiveDerangement" />
        <NumberInput step={1} label="naiveTimeNs" source="naiveTimeNs" />
        <NumberInput step={1} label="testSize" source="testSize" />
      </SimpleForm>
    </Create>
  );
};
