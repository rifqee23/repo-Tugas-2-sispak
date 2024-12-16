import { create } from "zustand";
import axios from "axios";
import useAuthStore from "@/utils/authStore";

const useStore = create((set) => ({
  order: null,
  history: [],
  loading: false,
  error: null,
  fetchOrdersById: async (url, id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${url}/${id}`);
      set({ order: res.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchHistory: async (url) => {
    set({ loading: true, error: null });
    try {
      const token = useAuthStore.getState().getToken();
      const res = await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      set({ history: res.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
