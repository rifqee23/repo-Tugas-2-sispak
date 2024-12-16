import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
  isAuthenticated: !!Cookies.get("access_token"),
  loginUser: (token) => {
    Cookies.set("access_token", token, { expires: 1 });
    set({ isAuthenticated: true });
  },

  logoutUser: () => {
    Cookies.remove("access_token");
    set({ isAuthenticated: false });
  },
  getToken: () => {
    const token = Cookies.get("access_token");

    return token;
  },
}));

export default useAuthStore;
