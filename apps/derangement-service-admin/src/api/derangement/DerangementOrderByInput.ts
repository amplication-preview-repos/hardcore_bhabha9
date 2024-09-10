import { SortOrder } from "../../util/SortOrder";

export type DerangementOrderByInput = {
  createdAt?: SortOrder;
  executionTimeNs?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
