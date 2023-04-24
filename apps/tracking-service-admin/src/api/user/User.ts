import { JsonValue } from "type-fest";
import { Shipment } from "../shipment/Shipment";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  shipments?: Array<Shipment>;
  updatedAt: Date;
  username: string;
};
