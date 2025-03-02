import { defineStore } from "pinia";
import SchedulingService from "@/services/scheduling/SchedulingService";

export const useSchedulingStore = defineStore(
  "scheduling",
  () => {
    const schedulingDashboard = async () => {
      const { data, error } = await SchedulingService.schedulingDashboard();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      schedulingDashboard,
    };
  },
  {
    persist: true,
  },
);
