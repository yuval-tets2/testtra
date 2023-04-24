import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
