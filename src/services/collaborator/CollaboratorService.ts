import { http } from "../http";
import axios from "axios";
import type { Collaborator } from "@/entities/Collaborator";

export interface CreateCollaboratorBody {
  name: string,
  email: string,
  cpf: string,
  phone: string,
  password: string,
  contactInformation: string;
}

export interface UpdateCollaboratorBody {
  name: string,
  email: string,
  cpf: string,
  phone: string,
  active: boolean,
  password: string,
  contactInformation: string;
}

export default class CollaboratorServiceService {
  static async info() {
    try {
      const data = await http.get<Collaborator[]>("/employee/info");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async create(body: CreateCollaboratorBody) {
    try {
      const data = await http.post<Collaborator>("/employee", body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async update(body: UpdateCollaboratorBody, collaboratorId: number) {
    try {
      const data = await http.put<Collaborator>(`/employee/${collaboratorId}`, body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async delete(collaboratorId: number) {
    try {
      const data = await http.delete(`/employee/${collaboratorId}`);

      return { data: data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
