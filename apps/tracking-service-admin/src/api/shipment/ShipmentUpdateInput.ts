import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShipmentUpdateInput = {
  date?: Date | null;
  status?: "Ready" | "Delivered" | "Returned" | null;
  trackingNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
