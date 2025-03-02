import type { Address } from "./Address";
import type { CompanyInformations } from "./CompanyInformations";
import type { FlowInformation } from "./FlowInformations";
import type { User } from "./User";

export interface Company {
  id: number;
  addressEntity: Address;
  userEntity: User;
  flowInformationsEntity: FlowInformation;
  companyInformationsEntity: Omit<CompanyInformations, "password">;
  active: boolean;
  createdAt: Date;
}
