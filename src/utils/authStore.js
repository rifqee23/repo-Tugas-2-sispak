import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  isAuthenticated: !!Cookies.get("access_token"),
  loginUser: (token) => {
    Cookies.set("access_token", token, { expires: 3 });
    console.log("Cookie set:", Cookies.get("access_token")); // Log untuk memeriksa cookie

    set({ isAuthenticated: true });
  },

  logoutUser: () => {
    Cookies.remove("access_token");
    set({ isAuthenticated: false });
  },
  getToken: () => {
    const token = Cookies.get("access_token");
    // console.log("Retrieved token:", token);
    return token;
  },
}));

export default useAuthStore;
