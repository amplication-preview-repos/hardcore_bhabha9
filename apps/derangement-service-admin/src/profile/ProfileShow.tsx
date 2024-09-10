import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fastDerangement" source="fastDerangement" />
        <TextField label="fastTimeNs" source="fastTimeNs" />
        <TextField label="ID" source="id" />
        <TextField label="naiveDerangement" source="naiveDerangement" />
        <TextField label="naiveTimeNs" source="naiveTimeNs" />
        <TextField label="testSize" source="testSize" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
