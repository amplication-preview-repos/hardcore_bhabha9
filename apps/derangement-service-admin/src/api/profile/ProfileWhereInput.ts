import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  fastDerangement?: FloatNullableFilter;
  fastTimeNs?: IntNullableFilter;
  id?: StringFilter;
  naiveDerangement?: FloatNullableFilter;
  naiveTimeNs?: IntNullableFilter;
  testSize?: IntNullableFilter;
};
