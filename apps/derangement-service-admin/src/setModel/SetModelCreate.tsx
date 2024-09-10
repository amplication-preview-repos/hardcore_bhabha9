import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const SetModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="size" source="size" />
      </SimpleForm>
    </Create>
  );
};
