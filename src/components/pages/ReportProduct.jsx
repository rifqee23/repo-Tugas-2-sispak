import React, { useEffect } from "react";
import useStore from "@/stores/OrderStore";
import { useParams } from "react-router-dom";

const ReportProduct = () => {
  const { id } = useParams();
  const { order, loading, error, fetchOrdersById } = useStore((state) => state);

  useEffect(() => {
    fetchOrdersById(
      `${import.meta.env.VITE_API_URL}/api/orders/supplier/order`,
      id,
    );
  }, []);

  console.log(order);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Order Not Found</div>;
  return (
    <div>
      <h3>Detail Pesanan</h3>
      <p>ID Pesanan: {order?.orderID}</p>
      <p>Status: {order?.status}</p>
      <p>Jumlah: {order?.quantity}</p>
      <p>Tanggal Dibuat: {new Date(order?.created_at).toLocaleString()}</p>

      <h3>Produk</h3>
      <p>Nama Produk: {order?.product?.name}</p>
      <p>Deskripsi: {order?.product?.description}</p>
      <p>
        Harga:{" "}
        {order?.product?.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>

      <h3>Pelanggan</h3>
      <p>Nama Pelanggan: {order?.customer?.username}</p>
    </div>
  );
};

export default ReportProduct;
