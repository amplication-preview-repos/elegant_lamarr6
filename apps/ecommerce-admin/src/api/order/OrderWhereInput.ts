import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
