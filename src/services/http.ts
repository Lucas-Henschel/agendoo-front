import { localStorageKeys } from "@/config/localStorageKeys";

import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (accessToken) {
    config.headers!["token"] = accessToken;
  }

  return config;
});

http.interceptors.response.use(
  async (data) => {
    return data;
  },
  (error) => {
    const { response } = error;

    if (response && (response.status === 401 || response.status === 403)) {
      localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
