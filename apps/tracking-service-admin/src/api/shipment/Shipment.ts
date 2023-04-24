import { User } from "../user/User";

export type Shipment = {
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Ready" | "Delivered" | "Returned" | null;
  trackingNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
