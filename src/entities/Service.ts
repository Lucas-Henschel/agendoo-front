import type { Company } from "./Company";

export interface Service {
  id: number;
  company: Company;
  name: string;
  description: string;
  price: number;
  averageTime: number;
  active: boolean;
  createdAt: Date;
  deletedAt: Date | null;
}
