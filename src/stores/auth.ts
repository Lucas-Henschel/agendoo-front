import { defineStore } from "pinia";
import AuthService, { type SigninParams } from "@/services/auth/AuthService";
import { localStorageKeys } from "@/config/localStorageKeys";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const role = ref<string>("");
    const userName = ref<string>("");

    const signin = async (params: SigninParams) => {
      const { data, error } = await AuthService.signin(params);

      if (!data || error) {
        throw new Error(error);
      }

      role.value = data.currentUser.roles[0].name;
      userName.value = data.currentUser.name;
      localStorage.setItem(localStorageKeys.ACCESS_TOKEN, data.token);
      return data;
    };

    const signout = () => {
      localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
      role.value = "";
      userName.value = "";
    };

    return {
      signin,
      signout,
      role,
      userName,
    };
  },
  {
    persist: true,
  },
);
