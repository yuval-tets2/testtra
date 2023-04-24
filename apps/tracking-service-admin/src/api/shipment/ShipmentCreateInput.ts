import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShipmentCreateInput = {
  date?: Date | null;
  status?: "Ready" | "Delivered" | "Returned" | null;
  trackingNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
