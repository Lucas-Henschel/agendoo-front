import { http } from "../http";
import axios from "axios";
import type { FlowInformation } from "@/entities/FlowInformations";

export interface UpdateFlowInformation {
  defaultMessage: string,
  flowMessage: string,
  flowCta: string,
}

export default class FlowInformationService {
  static async info() {
    try {
      const data = await http.get<FlowInformation>("/flowInformations/info");

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }

  static async update(id: number, body: UpdateFlowInformation) {
    try {
      const data = await http.put(`/flowInformations/web/${id}`, body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
