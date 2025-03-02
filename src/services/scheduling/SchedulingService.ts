import { http } from "../http";
import axios from "axios";

export interface SchedulingDashboard {
  id: number;
  title: string;
  description: string;
  people: string[];
  start: string;
  end: string;
}

export default class SchedulingService {
  static async schedulingDashboard() {
    try {
      const data = await http.get<SchedulingDashboard[]>("/scheduling/dashboard");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
