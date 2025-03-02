import type { Role } from "./Role";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  roles: Role[];
  active: boolean;
  createdAt: Date;
}
