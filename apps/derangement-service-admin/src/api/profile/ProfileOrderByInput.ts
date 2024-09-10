import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  fastDerangement?: SortOrder;
  fastTimeNs?: SortOrder;
  id?: SortOrder;
  naiveDerangement?: SortOrder;
  naiveTimeNs?: SortOrder;
  testSize?: SortOrder;
  updatedAt?: SortOrder;
};
