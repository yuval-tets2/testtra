import { InputJsonValue } from "../../types";
import { ShipmentUpdateManyWithoutUsersInput } from "./ShipmentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  shipments?: ShipmentUpdateManyWithoutUsersInput;
  username?: string;
};
