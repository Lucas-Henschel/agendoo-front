import { defineStore } from "pinia";
import DashboardService from "@/services/dashboard/DashboardService";

export const useDashboardStore = defineStore(
  "dashboard",
  () => {
    const webDashboard = async () => {
      const { data, error } = await DashboardService.webDashboard();

      if (!data || error) {
        throw new Error(error);
      }

      return data;
    };

    return {
      webDashboard,
    };
  },
  {
    persist: true,
  },
);
