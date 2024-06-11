import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
