import { http } from "../http";
import axios from "axios";
import type { Service } from "@/entities/Service";
import type { CreateServiceBody } from "@/views/Services/modals/NewServiceModal.vue";
import type { UpdateServiceBody } from "@/views/Services/modals/EditServiceModal.vue";

export default class ServicesService {
  static async info() {
    try {
      const data = await http.get<Service[]>("/service/info");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async create(body: CreateServiceBody) {
    try {
      const data = await http.post<Service>("/service", body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async update(body: UpdateServiceBody, serviceId: number) {
    try {
      const data = await http.put<Service>(`/service/${serviceId}`, body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async delete(serviceId: number) {
    try {
      const data = await http.delete(`/service/${serviceId}`);

      return { data: data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
