import { User } from "./user.model";

export interface JwtResponse {
  token: string;
  role: string;
  message: string;
  success: boolean;
}
