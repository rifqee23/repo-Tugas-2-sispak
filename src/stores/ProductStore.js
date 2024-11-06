import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: [
    {
      id: 1,
      name: "Laptop ASUS",
      category: "Electronics",
      price: 7500000,
      stock: 25,
      supplier: "PT. Teknologi Nusantara",
    },
    {
      id: 2,
      name: "Laptop Lenovo",
      category: "Electronics",
      price: 7500000,
      stock: 25,
      supplier: "PT. Teknologi Nusantara",
    },
  ],
  addProduct: (newProduct) =>
    set((state) => ({
      product: [...state.product, newProduct],
    })),
}));
