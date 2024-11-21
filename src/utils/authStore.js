import { create } from "zustand";
import Cookies from "js-cookie";

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
}));

export default useAuthStore;
