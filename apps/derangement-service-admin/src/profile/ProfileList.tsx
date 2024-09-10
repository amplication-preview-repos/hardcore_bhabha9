import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fastDerangement" source="fastDerangement" />
        <TextField label="fastTimeNs" source="fastTimeNs" />
        <TextField label="ID" source="id" />
        <TextField label="naiveDerangement" source="naiveDerangement" />
        <TextField label="naiveTimeNs" source="naiveTimeNs" />
        <TextField label="testSize" source="testSize" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
