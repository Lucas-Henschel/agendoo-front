import { defineStore } from "pinia";
import RoleService from "@/services/role/RoleService";

export const useRoleStore = defineStore(
  "role",
  () => {
    const listAll = async () => {
      const { data, error } = await RoleService.listAll();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      listAll,
    };
  },
  {
    persist: true,
  },
);
