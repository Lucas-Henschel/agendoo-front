import { http } from "../http";
import axios from "axios";

export interface DashboardWebData {
  label: string;
  value: number;
}

export interface DashboardWeb {
  totalAppointments: number;
  pendingAppointments: number;
  completedTodayAppointments: number;
  mostRequestedServices: DashboardWebData[];
  appointmentsOverTime: DashboardWebData[];
  revenuePerService: DashboardWebData[];
}

export default class DashboardService {
  static async webDashboard() {
    try {
      const data = await http.get<DashboardWeb>("/dashboard/web");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
