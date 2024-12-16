import React, { useEffect, useState } from "react";
import useStore from "@/stores/TransactionStore";
import useStoreProduct from "@/stores/ProductStore";
import useAuthStore from "@/utils/authStore";
import { jwtDecode } from "jwt-decode";

import { GrTransaction } from "react-icons/gr";
import { MdLocalShipping, MdStore } from "react-icons/md";
import MaterialChartSupplier from "../ui/MaterialChartSupplier";
import MaterialPie from "../ui/MaterialPie";

const DashboardSupplierPage = () => {
  const { transaction, loading, error, fetchTransactions } = useStore(
    (state) => state,
  );

  const { product, fetchProducts } = useStoreProduct((state) => state);

  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filteredStatusOnProgress, setFilteredStatusOnProgress] = useState([]);
  const [filteredStatusSucess, setFilteredStatusSuccess] = useState([]);
  const token = useAuthStore((state) => state.getToken());
  const userId = token ? jwtDecode(token).userID : null;

  useEffect(() => {
    fetchTransactions(`${import.meta.env.VITE_API_URL}/api/orders`);
  }, [fetchTransactions]); // Menjalankan hanya sekali saat komponen dimuat

  useEffect(() => {
    fetchProducts(`${import.meta.env.VITE_API_URL}/api/products`);
  }, [fetchProducts]);

  useEffect(() => {
    if (transaction.length > 0 && userId) {
      // Memfilter transaksi berdasarkan ID pengguna

      const userTransactions = transaction.filter((trans) => {
        return trans?.product?.userID === userId;
      });
      setFilteredTransactions(userTransactions);

      const onProgressTransactions = userTransactions.filter(
        (trans) => trans.status === "ON_PROGRESS",
      );

      if (onProgressTransactions.length > 0) {
        setFilteredStatusOnProgress(
          onProgressTransactions.map((trans) => trans.status),
        );
      } else {
        setFilteredStatusOnProgress([]);
      }

      const successTransactions = userTransactions.filter(
        (trans) => trans.status === "SUCCESS",
      );
      if (successTransactions.length > 0) {
        setFilteredStatusSuccess(
          successTransactions.map((trans) => trans.status),
        );
      }
    }
  }, [transaction, userId]);

  return (
    <div className="min-h-screen p-8">
      <h3 className="mt-20 text-2xl font-semibold">Dashboard</h3>

      {/* Card Start */}
      <div className="mb-2 flex flex-col items-center justify-center gap-4 lg:flex-row">
        {/* Card Transaction */}
        <div>
          <div className="border-slate-200 relative flex w-56 flex-col rounded-lg border bg-white shadow-sm">
            <div className="px-4 py-5">
              <div className="flex items-center gap-x-4">
                <GrTransaction size={24} />
                <h5 className="text-slate-800 text-xl font-semibold">
                  Transaksi
                </h5>
              </div>
              <div className="flex justify-center">
                <h3 className="text-slate-600 text-7xl font-light leading-normal">
                  {filteredTransactions.length}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card Product */}
        <div>
          <div className="border-slate-200 relative flex w-56 flex-col rounded-lg border bg-white shadow-sm">
            <div className="px-4 py-5">
              <div className="flex items-center gap-x-4">
                <GrTransaction size={24} />
                <h5 className="text-slate-800 text-xl font-semibold">
                  Stok Produk
                </h5>
              </div>
              <div className="flex justify-center">
                <h3 className="text-slate-600 text-7xl font-light leading-normal">
                  {product?.map((item) => item.stock).reduce((a, b) => a + b)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card status on process */}
        <div>
          <div className="border-slate-200 relative flex w-56 flex-col rounded-lg border bg-white shadow-sm">
            <div className="p-2">
              <div className="flex items-center gap-4">
                <MdLocalShipping size={24} />
                <h5 className="text-slate-800 text-xl font-semibold">
                  Transaksi Dalam Proses
                </h5>
              </div>
              <div className="flex justify-center">
                <h3 className="text-slate-600 text-7xl font-light leading-normal">
                  {filteredStatusOnProgress.length}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card success */}
        <div>
          <div className="border-slate-200 relative flex w-56 flex-col rounded-lg border bg-white shadow-sm">
            <div className="p-2">
              <div className="flex items-center gap-x-4">
                <MdStore size={24} />
                <h5 className="text-slate-800 text-xl font-semibold">
                  Transaksi Sukses
                </h5>
              </div>
              <div className="flex justify-center">
                <h3 className="text-slate-600 text-7xl font-light leading-normal">
                  {filteredStatusSucess.length}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card End */}

      <MaterialChartSupplier />
      <MaterialPie />
    </div>
  );
};

export default DashboardSupplierPage;
