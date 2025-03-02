import { http } from "../http";
import axios from "axios";
import type { Company } from "@/entities/Company";

export default class CompanyService {
  static async info() {
    try {
      const data = await http.get<Company>("/company/info");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
