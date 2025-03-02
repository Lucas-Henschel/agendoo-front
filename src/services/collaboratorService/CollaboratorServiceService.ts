import type { CollaboratorService } from "@/entities/CollaboratorService";
import { http } from "../http";
import axios from "axios";

export interface CreateCollaboratorServiceBody {
  codService: number;
  codEmployee: number;
}

export interface UpdateCollaboratorServiceBody {
  codEmployeeService: number;
  codService: number;
  codEmployee: number;
  active: boolean;
}

export default class CollaboratorServiceService {
  static async info() {
    try {
      const data = await http.get<CollaboratorService[]>("/employeeService/info");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async create(body: CreateCollaboratorServiceBody) {
    try {
      const data = await http.post<CollaboratorService>("/employeeService", body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async update(body: UpdateCollaboratorServiceBody, collaboratorServiceId: number) {
    try {
      const data = await http.put<CollaboratorService>(`/employeeService/${collaboratorServiceId}`, body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async delete(collaboratorServiceId: number) {
    try {
      const data = await http.delete(`/employeeService/${collaboratorServiceId}`);

      return { data: data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
