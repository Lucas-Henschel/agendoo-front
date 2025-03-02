import { defineStore } from "pinia";
import FlowInformationService, { type UpdateFlowInformation } from "@/services/flowInformation/FlowInformationService";

export const useFlowInformationStore = defineStore(
  "flowInformation",
  () => {
    const info = async () => {
      const { data, error } = await FlowInformationService.info();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    const update = async (id: number, body: UpdateFlowInformation) => {
      const { data, error } = await FlowInformationService.update(id, body);

      if (error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      info,
      update
    };
  },
  {
    persist: true,
  },
);
