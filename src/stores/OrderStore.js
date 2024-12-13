import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  order: null,
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
}));

export default useStore;
