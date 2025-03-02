export enum RoleEnum {
  ADMIN = "ADMIN",
  SUPER = "SUPER",
  CLIENT = "CLIENT",
  EMPLOYEE = "EMPLOYEE",
}

export interface Role {
  id: number;
  name: string;
}
