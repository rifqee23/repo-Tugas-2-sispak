import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Button from "../atoms/Button";
import axios from "axios";
import Cookies from "js-cookie";
import UpdateProductModal from "./updateProductModal";
import { jwtDecode } from "jwt-decode";

const TableProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = async (productID) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productID}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setProduct((prev) => prev.filter((item) => item.productID !== productID));
    } catch (error) {
      console.log(error.message);
      setError("Error deleting product: " + error.message);
    }
  };

  const token = Cookies.get("access_token");
  const decoded = jwtDecode(token);
  const userId = decoded.userID;

  console.log(decoded);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/user/${userId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          },
        );
        setProduct(response.data.data);
      } catch (error) {
        console.log(error.message);
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      console.log(updatedProduct);
      await axios.put(
        `http://localhost:3000/api/products/${selectedProduct.productID}`,
        updatedProduct,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );
      setProduct((prev) =>
        prev.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item,
        ),
      );
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      handleClose();
    }
  };

  return (
    <Card className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                ID
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Name
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Description
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Price
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Stock
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Category
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Unit
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Material
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Action
              </Typography>
            </th>
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
          ) : error ? (
            <tr>
              <td colSpan="9" className="p-4 text-center">
                <Typography variant="small" color="red" className="font-normal">
                  {error}
                </Typography>
              </td>
            </tr>
          ) : product.length === 0 ? (
            <tr>
              <td colSpan="9" className="p-4 text-center">
                <Typography variant="small" color="red" className="font-normal">
                  DATA KOSONG
                </Typography>
              </td>
            </tr>
          ) : (
            product.map((item) => (
              <tr key={item.productID}>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.productID || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="whitespace-nowrap border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.name || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.description || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price) || "N/A"}{" "}
                    {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.stock || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.category || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.unit || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.material || "N/A"} {/* Menambahkan fallback */}
                  </Typography>
                </td>
                <td className="flex gap-4 border-b border-blue-gray-50 p-4">
                  <Button onClick={() => handleOpen(item)}>Edit</Button>
                  <Button onClick={() => handleDeleteProduct(item.productID)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        <UpdateProductModal
          open={open}
          handler={handleClose}
          onClick={handleClose}
          product={selectedProduct}
          onSubmit={handleUpdateProduct}
        />
      </div>
    </Card>
  );
};

export default TableProduct;
