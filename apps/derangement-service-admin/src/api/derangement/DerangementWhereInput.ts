import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DerangementWhereInput = {
  executionTimeNs?: IntNullableFilter;
  id?: StringFilter;
  method?: StringNullableFilter;
  result?: FloatNullableFilter;
};
