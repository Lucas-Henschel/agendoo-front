import { defineStore } from "pinia";
import CollaboratorService, { type CreateCollaboratorBody, type UpdateCollaboratorBody } from "@/services/collaborator/CollaboratorService";

export const useCollaboratorStore = defineStore(
  "collaborator",
  () => {
    const info = async () => {
      const { data, error } = await CollaboratorService.info();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const create = async (body: CreateCollaboratorBody) => {
      const { data, error } = await CollaboratorService.create(body);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const update = async (body: UpdateCollaboratorBody, collaboratorId: number) => {
      const { data, error } = await CollaboratorService.update(body, collaboratorId);

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const remove = async (collaboratorId: number) => {
      const { data, error } = await CollaboratorService.delete(collaboratorId);

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
