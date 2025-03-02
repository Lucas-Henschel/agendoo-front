import type { User } from "./User";

export interface Collaborator {
  id: number;
  userEntity: User;
  contactUser: string;
  hiredIn: Date;
  active: boolean;
  createdAt: Date;
}
