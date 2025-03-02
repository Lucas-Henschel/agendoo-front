import { defineStore } from "pinia";
import CollaboratorServiceService, { type CreateCollaboratorServiceBody, type UpdateCollaboratorServiceBody } from "@/services/collaboratorService/CollaboratorServiceService";

export const useCollaboratorServiceStore = defineStore(
  "collaboratorService",
  () => {
    const info = async () => {
      const { data, error } = await CollaboratorServiceService.info();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const create = async (body: CreateCollaboratorServiceBody) => {
      const { data, error } = await CollaboratorServiceService.create(body);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const update = async (body: UpdateCollaboratorServiceBody, collaboratorServiceId: number) => {
      const { data, error } = await CollaboratorServiceService.update(body, collaboratorServiceId);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const remove = async (collaboratorServiceId: number) => {
      const { data, error } = await CollaboratorServiceService.delete(collaboratorServiceId);

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
