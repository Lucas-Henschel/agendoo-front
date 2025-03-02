import type { User } from "@/entities/User";
import { http } from "../http";
import axios from "axios";

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  token: string;
  currentUser: Omit<User, "password">;
}

export default class AuthService {
  static async signin(params: SigninParams) {
    try {
      const data = await http.post<SigninResponse>("/auth/login", params);

      return { data: data.data, error: null };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { data: null, error: error.response.data?.message || "Erro desconhecido" };
      }

      return { data: null, error: "Erro desconhecido" };
    }
  }
}
