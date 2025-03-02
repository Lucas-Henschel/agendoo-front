import type { Role } from "@/entities/Role";
import { http } from "../http";
import axios from "axios";

export default class RoleService {
  static async listAll() {
    try {
      const data = await http.get<Role[]>("/role");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
