import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DerangementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Derangements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="executionTimeNs" source="executionTimeNs" />
        <TextField label="ID" source="id" />
        <TextField label="method" source="method" />
        <TextField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
