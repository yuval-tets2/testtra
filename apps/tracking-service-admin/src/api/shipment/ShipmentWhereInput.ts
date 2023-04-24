import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShipmentWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Ready" | "Delivered" | "Returned";
  trackingNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
