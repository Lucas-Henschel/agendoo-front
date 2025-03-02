import { defineStore } from "pinia";
import CompanyInformationService, { type UpdateCompanyInformation } from "@/services/companyInformation/CompanyInformationService";

export const useCompanyInformationStore = defineStore(
  "companyInformation",
  () => {
    const update = async (id: number, body: UpdateCompanyInformation) => {
      const { data, error } = await CompanyInformationService.update(id, body);

      if (error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      update,
    };
  },
  {
    persist: true,
  },
);
