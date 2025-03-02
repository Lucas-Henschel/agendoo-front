import { http } from "../http";
import axios from "axios";

export interface UpdateCompanyInformation {
  name: string,
  cnpj: string,
  email: string,
  phone: string,
  password: string,
  startTime: string,
  endTime: string,
  averageTimeWork: number,
}

export default class CompanyInformationService {
  static async update(id: number, body: UpdateCompanyInformation) {
    try {
      const data = await http.put(`/companyInformations/web/${id}`, body);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
