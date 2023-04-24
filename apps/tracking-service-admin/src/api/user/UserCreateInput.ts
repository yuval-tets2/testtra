import { InputJsonValue } from "../../types";
import { ShipmentCreateNestedManyWithoutUsersInput } from "./ShipmentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  shipments?: ShipmentCreateNestedManyWithoutUsersInput;
  username: string;
};
