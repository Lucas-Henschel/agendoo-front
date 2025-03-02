import { defineStore } from "pinia";
import ServicesService from "@/services/services/ServicesService";
import type { CreateServiceBody } from "@/views/Services/modals/NewServiceModal.vue";
import type { UpdateServiceBody } from "@/views/Services/modals/EditServiceModal.vue";

export const useServiceStore = defineStore(
  "service",
  () => {
    const info = async () => {
      const { data, error } = await ServicesService.info();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const create = async (body: CreateServiceBody) => {
      const { data, error } = await ServicesService.create(body);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const update = async (body: UpdateServiceBody, serviceId: number) => {
      const { data, error } = await ServicesService.update(body, serviceId);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const remove = async (serviceId: number) => {
      const { data, error } = await ServicesService.delete(serviceId);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      info,
      create,
      update,
      remove,
    };
  },
  {
    persist: true,
  },
);
