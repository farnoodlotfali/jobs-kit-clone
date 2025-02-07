import { IUser } from "@/types/schema/user";

export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface LoginResponse extends Omit<IUser, "telegramUserId"> {
  token: string;
}
