import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Button from "../atoms/Button";
import axios from "axios";
import Cookies from "js-cookie";
import UpdateProductModal from "./updateProductModal";
import { jwtDecode } from "jwt-decode";
import { renderTableRow } from "@/utils/renderTableRow"; // Pastikan path ini benar

const TableProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const token = Cookies.get("access_token");
  const userId = jwtDecode(token).userID; // Dekode token untuk mendapatkan userID

  // Fungsi untuk membuka modal dan mengatur produk yang dipilih
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  // Fungsi untuk menghapus produk
  const handleDeleteProduct = async (productID) => {
    console.log("Deleting product with ID:", productID); // Log ID produk yang akan dihapus
    try {
      await axios.delete(`http://localhost:3000/api/products/${productID}`, {
        headers: { Authorization: `${token}` },
      });
      setProducts((prev) =>
        prev.filter((item) => item.productID !== productID),
      );
    } catch (error) {
      console.error("Error response:", error.response); // Log respons kesalahan
      setError("Error deleting product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Mengambil data produk dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/user/${userId}`,
          { headers: { Authorization: `${token}` } },
        );
        setProducts(response.data.data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId, token]);

  // Fungsi untuk memperbarui produk
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:3000/api/products/${selectedProduct.productID}`,
        updatedProduct,
        { headers: { Authorization: `${token}` } },
      );
      setProducts((prev) =>
        prev.map((item) =>
          item.productID === selectedProduct.productID
            ? { ...item, ...updatedProduct }
            : item,
        ),
      );
    } catch (error) {
      setError("Error updating product: " + error.message);
    } finally {
      handleClose();
    }
  };

  console.log(products.length);

  return (
    <>
      <Button className={"mb-4 rounded-md bg-deep-orange-200 px-2 py-1"}>
        Add Product
      </Button>
      <Card className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              {[
                "ID",
                "Name",
                "Description",
                "Price",
                "Stock",
                "Category",
                "Unit",
                "Material",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {header}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="p-4 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Loading...
                  </Typography>
                </td>
              </tr>
            ) : error || products.length === 0 ? (
              <tr>
                <td colSpan="9" className="p-4 text-center">
                  <Typography
                    variant="small"
                    color="red"
                    className="font-normal"
                  >
                    DATA KOSONG
                  </Typography>
                </td>
              </tr>
            ) : (
              products.map((item) =>
                renderTableRow(item, handleOpen, handleDeleteProduct),
              ) // Menggunakan fungsi dari utils
            )}
          </tbody>
        </table>
        <UpdateProductModal
          open={open}
          handler={handleClose}
          onClick={handleClose}
          product={selectedProduct}
          onSubmit={handleUpdateProduct}
        />
      </Card>
    </>
  );
};

export default TableProduct;
