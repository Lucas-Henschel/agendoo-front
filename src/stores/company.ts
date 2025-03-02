import { defineStore } from "pinia";
import CompanyService from "@/services/company/CompanyService";

export const useCompanyStore = defineStore(
  "company",
  () => {
    const info = async () => {
      const { data, error } = await CompanyService.info();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      info,
    };
  },
  {
    persist: true,
  },
);
